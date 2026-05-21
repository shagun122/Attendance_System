function SettingsPanel({
  darkMode,
  setDarkMode,
}) {

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
          Settings Panel
        </h1>

        <p className="mt-3 opacity-70">
          Manage dashboard settings and preferences
        </p>

      </div>

      {/* Theme Settings */}
      <div
        className={`p-8 rounded-3xl shadow-2xl ${
          darkMode
            ? "bg-slate-900 text-white"
            : "bg-white text-black"
        }`}
      >

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-2xl font-bold">
              Theme Mode
            </h1>

            <p className="mt-2 opacity-70">
              Switch dashboard appearance
            </p>

          </div>

          <button
            onClick={() =>
              setDarkMode(!darkMode)
            }
            className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
              darkMode
                ? "bg-yellow-500 text-black"
                : "bg-slate-900 text-white"
            }`}
          >

            {darkMode
              ? "Light Mode"
              : "Dark Mode"}

          </button>

        </div>

      </div>

      {/* Notification Settings */}
      <div
        className={`p-8 rounded-3xl shadow-2xl ${
          darkMode
            ? "bg-slate-900 text-white"
            : "bg-white text-black"
        }`}
      >

        <h1 className="text-2xl font-bold mb-6">
          Notifications
        </h1>

        <div className="space-y-5">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="font-semibold">
                Attendance Alerts
              </h2>

              <p className="opacity-70 text-sm">
                Receive employee attendance updates
              </p>

            </div>

            <input
              type="checkbox"
              defaultChecked
              className="w-6 h-6"
            />

          </div>

          <div className="flex items-center justify-between">

            <div>

              <h2 className="font-semibold">
                Sound Notifications
              </h2>

              <p className="opacity-70 text-sm">
                Enable dashboard notification sounds
              </p>

            </div>

            <input
              type="checkbox"
              defaultChecked
              className="w-6 h-6"
            />

          </div>

          <div className="flex items-center justify-between">

            <div>

              <h2 className="font-semibold">
                Weekly Reports
              </h2>

              <p className="opacity-70 text-sm">
                Receive weekly attendance reports
              </p>

            </div>

            <input
              type="checkbox"
              className="w-6 h-6"
            />

          </div>

        </div>

      </div>

      {/* System Info */}
      <div
        className={`p-8 rounded-3xl shadow-2xl ${
          darkMode
            ? "bg-slate-900 text-white"
            : "bg-white text-black"
        }`}
      >

        <h1 className="text-2xl font-bold mb-6">
          System Information
        </h1>

        <div className="space-y-4">

          <div className="flex items-center justify-between">

            <span className="opacity-70">
              Dashboard Version
            </span>

            <span className="font-semibold">
              v1.0.0
            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="opacity-70">
              Frontend Stack
            </span>

            <span className="font-semibold">
              React + Tailwind
            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="opacity-70">
              Local Storage
            </span>

            <span className="font-semibold text-green-500">
              Active
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SettingsPanel;