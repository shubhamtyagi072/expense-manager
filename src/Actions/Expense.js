import { setExpense, getExpense } from "../Services/Apiservices";
import {
  GET_CURRENT_USER_EXPENSE,
  GET_CURRENT_USER_EXPENSE_SUCCESS,
  GET_CURRENT_USER_EXPENSE_FAILURE,
  SET_CURRENT_USER_EXPENSE,
  SET_CURRENT_USER_EXPENSE_SUCCESS,
  SET_CURRENT_USER_EXPENSE_FAILURE,
} from "../ActionCreater/Actions";

const setExpenses = (payload) => {
  const user_id = sessionStorage.getItem("USER_ID");
  payload.user_id = user_id;
  console.log("setExpense", payload);
  return (dispatch) => {
    dispatch({ type: SET_CURRENT_USER_EXPENSE });
    setExpense({ payload })
      .then((res) => {
        debugger;
        dispatch(getExpenses({ user_id }));
      })
      .catch((err) => {
        dispatch({ type: SET_CURRENT_USER_EXPENSE_FAILURE, payload: err });
      });
  };
};

export const getExpenses = (payload) => {
  debugger;
  return (dispatch) => {
    dispatch({ type: GET_CURRENT_USER_EXPENSE });
    getExpense({ payload })
      .then((res) => {
        dispatch({ type: GET_CURRENT_USER_EXPENSE_SUCCESS, payload: res });
      })
      .catch((err) => {
        dispatch({ type: GET_CURRENT_USER_EXPENSE_FAILURE, payload: err });
      });
  };
};

export default setExpenses;
