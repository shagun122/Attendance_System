import {
  LayoutDashboard,
  Users,
  BarChart3,
  FileText,
  Settings,
  Bell,
  X,
} from "lucide-react";

function Sidebar({
  darkMode,
  activePage,
  setActivePage,
  sidebarOpen,
  setSidebarOpen,
}) {

  const menuItems = [

    {
      id: "dashboard",
      title: "Dashboard",
      icon: LayoutDashboard,
    },

    {
      id: "employees",
      title: "Employees",
      icon: Users,
    },

    {
      id: "analytics",
      title: "Analytics",
      icon: BarChart3,
    },

    {
      id: "leaves",
      title: "Leaves",
      icon: FileText,
    },

    {
      id: "reports",
      title: "Reports",
      icon: FileText,
    },

    {
      id: "notifications",
      title: "Notifications",
      icon: Bell,
    },

    {
      id: "settings",
      title: "Settings",
      icon: Settings,
    },
  ];

  return (

    <>

      {/* Overlay */}
      {sidebarOpen && (

        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        ></div>

      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-screen w-[280px] z-50 transform transition-all duration-300 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        } ${
          darkMode
            ? "bg-slate-900 border-slate-800"
            : "bg-white border-slate-300"
        } border-r p-6 overflow-y-auto`}
      >

        {/* Top */}
        <div className="flex items-center justify-between mb-12">

          <div>

            <h1
              className={`text-3xl font-bold ${
                darkMode
                  ? "text-white"
                  : "text-black"
              }`}
            >
              AMS Panel
            </h1>

            <p
              className={`mt-2 ${
                darkMode
                  ? "text-slate-400"
                  : "text-slate-600"
              }`}
            >
              Attendance Management
            </p>

          </div>

          {/* Close */}
          <button
            onClick={() =>
              setSidebarOpen(false)
            }
            className="lg:hidden"
          >

            <X
              className={`${
                darkMode
                  ? "text-white"
                  : "text-black"
              }`}
            />

          </button>

        </div>

        {/* Menu */}
        <div className="space-y-4">

          {menuItems.map((item) => {

            const Icon = item.icon;

            return (

              <button
                key={item.id}
                onClick={() => {

                  setActivePage(
                    item.id
                  );

                  setSidebarOpen(
                    false
                  );
                }}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                  activePage ===
                  item.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : darkMode
                    ? "text-slate-300 hover:bg-slate-800"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >

                <Icon size={22} />

                <span className="font-semibold">
                  {item.title}
                </span>

              </button>

            );
          })}

        </div>

      </div>

    </>

  );
}

export default Sidebar;