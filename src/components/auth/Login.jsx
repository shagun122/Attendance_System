import { useState } from "react";

function Login({
  darkMode,
  setIsLoggedIn,
  setUserRole,
}) {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [role, setRole] =
    useState("Admin");

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      email ===
        "admin@gmail.com" &&
      password ===
        "admin123"
    ) {

      localStorage.setItem(
        "isLoggedIn",
        true
      );

      setIsLoggedIn(true);

      setUserRole(role);

    } else {

      alert(
        "Invalid Email or Password"
      );
    }
  };

  return (

    <div
      className={`min-h-screen flex items-center justify-center p-6 ${
        darkMode
          ? "bg-[#020817]"
          : "bg-slate-100"
      }`}
    >

      <div
        className={`w-full max-w-md p-10 rounded-3xl shadow-2xl ${
          darkMode
            ? "bg-slate-900 text-white"
            : "bg-white text-black"
        }`}
      >

        {/* Title */}
        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold">
            AMS Login
          </h1>

          <p className="mt-3 opacity-70">
            Attendance Management
            System
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={
            handleLogin
          }
          className="space-y-6"
        >

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className={`w-full p-4 rounded-2xl outline-none border ${
              darkMode
                ? "bg-slate-800 border-slate-700 text-white"
                : "bg-slate-100 border-slate-300 text-black"
            }`}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className={`w-full p-4 rounded-2xl outline-none border ${
              darkMode
                ? "bg-slate-800 border-slate-700 text-white"
                : "bg-slate-100 border-slate-300 text-black"
            }`}
          />

          {/* Role */}
          <select
            value={role}
            onChange={(e) =>
              setRole(
                e.target.value
              )
            }
            className={`w-full p-4 rounded-2xl border outline-none ${
              darkMode
                ? "bg-slate-800 border-slate-700 text-white"
                : "bg-slate-100 border-slate-300 text-black"
            }`}
          >

            <option>
              Admin
            </option>

            <option>
              HR
            </option>

            <option>
              Employee
            </option>

          </select>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition-all duration-300"
          >
            Login
          </button>

        </form>

        {/* Demo */}
        <div className="mt-8 p-4 rounded-2xl bg-blue-500/10 border border-blue-500">

          <p className="text-sm font-semibold">
            Demo Login
          </p>

          <p className="mt-3 text-sm">
            Email:
            admin@gmail.com
          </p>

          <p className="text-sm">
            Password:
            admin123
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;