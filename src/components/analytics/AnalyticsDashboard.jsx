function AnalyticsDashboard({
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

  const attendanceRate = Math.floor(
    (presentEmployees /
      employees.length) *
      100
  );

  const departments = [
    ...new Set(
      employees.map(
        (emp) =>
          emp.department
      )
    ),
  ];

  return (

    <div className="mt-8 space-y-8">

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {/* Attendance Rate */}
        <div
          className={`p-8 rounded-3xl shadow-2xl ${
            darkMode
              ? "bg-slate-900 text-white"
              : "bg-white text-black"
          }`}
        >

          <h1 className="text-xl opacity-70">
            Attendance Rate
          </h1>

          <h2 className="text-5xl font-bold mt-4 text-green-500">
            {attendanceRate}%
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

          <h2 className="text-5xl font-bold mt-4 text-blue-500">
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

        {/* Departments */}
        <div
          className={`p-8 rounded-3xl shadow-2xl ${
            darkMode
              ? "bg-slate-900 text-white"
              : "bg-white text-black"
          }`}
        >

          <h1 className="text-xl opacity-70">
            Departments
          </h1>

          <h2 className="text-5xl font-bold mt-4 text-yellow-500">
            {departments.length}
          </h2>

        </div>

      </div>

      {/* Department Analytics */}
      <div
        className={`p-8 rounded-3xl shadow-2xl ${
          darkMode
            ? "bg-slate-900 text-white"
            : "bg-white text-black"
        }`}
      >

        <h1 className="text-3xl font-bold mb-8">
          Department Overview
        </h1>

        <div className="space-y-6">

          {departments.map(
            (department, index) => {

              const total =
                employees.filter(
                  (emp) =>
                    emp.department ===
                    department
                ).length;

              return (

                <div
                  key={index}
                >

                  <div className="flex items-center justify-between mb-2">

                    <h1 className="font-semibold">
                      {department}
                    </h1>

                    <p className="opacity-70">
                      {total} Employees
                    </p>

                  </div>

                  <div
                    className={`w-full h-4 rounded-full overflow-hidden ${
                      darkMode
                        ? "bg-slate-800"
                        : "bg-slate-200"
                    }`}
                  >

                    <div
                      style={{
                        width: `${total * 20}%`,
                      }}
                      className="h-full bg-blue-500 rounded-full"
                    ></div>

                  </div>

                </div>

              );
            }
          )}

        </div>

      </div>

    </div>
  );
}

export default AnalyticsDashboard;