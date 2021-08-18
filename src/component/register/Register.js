import { useState } from "react";
import './Register.css';

function Register() {
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });

  function handleInputChange({ target }) {
    const { name, value } = target;
    setRegisterFormData({ ...registerFormData, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(registerFormData);
  }
  const { name, email, password,  dateOfBirth } = registerFormData;
  return (
    <>
      <form className="RegisterForm" onSubmit={handleSubmit}>
        <div className="RegisterForm-wrapper-div">
          <label className="RegisterForm-label">Enter Name :</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            className="RegisterForm-input"
          />
          <label className="RegisterForm-label">Enter Email :</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className="RegisterForm-input"
          />
          <label className="RegisterForm-label">Enter Password :</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            className="RegisterForm-input"
          />
          <label className="RegisterForm-label">Enter Date of Birth :</label>
          <input
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={handleInputChange}
            className="RegisterForm-input"
          />
          <button type="submit" className="RegisterForm-button">
            Login
          </button>
          <button type="reset" className="RegisterForm-button">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default Register;
