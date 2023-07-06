import React, { useEffect, useState } from "react";
import './App.css'

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    setFormData({
      firstName: "",
      email: "",
      password: "",
    });
  };

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            FIRST NAME
            <input
              type="text"
              name="firstName"
              placeholder="Enter Name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="enter email"
              value={formData.email}
              required
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>User Details</h2>
        <p>First Name: {userData?.firstName}</p>
        <p>Email: {userData?.email}</p>
        <p>Password: {userData?.password}</p>
      </div>
    </div>
  );
};

export default App;
