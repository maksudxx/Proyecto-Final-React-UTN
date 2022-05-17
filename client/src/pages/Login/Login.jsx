import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ setAuth }) => {
  const [input, setInput] = useState({
    user_email: "",
    user_password: "",
  });
  const handleInputChange = function (e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      let { user_email, user_password } = input;
      let data = { user_email, user_password };
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const parseRes = await response.json();
      localStorage.setItem("token", parseRes.token);
      setAuth(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmitLogin}>
        <input
          type="text"
          name="user_email"
          value={input.user_email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="user_password"
          value={input.user_password}
          onChange={handleInputChange}
        />
        <input type="submit" value="Iniciar Sesion" />
      </form>
      <div>
        <span>No estas registrado? </span>{" "}
        <Link to="/register">Registrate</Link>
      </div>
    </div>
  );
};

export default Login;
