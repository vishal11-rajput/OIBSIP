import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";

export const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", { email, password });
      if (data.error) {
        toast.error(data.error);
        console.log(error);
      } else {
        setData({
          email: "",
          password: "",
        });
        toast.success("login success");
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <input type="checkbox" id="check" />
      <div className="login form">
        <header>Login</header>
        <form onSubmit={loginUser}>
          <input
            type="text"
            placeholder="Enter your email"
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <button className="button" type="submit">
            LOGIN
          </button>
        </form>
        <div className="signup">
          <span className="signup">
            Don't have an account?
            <Link to="/register" className="login-link">
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
