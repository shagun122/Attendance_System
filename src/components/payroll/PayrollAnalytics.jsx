import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function PayrollAnalytics({
  employees,
  darkMode,
}) {

  const totalPayroll =
    employees.reduce(
      (total, employee) =>
        total +
        Number(
          employee.salary || 0
        ),
      0
    );

  const averageSalary =
    employees.length > 0
      ? Math.floor(
          totalPayroll /
            employees.length
        )
      : 0;

  const highestPaid =
    employees.reduce(
      (max, employee) =>

        Number(
          employee.salary
        ) >
        Number(max.salary || 0)
          ? employee
          : max,

      {}
    );

  const chartData =
    employees.map((employee) => ({

      name:
        employee.name.split(
          " "
        )[0],

      salary:
        Number(
          employee.salary
        ),
    }));

  return (

    <div
      className={`mt-8 p-8 rounded-3xl shadow-2xl ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-white text-black"
      }`}
    >

      {/* Header */}
      <div className="mb-10">

        <h1 className="text-3xl font-bold">
          Payroll Analytics
        </h1>

        <p className="mt-2 opacity-70">
          Salary and payroll insights
        </p>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        {/* Total */}
        <div
          className={`p-6 rounded-3xl ${
            darkMode
              ? "bg-slate-800"
              : "bg-slate-100"
          }`}
        >

          <h1 className="text-lg opacity-70">
            Total Payroll
          </h1>

          <h2 className="text-4xl font-bold mt-4 text-green-500">
            ₹ {totalPayroll}
          </h2>

        </div>

        {/* Average */}
        <div
          className={`p-6 rounded-3xl ${
            darkMode
              ? "bg-slate-800"
              : "bg-slate-100"
          }`}
        >

          <h1 className="text-lg opacity-70">
            Average Salary
          </h1>

          <h2 className="text-4xl font-bold mt-4 text-blue-500">
            ₹ {averageSalary}
          </h2>

        </div>

        {/* Highest */}
        <div
          className={`p-6 rounded-3xl ${
            darkMode
              ? "bg-slate-800"
              : "bg-slate-100"
          }`}
        >

          <h1 className="text-lg opacity-70">
            Highest Paid
          </h1>

          <h2 className="text-2xl font-bold mt-4 text-purple-500">
            {
              highestPaid.name
            }
          </h2>

          <p className="mt-2 opacity-70">
            ₹ {
              highestPaid.salary
            }
          </p>

        </div>

      </div>

      {/* Chart */}
      <div
        className={`h-[400px] p-5 rounded-3xl ${
          darkMode
            ? "bg-slate-800"
            : "bg-slate-100"
        }`}
      >

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart
            data={chartData}
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
  );
}

export default PayrollAnalytics;