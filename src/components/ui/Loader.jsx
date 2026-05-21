function Loader({
  darkMode,
}) {

  return (

    <div className="flex items-center justify-center h-[400px]">

      <div className="text-center">

        {/* Spinner */}
        <div
          className={`w-20 h-20 border-4 border-t-transparent rounded-full animate-spin mx-auto ${
            darkMode
              ? "border-blue-500"
              : "border-slate-900"
          }`}
        ></div>

        {/* Text */}
        <h1
          className={`mt-8 text-3xl font-bold ${
            darkMode
              ? "text-white"
              : "text-black"
          }`}
        >
          Loading Dashboard
        </h1>

        <p
          className={`mt-3 ${
            darkMode
              ? "text-slate-400"
              : "text-slate-600"
          }`}
        >
          Please wait while data loads
        </p>

      </div>

    </div>
  );
}

export default Loader;