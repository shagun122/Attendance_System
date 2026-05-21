function ReportsDashboard({
  darkMode,
  employees,
}) {

  const presentEmployees =
    employees.filter(
      (emp) =>
        emp.status === "Present"
    ).length;

  const absentEmployees =
    employees.filter(
      (emp) =>
        emp.status === "Absent"
    ).length;

  return (

    <div className="mt-8 space-y-8">

      {/* Header */}
      <div
        className={`p-8 rounded-3xl shadow-2xl ${
          darkMode
            ? "bg-slate-900 text-white"
            : "bg-white text-black"
        }`}
      >

        <h1 className="text-4xl font-bold">
          Reports Dashboard
        </h1>

        <p className="mt-3 opacity-70">
          Attendance reports and employee summaries
        </p>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Total */}
        <div
          className={`p-8 rounded-3xl shadow-2xl ${
            darkMode
              ? "bg-slate-900 text-white"
              : "bg-white text-black"
          }`}
        >

          <h1 className="text-xl opacity-70">
            Total Employees
          </h1>

          <h2 className="text-5xl font-bold mt-4 text-blue-500">
            {employees.length}
          </h2>

        </div>

        {/* Present */}
        <div
          className={`p-8 rounded-3xl shadow-2xl ${
            darkMode
              ? "bg-slate-900 text-white"
              : "bg-white text-black"
          }`}
        >

          <h1 className="text-xl opacity-70">
            Present Employees
          </h1>

          <h2 className="text-5xl font-bold mt-4 text-green-500">
            {presentEmployees}
          </h2>

        </div>

        {/* Absent */}
        <div
          className={`p-8 rounded-3xl shadow-2xl ${
            darkMode
              ? "bg-slate-900 text-white"
              : "bg-white text-black"
          }`}
        >

          <h1 className="text-xl opacity-70">
            Absent Employees
          </h1>

          <h2 className="text-5xl font-bold mt-4 text-red-500">
            {absentEmployees}
          </h2>

        </div>

      </div>

      {/* Employee Report Table */}
      <div
        className={`p-8 rounded-3xl shadow-2xl overflow-x-auto ${
          darkMode
            ? "bg-slate-900 text-white"
            : "bg-white text-black"
        }`}
      >

        <h1 className="text-3xl font-bold mb-8">
          Employee Attendance Report
        </h1>

        <table className="w-full">

          <thead>

            <tr
              className={`border-b ${
                darkMode
                  ? "border-slate-700 text-slate-400"
                  : "border-slate-300 text-slate-600"
              }`}
            >

              <th className="text-left pb-5">
                Employee
              </th>

              <th className="text-left pb-5">
                Department
              </th>

              <th className="text-left pb-5">
                Role
              </th>

              <th className="text-left pb-5">
                Status
              </th>

            </tr>

          </thead>

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

                      <p className="text-sm opacity-70">
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

                {/* Status */}
                <td className="py-5">

                  <span
                    className={`px-5 py-2 rounded-full text-sm font-semibold ${
                      employee.status ===
                      "Present"
                        ? "bg-green-500/20 text-green-500"
                        : "bg-red-500/20 text-red-500"
                    }`}
                  >
                    {employee.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ReportsDashboard;