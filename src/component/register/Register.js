import { useState } from "react";
import { useHistory } from "react-router";
import Data from "../data/Data.js";
import "./Register.css";

function Register() {
  const history = useHistory();
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });

  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidDate, setIsValidDate] = useState(false);
  const [isFormEmpty, setIsFormEmpty] = useState(false);

  function handleInputChange({ target }) {
    const { name, value } = target;
    if (name === "name") {
      if (/^[A-Za-z]+$/.test(value)) {
        setIsValidName(true);
      } else {
        setIsValidName(false);
      }
    } else if (name === "email") {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        setIsValidEmail(true);
      } else {
        setIsValidEmail(false);
      }
    } else if (name === "password") {
      if (/^[a-z]{3,12}$/.test(value)) {
        setIsValidPassword(true);
      } else {
        setIsValidPassword(false);
      }
    } else if (name === "dateOfBirth") {
      if (value === "") {
        setIsValidDate(true);
      } else setIsValidDate(false);
    }
    setIsFormEmpty(false);
    setRegisterFormData({ ...registerFormData, [name]: value });
  }

  function handleForm(){
    setRegisterFormData({name: "",
    email: "",
    password: "",
    dateOfBirth: ""})
  }
  function handleSubmit(event) {
    event.preventDefault();
    if(registerFormData.name===""||registerFormData.email===""||registerFormData.password===""||registerFormData.dateOfBirth===""){
      setIsFormEmpty(true);
    }
    else{
      const user = {
        id: Math.floor(Math.random() * (999999 - 99) + 99),
        name: registerFormData.name,
        email: registerFormData.email,
        password: registerFormData.password,
        dateOfBirth: registerFormData.dateOfBirth,
      };

      Data.push(user);
      console.log(Data);
      alert("Registered Successfully!!!");
      history.push("/login");
    }
    
  }
  const { name, email, password, dateOfBirth } = registerFormData;
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

          {isValidName ? null : (
            <span className="RegisterForm-error">
              Name should contain only letters
            </span>
          )}
          <label className="RegisterForm-label">Enter Email :</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className="RegisterForm-input"
          />

          {isValidEmail ? null : (
            <span className="RegisterForm-error">
              Email id shoukd be in format 'abc@gmail.com'{" "}
            </span>
          )}
          <label className="RegisterForm-label">Enter Password :</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            className="RegisterForm-input"
          />

          {isValidPassword ? null : (
            <span className="RegisterForm-error">
              Password should be 3 to 12 charecter long
            </span>
          )}
          <label className="RegisterForm-label">Enter Date of Birth :</label>
          <input
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={handleInputChange}
            className="RegisterForm-input"
          />
          <br />
          {isValidDate ? (
            <span className="RegisterForm-error">Enter valid date</span>
          ) : null}
          <button type="submit" className="RegisterForm-button">
            Register
          </button>
          <button type="reset" onClick={handleForm} className="RegisterForm-button">
            Cancel
          </button>
          <br />
          {isFormEmpty ? (
            <span className="RegisterForm-error">All fields required</span>
          ) : null}
        </div>
      </form>
    </>
  );
}

export default Register;
