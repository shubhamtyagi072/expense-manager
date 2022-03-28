import axios from "axios";
import get from "lodash/get";

export const login = async ({ payload }) => {
  try {
    const result = await axios.post(
      `http://localhost:4000/api/v1/login`,
      payload
    );
    return get(result, "data");
  } catch (err) {
    return err;
  }
};

export const setExpense = async ({ payload }) => {
    console.log("payload",payload)
  try {
    const result = await axios.post(
      `http://localhost:4000/api/v1/expense`,
      payload
    );
    console.log(result)
    return get(result, "data");
  } catch (err) {
    return err;
  }
};

export const getExpense = async ({ payload }) => {
    try {
      const result = await axios.post(
        `http://localhost:4000/api/v1/user-expense`,
        payload
      );
      return get(result, "data");
    } catch (err) {
      return err;
    }
  };