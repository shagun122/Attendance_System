function NotificationPanel({
  darkMode,
  notifications,
  setNotifications,
}) {

  const clearNotifications = () => {

    setNotifications([]);
  };

  return (

    <div
      className={`mt-8 p-8 rounded-3xl shadow-2xl ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-white text-black"
      }`}
    >

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div>

          <h1 className="text-3xl font-bold">
            Notifications
          </h1>

          <p className="mt-2 opacity-70">
            Dashboard activity alerts
          </p>

        </div>

        <button
          onClick={clearNotifications}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-2xl transition-all duration-300"
        >
          Clear All
        </button>

      </div>

      {/* Empty */}
      {notifications.length === 0 && (

        <div
          className={`p-10 rounded-2xl text-center ${
            darkMode
              ? "bg-slate-800"
              : "bg-slate-100"
          }`}
        >

          <h1 className="text-2xl font-semibold">
            No Notifications
          </h1>

          <p className="mt-2 opacity-70">
            Dashboard activity will appear here
          </p>

        </div>

      )}

      {/* Notifications */}
      <div className="space-y-5">

        {notifications.map(
          (notification) => (

            <div
              key={notification.id}
              className={`p-5 rounded-2xl border ${
                darkMode
                  ? "bg-slate-800 border-slate-700"
                  : "bg-slate-100 border-slate-300"
              }`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <h1 className="font-semibold text-lg">
                    {notification.title}
                  </h1>

                  <p className="mt-1 opacity-70">
                    {notification.message}
                  </p>

                </div>

                <span className="text-sm opacity-60">
                  {notification.time}
                </span>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
}

export default NotificationPanel;