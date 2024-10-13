import React, { useState } from "react";

const Register = ({setLogin}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    let errors = {};

    if (!username) {
      errors.username = "Username cannot be empty";
      isValid = false;
    } else if (/^[0-9]+$/.test(username)) {
      errors.username = "Username cannot be only numbers";
      isValid = false;
    }

    if (!email) {
      errors.email = "Email cannot be empty";
      isValid = false;
    }

    if (!password) {
      errors.password = "Password cannot be empty";
      isValid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setError(errors);

    if (isValid) {
      const userData = {
        username: username,
        email: email,
        password: password,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      alert("Succesfully Registration!");
    }
  };
  return (
    <div className="container">
      <div className="container-body">
        <h3>REGISTER</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          <p className="error">{error.username}</p>
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
          <button type="submit">Register</button>
        </form>
        <p className="btn">
                Already have an account? 
                <button onClick={() => setLogin(true)}>Login</button>
            </p>
      </div>
    </div>
  );
};

export default Register;
