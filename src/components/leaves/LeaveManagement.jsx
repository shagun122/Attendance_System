import { useState } from "react";

function LeaveManagement({
  darkMode,
  employees,
}) {

  const [leaveRequests, setLeaveRequests] =
    useState([]);

  const [employeeName, setEmployeeName] =
    useState("");

  const [leaveType, setLeaveType] =
    useState("Sick Leave");

  const [reason, setReason] =
    useState("");

  /* Add Leave */
  const handleAddLeave = () => {

    if (
      !employeeName ||
      !reason
    ) {
      return;
    }

    const newLeave = {

      id: Date.now(),

      employeeName,

      leaveType,

      reason,

      status: "Pending",
    };

    setLeaveRequests([
      newLeave,
      ...leaveRequests,
    ]);

    setEmployeeName("");

    setReason("");
  };

  /* Update Status */
  const updateStatus = (
    id,
    status
  ) => {

    const updatedLeaves =
      leaveRequests.map(
        (leave) =>

          leave.id === id
            ? {
                ...leave,
                status,
              }
            : leave
      );

    setLeaveRequests(
      updatedLeaves
    );
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
      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Leave Management
        </h1>

        <p className="mt-2 opacity-70">
          Manage employee leaves
        </p>

      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">

        {/* Employee */}
        <select
          value={employeeName}
          onChange={(e) =>
            setEmployeeName(
              e.target.value
            )
          }
          className={`p-4 rounded-2xl border outline-none ${
            darkMode
              ? "bg-slate-800 border-slate-700"
              : "bg-slate-100 border-slate-300"
          }`}
        >

          <option value="">
            Select Employee
          </option>

          {employees.map(
            (employee) => (

              <option
                key={employee.id}
                value={
                  employee.name
                }
              >
                {employee.name}
              </option>

            )
          )}

        </select>

        {/* Leave Type */}
        <select
          value={leaveType}
          onChange={(e) =>
            setLeaveType(
              e.target.value
            )
          }
          className={`p-4 rounded-2xl border outline-none ${
            darkMode
              ? "bg-slate-800 border-slate-700"
              : "bg-slate-100 border-slate-300"
          }`}
        >

          <option>
            Sick Leave
          </option>

          <option>
            Casual Leave
          </option>

          <option>
            Emergency Leave
          </option>

        </select>

      </div>

      {/* Reason */}
      <textarea
        placeholder="Leave reason..."
        value={reason}
        onChange={(e) =>
          setReason(
            e.target.value
          )
        }
        className={`w-full p-5 rounded-2xl border outline-none mb-6 ${
          darkMode
            ? "bg-slate-800 border-slate-700"
            : "bg-slate-100 border-slate-300"
        }`}
        rows={4}
      />

      {/* Add Button */}
      <button
        onClick={handleAddLeave}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300"
      >
        Apply Leave
      </button>

      {/* Analytics */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10 mb-10">

  {/* Total */}
  <div
    className={`p-6 rounded-3xl ${
      darkMode
        ? "bg-slate-800"
        : "bg-slate-100"
    }`}
  >

    <h1 className="opacity-70">
      Total Leaves
    </h1>

    <h2 className="text-4xl font-bold mt-4">
      {leaveRequests.length}
    </h2>

  </div>

  {/* Approved */}
  <div
    className={`p-6 rounded-3xl ${
      darkMode
        ? "bg-slate-800"
        : "bg-slate-100"
    }`}
  >

    <h1 className="opacity-70">
      Approved
    </h1>

    <h2 className="text-4xl font-bold mt-4 text-green-500">

      {
        leaveRequests.filter(
          (leave) =>
            leave.status ===
            "Approved"
        ).length
      }

    </h2>

  </div>

  {/* Rejected */}
  <div
    className={`p-6 rounded-3xl ${
      darkMode
        ? "bg-slate-800"
        : "bg-slate-100"
    }`}
  >

    <h1 className="opacity-70">
      Rejected
    </h1>

    <h2 className="text-4xl font-bold mt-4 text-red-500">

      {
        leaveRequests.filter(
          (leave) =>
            leave.status ===
            "Rejected"
        ).length
      }

    </h2>

  </div>

  {/* Pending */}
  <div
    className={`p-6 rounded-3xl ${
      darkMode
        ? "bg-slate-800"
        : "bg-slate-100"
    }`}
  >

    <h1 className="opacity-70">
      Pending
    </h1>

    <h2 className="text-4xl font-bold mt-4 text-yellow-500">

      {
        leaveRequests.filter(
          (leave) =>
            leave.status ===
            "Pending"
        ).length
      }

    </h2>

  </div>

</div>

      {/* Leave Requests */}
      <div className="mt-10 space-y-5">

        {leaveRequests.map(
          (leave) => (

            <div
              key={leave.id}
              className={`p-6 rounded-3xl ${
                darkMode
                  ? "bg-slate-800"
                  : "bg-slate-100"
              }`}
            >

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                <div>

                  <h1 className="text-2xl font-bold">
                    {
                      leave.employeeName
                    }
                  </h1>

                  <p className="mt-2 opacity-70">
                    {
                      leave.leaveType
                    }
                  </p>

                  <p className="mt-2">
                    {
                      leave.reason
                    }
                  </p>

                  <span
                    className={`inline-block mt-4 px-4 py-2 rounded-2xl text-white ${
                      leave.status ===
                      "Approved"
                        ? "bg-green-500"
                        : leave.status ===
                          "Rejected"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {leave.status}
                  </span>

                </div>

                {/* Actions */}
                <div className="flex gap-3">

                  <button
                    onClick={() =>
                      updateStatus(
                        leave.id,
                        "Approved"
                      )
                    }
                    className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-2xl"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        leave.id,
                        "Rejected"
                      )
                    }
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-2xl"
                  >
                    Reject
                  </button>

                </div>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
}

export default LeaveManagement;