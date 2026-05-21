import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AdvancedAnalytics({
  darkMode,
  employees,
}) {

  /* Attendance Data */
  const attendanceData = [

    {
      month: "Jan",
      attendance: 82,
    },

    {
      month: "Feb",
      attendance: 88,
    },

    {
      month: "Mar",
      attendance: 91,
    },

    {
      month: "Apr",
      attendance: 85,
    },

    {
      month: "May",
      attendance: 95,
    },

    {
      month: "Jun",
      attendance: 97,
    },
  ];

  /* Salary Data */
  const salaryData =
    employees.map(
      (employee) => ({

        name:
          employee.name.split(
            " "
          )[0],

        salary:
          Number(
            employee.salary
          ),
      })
    );

  /* Department Data */
  const departmentData = [

    {
      name: "Developers",
      value:
        employees.filter(
          (emp) =>
            emp.department
              .toLowerCase()
              .includes(
                "developer"
              )
        ).length,
    },

    {
      name: "HR",
      value:
        employees.filter(
          (emp) =>
            emp.department
              .toLowerCase()
              .includes(
                "hr"
              )
        ).length,
    },

    {
      name: "Designers",
      value:
        employees.filter(
          (emp) =>
            emp.department
              .toLowerCase()
              .includes(
                "designer"
              )
        ).length,
    },

  ];

  const COLORS = [
    "#3B82F6",
    "#22C55E",
    "#F97316",
  ];

  return (

    <div className="space-y-8 mt-8">

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Employees */}
        <div
          className={`p-8 rounded-3xl shadow-2xl ${
            darkMode
              ? "bg-slate-900 text-white"
              : "bg-white text-black"
          }`}
        >

          <h1 className="opacity-70">
            Total Employees
          </h1>

          <h2 className="text-5xl font-bold mt-4 text-blue-500">
            {
              employees.length
            }
          </h2>

        </div>

        {/* Payroll */}
        <div
          className={`p-8 rounded-3xl shadow-2xl ${
            darkMode
              ? "bg-slate-900 text-white"
              : "bg-white text-black"
          }`}
        >

          <h1 className="opacity-70">
            Total Payroll
          </h1>

          <h2 className="text-5xl font-bold mt-4 text-green-500">

            ₹ {

              employees.reduce(
                (
                  total,
                  emp
                ) =>

                  total +
                  Number(
                    emp.salary || 0
                  ),

                0
              )
            }

          </h2>

        </div>

        {/* Attendance */}
        <div
          className={`p-8 rounded-3xl shadow-2xl ${
            darkMode
              ? "bg-slate-900 text-white"
              : "bg-white text-black"
          }`}
        >

          <h1 className="opacity-70">
            Avg Attendance
          </h1>

          <h2 className="text-5xl font-bold mt-4 text-purple-500">
            91%
          </h2>

        </div>

      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* Attendance Trend */}
        <div
          className={`p-8 rounded-3xl shadow-2xl ${
            darkMode
              ? "bg-slate-900 text-white"
              : "bg-white text-black"
          }`}
        >

          <h1 className="text-3xl font-bold mb-8">
            Attendance Trend
          </h1>

          <div className="h-[350px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <AreaChart
                data={
                  attendanceData
                }
              >

                <XAxis
                  dataKey="month"
                />

                <YAxis />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="attendance"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* Salary Distribution */}
        <div
          className={`p-8 rounded-3xl shadow-2xl ${
            darkMode
              ? "bg-slate-900 text-white"
              : "bg-white text-black"
          }`}
        >

          <h1 className="text-3xl font-bold mb-8">
            Salary Distribution
          </h1>

          <div className="h-[350px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart
                data={salaryData}
              >

                <XAxis
                  dataKey="name"
                />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="salary"
                  radius={[
                    10,
                    10,
                    0,
                    0,
                  ]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

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
          Department Analytics
        </h1>

        <div className="h-[400px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <PieChart>

              <Pie
                data={
                  departmentData
                }
                dataKey="value"
                nameKey="name"
                outerRadius={140}
                label
              >

                {departmentData.map(
                  (
                    entry,
                    index
                  ) => (

                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index %
                            COLORS.length
                        ]
                      }
                    />

                  )
                )}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

export default AdvancedAnalytics;