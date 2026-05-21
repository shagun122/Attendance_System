import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
 Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function AttendanceChart({
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
      total: present,
    },

    {
      name: "Absent",
      total: absent,
    },
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
          Attendance Analytics
        </h1>

        <p
          className={`mt-2 ${
            darkMode
              ? "text-slate-400"
              : "text-slate-600"
          }`}
        >
          Live employee attendance overview
        </p>

      </div>

      {/* Chart */}
      <ResponsiveContainer
        width="100%"
        height="80%"
      >

        <BarChart data={data}>

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="total"
            radius={[10, 10, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default AttendanceChart;