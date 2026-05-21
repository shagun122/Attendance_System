import {
  Menu,
} from "lucide-react";

function Navbar({
  darkMode,
  setDarkMode,
  setIsLoggedIn,
  setSidebarOpen,
}) {

  const handleLogout = () => {

    localStorage.removeItem(
      "isLoggedIn"
    );

    setIsLoggedIn(false);
  };

  return (

    <div
      className={`flex items-center justify-between p-6 rounded-3xl shadow-2xl ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-white text-black"
      }`}
    >

      {/* Left */}
      <div className="flex items-center gap-4">

        {/* Mobile Menu */}
        <button
          onClick={() =>
            setSidebarOpen(true)
          }
          className={`lg:hidden p-3 rounded-2xl ${
            darkMode
              ? "bg-slate-800"
              : "bg-slate-100"
          }`}
        >

          <Menu size={24} />

        </button>

        <div>

          <h1 className="text-3xl font-bold">
            Attendance Dashboard
          </h1>

          <p className="mt-2 opacity-70">
            Manage employee attendance professionally
          </p>

        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Theme */}
        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }
          className={`px-5 py-3 rounded-2xl font-semibold transition-all duration-300 ${
            darkMode
              ? "bg-yellow-500 text-black"
              : "bg-slate-900 text-white"
          }`}
        >

          {darkMode
            ? "Light"
            : "Dark"}

        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-2xl font-semibold transition-all duration-300"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;