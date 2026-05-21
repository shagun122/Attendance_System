import { useEffect, useState } from "react";

import { X } from "lucide-react";

function AddEmployeeModal({
  isOpen,
  setIsOpen,
  theme,
  addEmployee,
  editEmployee,
  updateEmployee,
}) {

  const [formData, setFormData] =
    useState({

      id: "",

      name: "",

      email: "",

      department: "",

      role: "",

      salary: "",

      gender: "male",

      image: "",

      status: "Present",
    });

  useEffect(() => {

    if (editEmployee) {

      setFormData({

        ...editEmployee,

        salary:
          editEmployee.salary || "",

        gender:
          editEmployee.gender ||
          "male",

        image:
          editEmployee.image || "",
      });
    }

  }, [editEmployee]);

  if (!isOpen) {

    return null;
  }

  /* Handle Input */
  const handleChange = (
    e
  ) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  /* Image Upload */
  const handleImageUpload = (
    e
  ) => {

    const file =
      e.target.files[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onloadend = () => {

      setFormData({

        ...formData,

        image:
          reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  /* Submit */
  const handleSubmit = () => {

    if (
      editEmployee
    ) {

      updateEmployee(
        formData
      );

    } else {

      addEmployee(
        formData
      );
    }

    /* Reset */
    setFormData({

      id: "",

      name: "",

      email: "",

      department: "",

      role: "",

      salary: "",

      gender: "male",

      image: "",

      status: "Present",
    });

    setIsOpen(false);
  };

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-5 overflow-y-auto">

      <div
        className={`w-full max-w-2xl p-8 rounded-3xl shadow-2xl ${
          theme === "dark"
            ? "bg-slate-900 text-white"
            : "bg-white text-black"
        }`}
      >

        {/* Header */}
        <div className="flex items-center justify-between mb-8">

          <h1 className="text-3xl font-bold">

            {editEmployee
              ? "Edit Employee"
              : "Add Employee"}

          </h1>

          <button
            onClick={() =>
              setIsOpen(false)
            }
            className="p-3 rounded-2xl bg-red-500 hover:bg-red-600 text-white transition-all duration-300"
          >

            <X size={20} />

          </button>

        </div>

        {/* Form */}
        <div className="space-y-5">

          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Employee Name"
            className={`w-full p-4 rounded-2xl border outline-none ${
              theme === "dark"
                ? "bg-slate-800 border-slate-700"
                : "bg-slate-100 border-slate-300"
            }`}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Employee Email"
            className={`w-full p-4 rounded-2xl border outline-none ${
              theme === "dark"
                ? "bg-slate-800 border-slate-700"
                : "bg-slate-100 border-slate-300"
            }`}
          />

          {/* Department */}
          <input
            type="text"
            name="department"
            value={
              formData.department
            }
            onChange={handleChange}
            placeholder="Department"
            className={`w-full p-4 rounded-2xl border outline-none ${
              theme === "dark"
                ? "bg-slate-800 border-slate-700"
                : "bg-slate-100 border-slate-300"
            }`}
          />

          {/* Role */}
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role"
            className={`w-full p-4 rounded-2xl border outline-none ${
              theme === "dark"
                ? "bg-slate-800 border-slate-700"
                : "bg-slate-100 border-slate-300"
            }`}
          />

          {/* Salary */}
          <input
            type="number"
            name="salary"
            value={
              formData.salary
            }
            onChange={handleChange}
            placeholder="Salary"
            className={`w-full p-4 rounded-2xl border outline-none ${
              theme === "dark"
                ? "bg-slate-800 border-slate-700"
                : "bg-slate-100 border-slate-300"
            }`}
          />

          {/* Gender */}
          <select
            name="gender"
            value={
              formData.gender
            }
            onChange={handleChange}
            className={`w-full p-4 rounded-2xl border outline-none ${
              theme === "dark"
                ? "bg-slate-800 border-slate-700"
                : "bg-slate-100 border-slate-300"
            }`}
          >

            <option value="male">
              Male
            </option>

            <option value="female">
              Female
            </option>

          </select>

          {/* Status */}
          <select
            name="status"
            value={
              formData.status
            }
            onChange={handleChange}
            className={`w-full p-4 rounded-2xl border outline-none ${
              theme === "dark"
                ? "bg-slate-800 border-slate-700"
                : "bg-slate-100 border-slate-300"
            }`}
          >

            <option>
              Present
            </option>

            <option>
              Absent
            </option>

          </select>

          {/* Image Upload */}
          <div>

            <label className="block mb-3 font-semibold">
              Employee Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={
                handleImageUpload
              }
              className="w-full"
            />

            {/* Preview */}
            {formData.image && (

              <img
                src={
                  formData.image
                }
                alt="Preview"
                className="w-28 h-28 rounded-full object-cover mt-5 border-4 border-blue-500"
              />

            )}

          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">

            <button
              onClick={
                handleSubmit
              }
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-2xl font-semibold transition-all duration-300"
            >

              {editEmployee
                ? "Update Employee"
                : "Add Employee"}

            </button>

            <button
              onClick={() =>
                setIsOpen(false)
              }
              className="flex-1 bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-semibold transition-all duration-300"
            >
              Cancel
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddEmployeeModal;