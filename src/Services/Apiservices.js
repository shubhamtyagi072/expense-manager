import axios from "axios";
import get from "lodash/get";

export const postApi = async ({ payload, endpoint }) => {
  try {
    const result = await axios.post(endpoint, payload);
    console.log("result", result);
    return Promise.resolve(get(result, "data"));
  } catch (err) {
    return Promise.reject(err);
  }
};

export const login = async ({ payload }) => {
  
  console.log(payload)
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_APIURL}/api/v1/login`,
      payload
    );
    console.log("result", result);
    return Promise.resolve(get(result, "data"));
  } catch (err) {
    return Promise.reject(err);
  }
};

export const setExpense = async ({ payload }) => {
  try {
    const result = await axios.post(
      `http://localhost:4000/api/v1/expense`,
      payload
    );
    return Promise.resolve(get(result, "data"));
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getExpense = async ({ payload }) => {
  try {
    const result = await axios.post(
      `http://localhost:4000/api/v1/user-expense`,
      payload
    );
    return Promise.resolve(get(result, "data"));
  } catch (err) {
    return Promise.reject(err);
  }
};
