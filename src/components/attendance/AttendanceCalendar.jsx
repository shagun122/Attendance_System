import { useState } from "react";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

function AttendanceCalendar({
  darkMode,
}) {

  const [date, setDate] =
    useState(new Date());

  return (

    <div
      className={`mt-8 p-8 rounded-3xl shadow-2xl ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-white text-black"
      }`}
    >

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Attendance Calendar
        </h1>

        <p className="mt-2 opacity-70">
          Employee attendance tracking by date
        </p>

      </div>

      {/* Calendar */}
      <div
        className={`p-5 rounded-3xl ${
          darkMode
            ? "bg-slate-800"
            : "bg-slate-100"
        }`}
      >

        <Calendar
          onChange={setDate}
          value={date}
        />

      </div>

      {/* Selected Date */}
      <div className="mt-8">

        <h1 className="text-2xl font-semibold">
          Selected Date
        </h1>

        <p className="mt-3 opacity-70">
          {date.toDateString()}
        </p>

      </div>

    </div>
  );
}

export default AttendanceCalendar;