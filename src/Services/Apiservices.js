import axios from "axios";
import get from "lodash/get";

export const postApi = async ({ payload, endpoint }) => {
  try {
    const result = await axios.post(endpoint, payload);
    // console.log("result", result);
    return Promise.resolve(get(result, "data"));
  } catch (err) {
    return Promise.reject(err);
  }
};

export const login = async ({ payload }) => {
  console.log(payload, `${process.env.REACT_APP_APIURL}/api/v1/login`);
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_APIURL}/api/v1/login`,
      payload
    );
    console.log("result", result);
    return Promise.resolve(get(result, "data"));
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

export const signUp = async (payload) => {
  debugger;
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_APIURL}/api/v1/signUp`,
      payload
    );
    console.log("result", result);
    return Promise.resolve(get(result, "data"));
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

export const setExpense = async ({ payload }) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_APIURL}/api/v1/expense`,
      payload
    );
    return Promise.resolve(get(result, "data"));
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

export const getExpense = async ({ payload }) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_APIURL}/api/v1/user-expense`,
      payload
    );
    return Promise.resolve(get(result, "data"));
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

export const deletExpense = async (payload) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_APIURL}/api/v1/delete-expense`,
      payload
    );
    return Promise.resolve(get(result, "data"));
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

export const monthExpense = async (payload) => {
  console.log(payload);
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_APIURL}/api/v1/expense-month`,
      payload
    );
    return Promise.resolve(get(result, "data"));
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};
