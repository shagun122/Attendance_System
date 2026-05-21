import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  // input data store karne ke liye
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // page redirect ke liye
  const navigate = useNavigate();

  // login button click function
  const handleLogin = (e) => {

    // page refresh rokta hai
    e.preventDefault();

    // console me data show karega
    console.log(email);
    console.log(password);

    // dashboard page open karega
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "40px" }}>

      <h1>Employee Login</h1>

      <form onSubmit={handleLogin}>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        {/* Login Button */}
        <button type="submit">
          Login
        </button>

      </form>
    </div>
  );
}

export default Login;