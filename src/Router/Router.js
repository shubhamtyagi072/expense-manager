import { Result } from "antd";
import React, { Suspense, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
const Login = React.lazy(() => import("../pages/LoginPage/Login"));
const Home = React.lazy(() => import(".././pages/HomePage/Home"));
const SignUpForm = React.lazy(() => import("../pages/SignUpPage"));

const NotFoundPage = () => {
  // const navigate = useNavigate()

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      //  extra={<Button type="primary" onClick={navigate('/')}>Back Home</Button>}
    />
  );
};

const Router = () => {
  return (
    <Suspense fallback={"Loading your data ..."}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpForm />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
