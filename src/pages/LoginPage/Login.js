import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import User from "../../Actions/User";
import "./Login.css";
import LoadingComponent from "../../components/LoadingComponent";
import FieldComponent from "../../components/FieldComponent";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Divider,
  Card,
  message,
} from "antd";
import { CustomLabel, emailError, type_of_input } from "../../Constant";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import {
  UserOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import "./Login.css";
var _ = require("lodash");

const Login = () => {
  const [userFormData, setUserData] = useState({
    data: { password: "", email: "" },
    error: { nameError: false, emailError: false },
  });
  const { data: formData, error: formError } = userFormData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user_data = useSelector((state) => state.user);

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const onSubmit = async (e) => {
    const { password, email } = formData;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const requestBody = { email: email.toLowerCase() };
        dispatch(User(requestBody));
        if (!_.isEmpty(user_data.userData)) {
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, emailError(errorCode));
        message.error(emailError(errorCode));
      });
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {user_data.loading ? (
        <LoadingComponent />
      ) : (
        <Row justify="center" align="middle" className="container_form">
          <Col xs={20} sm={16} md={12} lg={8}>
            <Card className="login-card" title="Login">
              <Form
                name="login"
                initialValues={{ remember: true }}
                onFinish={onSubmit}
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                  onChange={(e) =>
                    setUserData({
                      ...userFormData,
                      data: { ...formData, email: e.target.value },
                    })
                  }
                  value={formData.email}
                >
                  <Input prefix={<UserOutlined />} placeholder="Email" />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="Password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    onChange={(e) =>
                      setUserData({
                        ...userFormData,
                        data: { ...formData, password: e.target.value },
                      })
                    }
                    value={formData.password}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-button"
                  >
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Login;
