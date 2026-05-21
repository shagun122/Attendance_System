function EmployeeTable({
  darkMode,
  employees,
  deleteEmployee,
  setEditEmployee,
  setShowModal,
  setSelectedEmployee,
  toggleAttendance,
}) {

  return (

    <div
      className={`p-8 rounded-3xl shadow-2xl overflow-x-auto ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-white text-black"
      }`}
    >

      {/* Heading */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Employee Management
        </h1>

        <p className="mt-2 opacity-70">
          Manage employees professionally
        </p>

      </div>

      {/* Table */}
      <table className="w-full min-w-[1000px]">

        {/* Table Head */}
        <thead>

          <tr
            className={`border-b ${
              darkMode
                ? "border-slate-700"
                : "border-slate-300"
            }`}
          >

            <th className="pb-5 text-left">
              Employee
            </th>

            <th className="pb-5 text-left">
              Department
            </th>

            <th className="pb-5 text-left">
              Role
            </th>

            <th className="pb-5 text-left">
              Salary
            </th>

            <th className="pb-5 text-left">
              Status
            </th>

            <th className="pb-5 text-left">
              Actions
            </th>

          </tr>

        </thead>

        {/* Table Body */}
        <tbody>

          {employees.map((employee) => (

            <tr
              key={employee.id}
              className={`border-b ${
                darkMode
                  ? "border-slate-800"
                  : "border-slate-200"
              }`}
            >

              {/* Employee */}
              <td className="py-5">

                <div className="flex items-center gap-4">

                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>

                    <h1 className="font-semibold">
                      {employee.name}
                    </h1>

                    <p className="opacity-70 text-sm mt-1">
                      {employee.email}
                    </p>

                  </div>

                </div>

              </td>

              {/* Department */}
              <td className="py-5">
                {employee.department}
              </td>

              {/* Role */}
              <td className="py-5">
                {employee.role}
              </td>

              {/* Salary */}
              <td className="py-5 font-semibold text-green-500">
                ₹ {employee.salary}
              </td>

              {/* Status */}
              <td className="py-5">

                <button
                  onClick={() =>
                    toggleAttendance(
                      employee.id
                    )
                  }
                  className={`px-5 py-2 rounded-2xl text-white font-semibold transition-all duration-300 ${
                    employee.status ===
                    "Present"
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-red-500 hover:bg-red-600"
                  }`}
                >

                  {employee.status}

                </button>

              </td>

              {/* Actions */}
              <td className="py-5">

                <div className="flex gap-3">

                  {/* Edit */}
                  <button
                    onClick={() => {

                      setEditEmployee(
                        employee
                      );

                      setShowModal(true);
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-2xl transition-all duration-300"
                  >
                    Edit
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() =>
                      deleteEmployee(
                        employee.id
                      )
                    }
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-2xl transition-all duration-300"
                  >
                    Delete
                  </button>

                  {/* View */}
                  <button
                    onClick={() =>
                      setSelectedEmployee(
                        employee
                      )
                    }
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-2xl transition-all duration-300"
                  >
                    View
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default EmployeeTable;