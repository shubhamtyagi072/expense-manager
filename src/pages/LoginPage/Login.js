import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import User from "../../Actions/User";
var _ = require("lodash");

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user_data = useSelector((state) => state.user);

  const onSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, email, user_id: uuidv4() };
    dispatch(User(requestBody));
  };

  if (!_.isEmpty(user_data.userData)) navigate("/dashboard");

  return (
    <div className="container_form">
      {user_data.loading ? (
        <h1>Loading.....</h1>
      ) : (
        <form>
          <label>
            Enter Your Name:
            <input
              className="input"
              type="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Enter Item Email:
            <input
              className="input"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <button className="button" onClick={onSubmit}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
