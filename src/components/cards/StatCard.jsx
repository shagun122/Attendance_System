import CountUp from "react-countup";

function StatCard({
  title,
  value,
  color,
  darkMode,
}) {

  return (

    <div
      className={`p-8 rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105 ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-white text-black"
      }`}
    >

      {/* Title */}
      <h1 className="text-lg opacity-70">
        {title}
      </h1>

      {/* Value */}
      <h2
        className={`text-5xl font-bold mt-5 ${color}`}
      >

        <CountUp
          end={Number(value)}
          duration={2}
          separator=","
        />

      </h2>

    </div>
  );
}

export default StatCard;