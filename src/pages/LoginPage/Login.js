import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import User from "../../Actions/User";
import "./Login.css";
// import LoadingComponent from "../../components/LoadingComponent";
import FieldComponent from "../../components/FieldComponent";
import Card from "../../components/Card";
import { Button, Col, Row } from "antd";
import { CustomLabel, type_of_input } from "../../Constant";
var _ = require("lodash");

const Login = () => {
  const name = "";
  const email = "";
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
      <div className="sub_conatiner_login">
        <Card width={window.innerWidth / 3}>
          <div className="login_input_group">
            <CustomLabel fontSize="14">Expense Manager</CustomLabel>
            <Row justify={"center"}>
              <Col lg={16}>
                <FieldComponent
                  label="Name"
                  error="Please enter your name"
                  isError={formError.nameError}
                  placeholder="Please enter your name"
                  onChange={(e) =>
                    setUserData({
                      ...userFormData,
                      data: { ...formData, name: e.target.value },
                    })
                  }
                  type={type_of_input.input}
                  value={formData.name}
                />
              </Col>
              <Col lg={16}>
                <FieldComponent
                  label="Email"
                  error="Please enter your Email"
                  placeholder="Please enter your Email"
                  isError={formError.emailError}
                  onChange={(e) =>
                    setUserData({
                      ...userFormData,
                      data: { ...formData, email: e.target.value },
                    })
                  }
                  type={type_of_input.input}
                  value={formData.email}
                />
              </Col>
            </Row>
            <Row>
              <Col lg={8} style={{ textAlign: "right" }}>
                <Button type="primary" onClick={onSubmit}>
                  {" "}
                  Submit
                </Button>
              </Col>
            </Row>
          </div>
        </Card>
        <div className="image_login">
          <img
            src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
            className="w-100 rounded-4 shadow-4"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
