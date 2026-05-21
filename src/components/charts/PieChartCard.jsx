import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function PieChartCard({
  darkMode,
  employees,
}) {

  const present =
    employees.filter(
      (emp) =>
        emp.status === "Present"
    ).length;

  const absent =
    employees.filter(
      (emp) =>
        emp.status === "Absent"
    ).length;

  const data = [

    {
      name: "Present",
      value: present,
    },

    {
      name: "Absent",
      value: absent,
    },
  ];

  const COLORS = [
    "#22c55e",
    "#ef4444",
  ];

  return (

    <div
      className={`p-8 rounded-3xl shadow-2xl border h-[450px] ${
        darkMode
          ? "bg-slate-900 border-slate-700"
          : "bg-white border-slate-300"
      }`}
    >

      {/* Header */}
      <div className="mb-8">

        <h1
          className={`text-3xl font-bold ${
            darkMode
              ? "text-white"
              : "text-black"
          }`}
        >
          Attendance Ratio
        </h1>

        <p
          className={`mt-2 ${
            darkMode
              ? "text-slate-400"
              : "text-slate-600"
          }`}
        >
          Real-time attendance distribution
        </p>

      </div>

      {/* Chart */}
      <ResponsiveContainer
        width="100%"
        height="75%"
      >

        <PieChart>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            dataKey="value"
            label
          >

            {data.map(
              (
                entry,
                index
              ) => (

                <Cell
                  key={index}
                  fill={
                    COLORS[index]
                  }
                />

              )
            )}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default PieChartCard;