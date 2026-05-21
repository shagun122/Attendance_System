function EmployeeProfile({
  selectedEmployee,
  setSelectedEmployee,
  darkMode,
}) {

  if (!selectedEmployee) {

    return null;
  }

  const attendancePercentage =
    selectedEmployee.status ===
    "Present"
      ? "92%"
      : "68%";

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-5">

      <div
        className={`w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden ${
          darkMode
            ? "bg-slate-900 text-white"
            : "bg-white text-black"
        }`}
      >

        {/* Top Banner */}
        <div className="h-[180px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">

          {/* Close */}
          <button
            onClick={() =>
              setSelectedEmployee(
                null
              )
            }
            className="absolute top-5 right-5 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-2xl"
          >
            Close
          </button>

        </div>

        {/* Profile */}
        <div className="px-10 pb-10 relative">

          {/* Image */}
          <div className="-mt-20">

            <img
              src={
                selectedEmployee.image
              }
              alt={
                selectedEmployee.name
              }
              className="w-40 h-40 rounded-full border-[6px] border-white object-cover shadow-2xl"
            />

          </div>

          {/* Name */}
          <div className="mt-6">

            <h1 className="text-4xl font-bold">
              {
                selectedEmployee.name
              }
            </h1>

            <p className="mt-2 opacity-70 text-lg">
              {
                selectedEmployee.role
              }
            </p>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

            {/* Department */}
            <div
              className={`p-6 rounded-3xl ${
                darkMode
                  ? "bg-slate-800"
                  : "bg-slate-100"
              }`}
            >

              <h1 className="opacity-70">
                Department
              </h1>

              <h2 className="text-2xl font-bold mt-4">
                {
                  selectedEmployee.department
                }
              </h2>

            </div>

            {/* Salary */}
            <div
              className={`p-6 rounded-3xl ${
                darkMode
                  ? "bg-slate-800"
                  : "bg-slate-100"
              }`}
            >

              <h1 className="opacity-70">
                Salary
              </h1>

              <h2 className="text-2xl font-bold mt-4 text-green-500">
                ₹ {
                  selectedEmployee.salary
                }
              </h2>

            </div>

            {/* Attendance */}
            <div
              className={`p-6 rounded-3xl ${
                darkMode
                  ? "bg-slate-800"
                  : "bg-slate-100"
              }`}
            >

              <h1 className="opacity-70">
                Attendance
              </h1>

              <h2 className="text-2xl font-bold mt-4 text-blue-500">
                {
                  attendancePercentage
                }
              </h2>

            </div>

            {/* Status */}
            <div
              className={`p-6 rounded-3xl ${
                darkMode
                  ? "bg-slate-800"
                  : "bg-slate-100"
              }`}
            >

              <h1 className="opacity-70">
                Current Status
              </h1>

              <h2
                className={`text-2xl font-bold mt-4 ${
                  selectedEmployee.status ===
                  "Present"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {
                  selectedEmployee.status
                }
              </h2>

            </div>

          </div>

          {/* Extra Details */}
          <div
            className={`mt-10 p-8 rounded-3xl ${
              darkMode
                ? "bg-slate-800"
                : "bg-slate-100"
            }`}
          >

            <h1 className="text-3xl font-bold mb-8">
              Employee Details
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Email */}
              <div>

                <p className="opacity-70">
                  Email
                </p>

                <h2 className="text-xl font-semibold mt-2">
                  {
                    selectedEmployee.email
                  }
                </h2>

              </div>

              {/* Employee ID */}
              <div>

                <p className="opacity-70">
                  Employee ID
                </p>

                <h2 className="text-xl font-semibold mt-2">
                  EMP-
                  {
                    selectedEmployee.id
                  }
                </h2>

              </div>

              {/* Joining Date */}
              <div>

                <p className="opacity-70">
                  Joining Date
                </p>

                <h2 className="text-xl font-semibold mt-2">
                  12 March 2024
                </h2>

              </div>

              {/* Performance */}
              <div>

                <p className="opacity-70">
                  Performance
                </p>

                <h2 className="text-xl font-semibold mt-2 text-green-500">
                  Excellent
                </h2>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EmployeeProfile;