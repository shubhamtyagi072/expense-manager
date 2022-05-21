import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import User from "../../Actions/User";
import "./Login.css";
import LoadingComponent from "../../components/LoadingComponent";
import FieldComponent from "../../components/FieldComponent";
import Card from "../../components/Card";
import { Space } from "antd";
var _ = require("lodash");

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userFormData, setUserData] = useState({
    data: { name: "", email: "" },
    error: { nameError: false, emailError: false },
  });
  const { data: formData, error: formError } = userFormData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user_data = useSelector((state) => state.user);

  const onSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, email: email.toLowerCase(), user_id: uuidv4() };
    dispatch(User(requestBody));
  };

  if (!_.isEmpty(user_data.userData)) {
    navigate("/dashboard");
  }

  return (
    <div className="container_form center">
      <div className="">
      <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded-4 shadow-4"
          alt="" ></img>
        <Card width={window.innerWidth / 2}>
         
         <div className="">
          <FieldComponent
            label="Name"
            error="Please enter your name"
            isError={true}
            placeholder=""
            onChange={(e) => setUserData({...userFormData, data:{...formData, name : e.target.value}})}
            value={formData.name}
          />
         
          <FieldComponent
            label="Name"
            error="Please enter your name"
            isError={true}
            placeholder=""
            onChange={(e) => setUserData({...userFormData, data:{...formData, name : e.target.value}})}
            value={formData.name}
          />
           </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
