import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from "../../Utils/Common";
import "./Login.css";
import { API_URL } from "../../constants/config";
import { configure } from "@testing-library/dom";

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post(`${API_URL}/Admins/Login`, {
        username: username.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);

        setUserSession(response.data.accessToken, response.data.name);

        props.history.push("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="form-signin">
      <form>
        <div className="login">
          <h2> Login</h2>
        </div>
        <div className="form-floating">
          <input
            type="text"
            {...username}
            className="form-control"
            id="floatingInput"
            placeholder="username"
          />
          <br />
        </div>
        <div className="form-floating">
          <input
            type="password"
            {...password}
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <br />
          {error && (
            <>
              <small style={{ color: "red" }}>{error}</small>
              <br />
            </>
          )}
          <br />
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button
          className="w-100 btn-login btn-lg "
          type="button"
          value={loading ? "Loading..." : "Login"}
          onClick={handleLogin}
          disabled={loading}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Login;
