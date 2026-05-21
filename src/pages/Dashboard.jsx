import { useState, useEffect } from "react";
import "./Dashboard.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AttendanceChart from "../components/AttendanceChart";

function Dashboard() {

  const [employees, setEmployees] = useState(() => {

    const savedEmployees =
      localStorage.getItem("employees");

    return savedEmployees
      ? JSON.parse(savedEmployees)
      : [

          {
            id: 1,
            name: "Rahul Sharma",
            department: "IT",
            status: "Present"
          },

          {
            id: 2,
            name: "Aman Verma",
            department: "HR",
            status: "Absent"
          },

          {
            id: 3,
            name: "Sneha Gupta",
            department: "Finance",
            status: "Present"
          }

        ];

  });

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [editId, setEditId] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const [selectedEmployee, setSelectedEmployee] =
    useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const employeesPerPage = 5;

  useEffect(() => {

    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );

  }, [employees]);

  const addEmployee = () => {

    if (name === "" || department === "") {

      toast.error("Please fill all fields");

      return;

    }

    if (editId !== null) {

      const updatedEmployees = employees.map((employee) =>

        employee.id === editId
          ? {
              ...employee,
              name: name,
              department: department
            }
          : employee

      );

      setEmployees(updatedEmployees);

      toast.success("Employee Updated Successfully");

      setEditId(null);

    } else {

      const newEmployee = {

        id: Date.now(),

        name: name,

        department: department,

        status: "Present"

      };

      setEmployees([...employees, newEmployee]);

      toast.success("Employee Added Successfully");

    }

    setName("");
    setDepartment("");

  };

  const deleteEmployee = (id) => {

    const updatedEmployees = employees.filter(
      (employee) => employee.id !== id
    );

    setEmployees(updatedEmployees);

    toast.error("Employee Deleted");

  };

  const toggleStatus = (id) => {

    const updatedEmployees = employees.map((employee) => {

      if (employee.id === id) {

        return {

          ...employee,

          status:
            employee.status === "Present"
              ? "Absent"
              : "Present"

        };

      }

      return employee;

    });

    setEmployees(updatedEmployees);

    toast.info("Employee Status Updated");

  };

  const editEmployee = (employee) => {

    setName(employee.name);

    setDepartment(employee.department);

    setEditId(employee.id);

  };

  const downloadCSV = () => {

    const headers =
      ["ID", "Name", "Department", "Status"];

    const rows = employees.map((employee) => [

      employee.id,
      employee.name,
      employee.department,
      employee.status

    ]);

    const csvContent = [

      headers,
      ...rows

    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob(
      [csvContent],
      { type: "text/csv" }
    );

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "employees.csv";

    a.click();

  };

  const filteredEmployees = employees.filter((employee) => {

    const matchesSearch =
      employee.name.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || employee.status === filter;

    return matchesSearch && matchesFilter;

  });

  const lastEmployeeIndex =
    currentPage * employeesPerPage;

  const firstEmployeeIndex =
    lastEmployeeIndex - employeesPerPage;

  const currentEmployees =
    filteredEmployees.slice(
      firstEmployeeIndex,
      lastEmployeeIndex
    );

  const totalPages = Math.ceil(
    filteredEmployees.length / employeesPerPage
  );

  const presentCount = employees.filter(
    (employee) => employee.status === "Present"
  ).length;

  const absentCount = employees.filter(
    (employee) => employee.status === "Absent"
  ).length;

  const presentPercentage =
    ((presentCount / employees.length) * 100).toFixed(0);

  const absentPercentage =
    ((absentCount / employees.length) * 100).toFixed(0);

  const departmentCount = new Set(
    employees.map((employee) => employee.department)
  ).size;

  return (

    <div className="main">

      <Sidebar />

      <div className={darkMode ? "dashboard dark" : "dashboard"}>

        <Navbar />

        <button
          className="dark-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <h1>Employee Management Dashboard</h1>

        <button
          className="download-btn"
          onClick={downloadCSV}
        >
          Download CSV
        </button>

        <div className="cards">

          <div className="card">
            <h2>Total Employees</h2>
            <p>{employees.length}</p>
          </div>

          <div className="card">
            <h2>Present Today</h2>
            <p>{presentCount}</p>
            <span>{presentPercentage}% Attendance</span>
          </div>

          <div className="card">
            <h2>Absent Today</h2>
            <p>{absentCount}</p>
            <span>{absentPercentage}% Absent</span>
          </div>

          <div className="card">
            <h2>Departments</h2>
            <p>{departmentCount}</p>
            <span>Active Departments</span>
          </div>

        </div>

        <div className="employee-form">

          <h2>
            {editId !== null ? "Edit Employee" : "Add Employee"}
          </h2>

          <input
            type="text"
            placeholder="Employee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />

          <button onClick={addEmployee}>
            {editId !== null
              ? "Update Employee"
              : "Add Employee"}
          </button>

        </div>

        <input
          type="text"
          placeholder="Search Employee"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filter-buttons">

          <button onClick={() => setFilter("All")}>
            All
          </button>

          <button onClick={() => setFilter("Present")}>
            Present
          </button>

          <button onClick={() => setFilter("Absent")}>
            Absent
          </button>

        </div>

        <AttendanceChart employees={employees} />

        <div className="employee-table">

          <h2>Employee List</h2>

          <table>

            <thead>

              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Status</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {currentEmployees.map((employee) => (

                <tr key={employee.id}>

                  <td>{employee.id}</td>

                  <td>{employee.name}</td>

                  <td>{employee.department}</td>

                  <td>{employee.status}</td>

                  <td>

                    <button
                      className="view-btn"
                      onClick={() =>
                        setSelectedEmployee(employee)
                      }
                    >
                      View
                    </button>

                    <button
                      className="edit-btn"
                      onClick={() => editEmployee(employee)}
                    >
                      Edit
                    </button>

                    <button
                      className="status-btn"
                      onClick={() =>
                        toggleStatus(employee.id)
                      }
                    >
                      Toggle Status
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteEmployee(employee.id)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          <div className="pagination">

            <button
              onClick={() =>
                setCurrentPage(currentPage - 1)
              }
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage(currentPage + 1)
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>

          </div>

        </div>

        {selectedEmployee && (

          <div className="modal-overlay">

            <div className="modal">

              <h2>Employee Details</h2>

              <p>
                <strong>ID:</strong>
                {selectedEmployee.id}
              </p>

              <p>
                <strong>Name:</strong>
                {selectedEmployee.name}
              </p>

              <p>
                <strong>Department:</strong>
                {selectedEmployee.department}
              </p>

              <p>
                <strong>Status:</strong>
                {selectedEmployee.status}
              </p>

              <button
                className="close-btn"
                onClick={() =>
                  setSelectedEmployee(null)
                }
              >
                Close
              </button>

            </div>

          </div>

        )}

        <ToastContainer />

      </div>

    </div>

  );

}

export default Dashboard;