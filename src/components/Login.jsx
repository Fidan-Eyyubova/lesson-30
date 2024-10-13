import React, { useState } from "react";

const Login = ({ setLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    let errors = {};

    if (!email) {
      errors.email = "Email cannot be empty";
      isValid = false;
    }

    if (!password) {
      errors.password = "Password cannot be empty";
      isValid = false;
    }
    setError(errors);


    if (isValid) {
      const savedData = JSON.parse(localStorage.getItem("user"));

      if (
        savedData &&
        email === savedData.email &&
        password === savedData.password
      ) {
        document.querySelector(".container-body").style.display = "none";

        const newElement = document.createElement("h1");
        newElement.textContent = `Welcome, ${savedData.username}`;
        document.body.appendChild(newElement);
      }else {
        errors.email = "This user doesn’t exist";
      }
    }
  };
  return (
    <div className="container">
      <div className="container-body">
        <h3>LOGIN</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <p className="error">{error.email}</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <p className="error">{error.password}</p>
          <button type="submit">Login</button>
        </form>
        <p className="btn">
          Dont have account?
          <button onClick={() => setLogin(false)}>Register</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
