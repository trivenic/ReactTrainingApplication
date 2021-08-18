import { useState } from "react";
import "./Login.css";

function Login() {
  const [loginFormData, setLoginFormData] = useState({
    userid: "",
    password: "",
  });

  function handleInputChange({ target }) {
    const { name, value } = target;
    setLoginFormData({ ...loginFormData, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(loginFormData);
  }
  const { userid, password } = loginFormData;
  return (
    <>
      <form className="LoginForm" onSubmit={handleSubmit}>
        <div className="LoginForm-wrapper-div">
          <label className="LoginForm-label">Enter User Id :</label>
          <input
            type="text"
            name="userid"
            value={userid}
            onChange={handleInputChange}
            className="LoginForm-input"
          />
          <label className="LoginForm-label">Enter Password :</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            className="LoginForm-input"
          />
          <button type="submit" className="LoginForm-button">
            Login
          </button>
          <button type="reset" className="LoginForm-button">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
