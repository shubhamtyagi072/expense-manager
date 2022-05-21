import axios from "axios";
import get from "lodash/get";

export const login = async ({ payload }) => {
  try {
    const result = await axios.post(
      `http://localhost:4000/api/v1/login`,
      payload
    );
    console.log("result",result)
    return Promise.resolve(get(result, "data"));
  } catch (err) {
     return Promise.reject(err)
  }
};

export const setExpense = async ({ payload }) => {
  try {
    const result = await axios.post(
      `http://localhost:4000/api/v1/expense`,
      payload
    );
    return Promise.resolve(get(result, "data"));
  } catch (err){
    return Promise.reject(err)
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
      return Promise.reject(err)
    }
  };