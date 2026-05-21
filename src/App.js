import { useEffect, useState } from "react";

import { Toaster, toast } from "react-hot-toast";

import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

import StatCard from "./components/cards/StatCard";

import AttendanceChart from "./components/charts/AttendanceChart";
import PieChartCard from "./components/charts/PieChartCard";

import EmployeeTable from "./components/tables/EmployeeTable";

import RecentActivity from "./components/ui/RecentActivity";

import AddEmployeeModal from "./components/ui/AddEmployeeModal";

import EmployeeProfile from "./components/ui/EmployeeProfile";

import AnalyticsDashboard from "./components/analytics/AnalyticsDashboard";

import ReportsDashboard from "./components/reports/ReportsDashboard";

import ExportPDF from "./components/reports/ExportPDF";

import ExportExcel from "./components/reports/ExportExcel";

import SettingsPanel from "./components/settings/SettingsPanel";

import Login from "./components/auth/Login";

import AttendanceCalendar from "./components/attendance/AttendanceCalendar";

import Loader from "./components/ui/Loader";

import EmptyState from "./components/ui/EmptyState";

import DashboardBanner from "./components/ui/DashboardBanner";

import ThemeCustomizer from "./components/themes/ThemeCustomizer";

import PayrollAnalytics from "./components/payroll/PayrollAnalytics";

import SearchFilter from "./components/filters/SearchFilter";

import LeaveManagement from "./components/leaves/LeaveManagement";

import AdvancedAnalytics from "./components/analytics/AdvancedAnalytics";

import NotificationCenter from "./components/ui/NotificationCenter";

function App() {

  const [activePage, setActivePage] =
    useState("dashboard");

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [darkMode, setDarkMode] =
    useState(true);

  const [theme, setTheme] =
    useState("blue");

  const [searchTerm, setSearchTerm] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [showModal, setShowModal] =
    useState(false);

  const [editEmployee, setEditEmployee] =
    useState(null);

  const [
    selectedEmployee,
    setSelectedEmployee,
  ] = useState(null);

  const [notifications, setNotifications] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [isLoggedIn, setIsLoggedIn] =
    useState(() => {

      return (
        localStorage.getItem(
          "isLoggedIn"
        ) === "true"
      );
    });

  const [userRole, setUserRole] =
    useState("Admin");

  const [employees, setEmployees] =
    useState(() => {

      const savedEmployees =
        localStorage.getItem(
          "employees"
        );

      return savedEmployees
        ? JSON.parse(savedEmployees)
        : [

            {
              id: 1,
              name: "Rahul Sharma",
              email:
                "rahul@gmail.com",
              department:
                "Frontend Developer",
              role: "Developer",
              status: "Present",
              salary: 45000,
              image:
                "https://randomuser.me/api/portraits/men/1.jpg",
            },

            {
              id: 2,
              name: "Priya Singh",
              email:
                "priya@gmail.com",
              department: "HR",
              role: "Manager",
              status: "Absent",
              salary: 55000,
              image:
                "https://randomuser.me/api/portraits/women/2.jpg",
            },

            {
              id: 3,
              name: "Amit Verma",
              email:
                "amit@gmail.com",
              department:
                "Backend Developer",
              role: "Developer",
              status: "Present",
              salary: 60000,
              image:
                "https://randomuser.me/api/portraits/men/3.jpg",
            },

            {
              id: 4,
              name: "Sneha Kapoor",
              email:
                "sneha@gmail.com",
              department:
                "UI/UX Designer",
              role: "Designer",
              status: "Absent",
              salary: 50000,
              image:
                "https://randomuser.me/api/portraits/women/4.jpg",
            },

            {
              id: 5,
              name: "Rohit Mehta",
              email:
                "rohit@gmail.com",
              department:
                "Data Analyst",
              role: "Analyst",
              status: "Present",
              salary: 70000,
              image:
                "https://randomuser.me/api/portraits/men/5.jpg",
            },

          ];
    });

  useEffect(() => {

    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );

  }, [employees]);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2000);

    return () =>
      clearTimeout(timer);

  }, []);

  /* Filter Logic */
  const filteredEmployees =
    employees.filter((employee) => {

      const matchesSearch =

        employee.name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||

        employee.email
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||

        employee.department
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const matchesStatus =

        statusFilter === "All"
          ? true
          : employee.status ===
            statusFilter;

      return (
        matchesSearch &&
        matchesStatus
      );
    });

  /* Add Employee */
  const addEmployee = (employee) => {

    const newEmployee = {

      ...employee,

      id: Date.now(),

      image:
        employee.gender ===
        "female"
          ? `https://randomuser.me/api/portraits/women/${Math.floor(
              Math.random() * 50
            )}.jpg`
          : `https://randomuser.me/api/portraits/men/${Math.floor(
              Math.random() * 50
            )}.jpg`,
    };

    setEmployees([
      ...employees,
      newEmployee,
    ]);

    setNotifications((prev) => [

      {
        id: Date.now(),
        title: "New Employee Added",
        message: `${employee.name} added successfully`,
        time: "Just Now",
      },

      ...prev,
    ]);

    toast.success(
      "Employee Added Successfully"
    );
  };

  /* Delete Employee */
  const deleteEmployee = (id) => {

    const updatedEmployees =
      employees.filter(
        (employee) =>
          employee.id !== id
      );

    setEmployees(updatedEmployees);

    setNotifications((prev) => [

      {
        id: Date.now(),
        title: "Employee Deleted",
        message:
          "Employee removed successfully",
        time: "Just Now",
      },

      ...prev,
    ]);

    toast.success(
      "Employee Deleted"
    );
  };

  /* Update Employee */
  const updateEmployee = (
    updatedEmployee
  ) => {

    const updatedData =
      employees.map((employee) =>

        employee.id ===
        updatedEmployee.id
          ? updatedEmployee
          : employee
      );

    setEmployees(updatedData);

    setNotifications((prev) => [

      {
        id: Date.now(),
        title: "Employee Updated",
        message: `${updatedEmployee.name} updated successfully`,
        time: "Just Now",
      },

      ...prev,
    ]);

    toast.success(
      "Employee Updated"
    );
  };

  /* Toggle Attendance */
  const toggleAttendance = (id) => {

    const updatedEmployees =
      employees.map((employee) => {

        if (
          employee.id === id
        ) {

          return {

            ...employee,

            status:
              employee.status ===
              "Present"
                ? "Absent"
                : "Present",
          };
        }

        return employee;
      });

    setEmployees(updatedEmployees);

    setNotifications((prev) => [

      {
        id: Date.now(),
        title: "Attendance Updated",
        message:
          "Employee attendance status changed",
        time: "Just Now",
      },

      ...prev,
    ]);

    toast.success(
      "Attendance Updated"
    );
  };

  /* Loader */
  if (loading) {

    return (
      <Loader
        darkMode={darkMode}
      />
    );
  }

  /* Login */
  if (!isLoggedIn) {

    return (

      <Login
        darkMode={darkMode}
        setIsLoggedIn={
          setIsLoggedIn
        }
      />

    );
  }

  return (

    <div
      className={`min-h-screen flex ${
        darkMode
          ? "bg-[#020817]"
          : "bg-slate-100"
      }`}
    >

      {/* Toast */}
      <Toaster
        position="top-right"
      />

      {/* Sidebar */}
      <Sidebar
        darkMode={darkMode}
        activePage={activePage}
        setActivePage={setActivePage}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        userRole={userRole}
      />

      {/* Main */}
      <div className="flex-1 p-4 lg:p-6 overflow-y-auto">

        {/* Navbar */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setIsLoggedIn={setIsLoggedIn}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Banner */}
        <DashboardBanner
          darkMode={darkMode}
        />

        {/* Top Actions */}
        <div className="flex flex-col lg:flex-row gap-4 justify-end mt-6">

          {/* Export Excel */}
          <ExportExcel
            employees={employees}
          />

          {/* Export PDF */}
          <ExportPDF
            employees={employees}
          />

          {/* Add Employee */}
          <button
            onClick={() => {

              setEditEmployee(
                null
              );

              setShowModal(true);
            }}
            className={`text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
              theme === "blue"
                ? "bg-blue-600 hover:bg-blue-700"
                : theme === "green"
                ? "bg-green-600 hover:bg-green-700"
                : theme === "purple"
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-orange-600 hover:bg-orange-700"
            }`}
          >
            Add Employee
          </button>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

          <StatCard
            title="Total Employees"
            value={
              employees.length
            }
            color="text-blue-500"
            darkMode={darkMode}
          />

          <StatCard
            title="Present Today"
            value={
              employees.filter(
                (emp) =>
                  emp.status ===
                  "Present"
              ).length
            }
            color="text-green-500"
            darkMode={darkMode}
          />

          <StatCard
            title="Absent Today"
            value={
              employees.filter(
                (emp) =>
                  emp.status ===
                  "Absent"
              ).length
            }
            color="text-red-500"
            darkMode={darkMode}
          />

          <StatCard
            title="Monthly Payroll"
            value={
              employees.reduce(
                (total, emp) =>
                  total +
                  Number(
                    emp.salary || 0
                  ),
                0
              )
            }
            color="text-purple-500"
            darkMode={darkMode}
          />

        </div>

        {/* Employees Search */}
        <div className="mt-8">

          <SearchFilter
            darkMode={darkMode}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />

        </div>

        {/* Dashboard */}
        {activePage ===
          "dashboard" && (

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

            <div className="xl:col-span-2">

              <AttendanceChart
                darkMode={darkMode}
                employees={employees}
              />

            </div>

            <div className="space-y-6">

              <PieChartCard
                darkMode={darkMode}
                employees={employees}
              />

              <AttendanceCalendar
                darkMode={darkMode}
              />

            </div>

          </div>

        )}

        {/* Employees */}
        {activePage ===
          "employees" && (

          <div className="mt-8">

            {filteredEmployees.length === 0 ? (

              <EmptyState
                darkMode={darkMode}
              />

            ) : (

              <EmployeeTable
                darkMode={darkMode}
                employees={filteredEmployees}
                deleteEmployee={deleteEmployee}
                setEditEmployee={setEditEmployee}
                setShowModal={setShowModal}
                setSelectedEmployee={setSelectedEmployee}
                toggleAttendance={toggleAttendance}
              />

            )}

          </div>

        )}

        {/* Analytics */}
        {activePage ===
          "analytics" && (

          <div className="space-y-8">

            <AnalyticsDashboard
              darkMode={darkMode}
              employees={employees}
            />

            <PayrollAnalytics
              employees={employees}
              darkMode={darkMode}
            />

            <AdvancedAnalytics
              darkMode={darkMode}
              employees={employees}
            />

          </div>

        )}

        {/* Leaves */}
        {activePage ===
          "leaves" && (

          <LeaveManagement
            darkMode={darkMode}
            employees={employees}
          />

        )}

        {/* Reports */}
        {activePage ===
          "reports" && (

          <ReportsDashboard
            darkMode={darkMode}
            employees={employees}
          />

        )}

        {/* Notifications */}
        {activePage ===
          "notifications" && (

          <NotificationCenter
            darkMode={darkMode}
            notifications={notifications}
            setNotifications={setNotifications}
          />

        )}

        {/* Settings */}
        {activePage ===
          "settings" && (

          <div className="mt-8 space-y-6">

            <SettingsPanel
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />

            <ThemeCustomizer
              theme={theme}
              setTheme={setTheme}
              darkMode={darkMode}
            />

          </div>

        )}

        {/* Recent Activity */}
        <div className="mt-8">

          <RecentActivity
            darkMode={darkMode}
          />

        </div>

      </div>

      {/* Modal */}
      <AddEmployeeModal
        isOpen={showModal}
        setIsOpen={setShowModal}
        theme={
          darkMode
            ? "dark"
            : "light"
        }
        addEmployee={addEmployee}
        editEmployee={editEmployee}
        updateEmployee={updateEmployee}
      />

      {/* Profile */}
      <EmployeeProfile
        selectedEmployee={selectedEmployee}
        setSelectedEmployee={setSelectedEmployee}
        darkMode={darkMode}
      />

    </div>
  );
}

export default App;