import {
  Bell,
  Trash2,
} from "lucide-react";

function NotificationCenter({
  darkMode,
  notifications,
  setNotifications,
}) {

  const clearNotifications =
    () => {

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

        <div className="flex items-center gap-4">

          <Bell
            size={30}
            className="text-yellow-500"
          />

          <div>

            <h1 className="text-3xl font-bold">
              Notification Center
            </h1>

            <p className="opacity-70 mt-1">
              Real-time system activities
            </p>

          </div>

        </div>

        {/* Clear */}
        <button
          onClick={
            clearNotifications
          }
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-2xl flex items-center gap-2"
        >

          <Trash2 size={18} />

          Clear All

        </button>

      </div>

      {/* Empty */}
      {notifications.length ===
      0 ? (

        <div
          className={`p-10 rounded-3xl text-center ${
            darkMode
              ? "bg-slate-800"
              : "bg-slate-100"
          }`}
        >

          <h1 className="text-2xl font-bold">
            No Notifications
          </h1>

          <p className="opacity-70 mt-3">
            All activities will appear here
          </p>

        </div>

      ) : (

        <div className="space-y-5">

          {notifications.map(
            (
              notification
            ) => (

              <div
                key={
                  notification.id
                }
                className={`p-6 rounded-3xl ${
                  darkMode
                    ? "bg-slate-800"
                    : "bg-slate-100"
                }`}
              >

                <div className="flex items-center justify-between gap-5">

                  <div>

                    <h1 className="text-xl font-bold">
                      {
                        notification.title
                      }
                    </h1>

                    <p className="mt-2 opacity-70">
                      {
                        notification.message
                      }
                    </p>

                  </div>

                  <span className="text-sm opacity-70">
                    {
                      notification.time
                    }
                  </span>

                </div>

              </div>

            )
          )}

        </div>

      )}

    </div>

  );
}

export default NotificationCenter;