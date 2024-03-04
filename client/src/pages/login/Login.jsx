import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      username: data.get("username"),
      password: data.get("password"),
    };
    try {
      const res = await newRequest.post("/auths/login", actualData);
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      console.log("logger in ");
      navigate("/");
    } catch (error) {
      // Handle any unexpected errors during the fetch
      setError(error.response.data);
    }
  };

  return (
    <div className="login">
      <form action="" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <label htmlFor="">Username</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          autoComplete="on"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          autoComplete="on"
        />
        <button type="Submit">Login</button>
        {error && <span>{error}</span>}
      </form>
    </div>
  );
};

export default Login;
