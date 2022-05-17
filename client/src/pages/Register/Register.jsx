import React, { useState} from "react";
import { Link } from "react-router-dom";

const Register = ({ setAuth }) => {
  const [input, setInput] = useState({
    user_name: "",
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

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      let { user_name, user_email, user_password } = input;
      let data = {
        user_name,
        user_email,
        user_password,
      };

      const response = await fetch("http://localhost:3001/auth/register", {
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
      <p>Registro</p>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="user_name"
          placeholder="nombre de usuario"
          value={input.user_name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="user_email"
          placeholder="email"
          value={input.user_email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="user_password"
          placeholder="password"
          value={input.user_password}
          onChange={handleInputChange}
        />
        <input type="submit" value="Registrarse" />
      </form>
      <div>
        <span>Esta registrado? </span> <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
