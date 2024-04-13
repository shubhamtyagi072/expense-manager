import React, { useState, useEffect } from "react";
import {
  Form,
  Card,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Divider,
  message,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  GoogleOutlined,
  FacebookOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import "./index.css"; // Import your CSS file
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  getRedirectResult,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { emailError } from "../../Constant";
import { useDispatch, useSelector } from "react-redux";
import User from "../../Actions/User";
import { signUp } from "../../Services/Apiservices";
import { LOGIN_CURRENT_USER_SUCCESS } from "../../ActionCreater/Actions";
var _ = require("lodash");

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");
  const user_data = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLoginButton = () => {
    navigate("/login");
  };

  const dispatch = useDispatch();

  const dispatchLoginApi = async (user) => {
    debugger;
    const name = user.displayName;
    const email = user.email;
    const requestBody = {
      name,
      email: email.toLowerCase(),
      user_id: uuidv4(),
    };
    try {
      const res = await signUp(requestBody);
      dispatch({ type: LOGIN_CURRENT_USER_SUCCESS, payload: requestBody })
      navigate("/dashboard")
    } catch (err) {
      console.log("ERROR:-", err);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        dispatchLoginApi(user);
        // ...
        console.log("uid", user);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);

  const onGoogleAuth = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      display: "popup",
    });
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispatchLoginApi(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const faceBookAuth = () => {
    const provider = new FacebookAuthProvider();
    provider.setCustomParameters({
      display: "popup",
    });
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispatchLoginApi(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const onFinish = async (e) => {
    //  e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user.displayName = name;
        console.log(user);
        dispatchLoginApi(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, emailError(errorCode));
        message.error(emailError(errorCode));
        // ..
      });
  };

  return (
    <div>
      <Row justify="center" align="middle" className="sign-up-container">
        <Col xs={20} sm={16} md={12} lg={8}>
          <Card className="sign-up-card" title="Sign Up">
            <Form
              name="signup"
              initialValues={{ remember: true }}
              onFinish={(e) => onFinish(e)}
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input your Name!" }]}
                value={name}
                onChange={(e) => setName(e.target.value)}
              >
                <Input prefix={<UserOutlined />} placeholder="User Name" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>

              {/* <Form.Item
                name="confirmPassword"
                rules={[
                  { required: true, message: "Please confirm your password!" },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Confirm Password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item> */}

              <Form.Item>
                <Button type="link" onClick={handleLoginButton}>
                  Already Have Account
                </Button>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="sign-up-button"
                >
                  Sign Up
                </Button>
              </Form.Item>

              <Divider>Or Sign Up With</Divider>

              <Form.Item>
                <Button
                  icon={<GoogleOutlined />}
                  className="google-sign-up-button"
                  onClick={onGoogleAuth}
                >
                  Sign up with Google
                </Button>
              </Form.Item>

              <Form.Item>
                <Button
                  icon={<FacebookOutlined />}
                  className="facebook-sign-up-button"
                  onClick={faceBookAuth}
                >
                  Sign up with Facebook
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SignUpForm;
