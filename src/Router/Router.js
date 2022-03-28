import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Login from "../pages/LoginPage/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/dashboard" element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
