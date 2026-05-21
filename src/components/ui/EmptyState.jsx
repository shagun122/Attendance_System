function EmptyState({
  darkMode,
}) {

  return (

    <div
      className={`p-16 rounded-3xl shadow-2xl text-center ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-white text-black"
      }`}
    >

      <h1 className="text-4xl font-bold">
        No Employees Found
      </h1>

      <p className="mt-4 opacity-70 text-lg">
        Add employees to start managing attendance.
      </p>

    </div>
  );
}

export default EmptyState;