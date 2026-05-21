function DashboardBanner({
  darkMode,
}) {

  const today = new Date();

  return (

    <div
      className={`relative overflow-hidden mt-8 p-10 rounded-3xl shadow-2xl border ${
        darkMode
          ? "bg-gradient-to-r from-slate-900 to-slate-800 border-slate-700"
          : "bg-gradient-to-r from-white to-slate-100 border-slate-300"
      }`}
    >

      {/* Background Circle */}
      <div className="absolute -top-10 -right-10 w-52 h-52 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-10">

        {/* Left */}
        <div>

          <h1
            className={`text-5xl font-bold leading-tight ${
              darkMode
                ? "text-white"
                : "text-black"
            }`}
          >
            Welcome Back,
            <br />
            Admin Dashboard
          </h1>

          <p
            className={`mt-5 text-lg ${
              darkMode
                ? "text-slate-400"
                : "text-slate-600"
            }`}
          >
            Manage employee attendance,
            analytics, reports and
            notifications professionally.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300">
              Explore Dashboard
            </button>

            <button
              className={`px-6 py-3 rounded-2xl font-semibold border transition-all duration-300 ${
                darkMode
                  ? "border-slate-600 text-white hover:bg-slate-800"
                  : "border-slate-300 text-black hover:bg-slate-200"
              }`}
            >
              View Reports
            </button>

          </div>

        </div>

        {/* Right */}
        <div
          className={`w-full max-w-sm p-8 rounded-3xl backdrop-blur-xl ${
            darkMode
              ? "bg-white/10 border border-white/10"
              : "bg-white/70 border border-slate-300"
          }`}
        >

          {/* Admin */}
          <div className="flex items-center gap-5">

            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Admin"
              className="w-20 h-20 rounded-full border-4 border-blue-500"
            />

            <div>

              <h1
                className={`text-2xl font-bold ${
                  darkMode
                    ? "text-white"
                    : "text-black"
                }`}
              >
                Admin
              </h1>

              <p
                className={`mt-1 ${
                  darkMode
                    ? "text-slate-400"
                    : "text-slate-600"
                }`}
              >
                System Administrator
              </p>

            </div>

          </div>

          {/* Date */}
          <div className="mt-8">

            <h1
              className={`text-lg font-semibold ${
                darkMode
                  ? "text-white"
                  : "text-black"
              }`}
            >
              Today
            </h1>

            <p
              className={`mt-2 ${
                darkMode
                  ? "text-slate-400"
                  : "text-slate-600"
              }`}
            >
              {today.toDateString()}
            </p>

          </div>

          {/* Time */}
          <div className="mt-6">

            <h1
              className={`text-lg font-semibold ${
                darkMode
                  ? "text-white"
                  : "text-black"
              }`}
            >
              Current Time
            </h1>

            <p
              className={`mt-2 text-2xl font-bold ${
                darkMode
                  ? "text-blue-400"
                  : "text-blue-600"
              }`}
            >
              {today.toLocaleTimeString()}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardBanner;