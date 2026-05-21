const activities = [
  "Rahul Sharma marked Present",
  "Aman Verma submitted leave request",
  "Priya Singh checked in at 9:00 AM",
  "Neha Kapoor updated attendance",
  "Rohit Mehta marked Absent",
  "Karan Malhotra completed project report",
  "Simran Kaur approved leave",
  "Vikas Yadav joined meeting",
  "Sneha Arora updated dashboard",
  "Aditya Singh fixed attendance bug",
];

function RecentActivity({ theme }) {

  const getCardTheme = () => {

    if (theme === "dark") {
      return "bg-slate-800";
    }

    if (theme === "light") {
      return "bg-white";
    }

    return "bg-[#ebe5d7]";
  };

  const getTextTheme = () => {

    if (theme === "dark") {
      return "text-white";
    }

    return "text-black";
  };

  const getActivityTheme = () => {

    if (theme === "dark") {
      return "bg-slate-700 text-slate-200 hover:bg-slate-600";
    }

    if (theme === "light") {
      return "bg-slate-100 text-slate-700 hover:bg-slate-200";
    }

    return "bg-[#ddd2bf] text-black hover:bg-[#d1c4ae]";
  };

  return (
    <div
      className={`p-6 rounded-2xl shadow-lg mt-10 transition-all duration-300 ${getCardTheme()}`}
    >

      <h1 className={`text-2xl font-bold mb-6 ${getTextTheme()}`}>
        Recent Activity
      </h1>

      <div className="space-y-4">

        {activities.map((activity, index) => (

          <div
            key={index}
            className={`p-4 rounded-xl transition-all duration-300 ${getActivityTheme()}`}
          >
            {activity}
          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentActivity;