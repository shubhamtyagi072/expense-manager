import { setExpense,getExpense } from "../Services/Apiservices";
import {
  GET_CURRENT_USER_EXPENSE,
  GET_CURRENT_USER_EXPENSE_SUCCESS,
  GET_CURRENT_USER_EXPENSE_FAILURE,
  SET_CURRENT_USER_EXPENSE,
  SET_CURRENT_USER_EXPENSE_SUCCESS,
  SET_CURRENT_USER_EXPENSE_FAILURE,
} from "../ActionCreater/Actions";

const setExpenses = (payload) => {
  return (dispatch) => {
    console.log(dispatch,"setExpenses")
    dispatch({ type: SET_CURRENT_USER_EXPENSE });
    setExpense({payload})
      .then((res) => {
        dispatch({ type: SET_CURRENT_USER_EXPENSE_SUCCESS, payload: res });
      })
      .catch((err) => {
        dispatch({ type: SET_CURRENT_USER_EXPENSE_FAILURE, payload: err });
      });
  };
};

export const getExpenses = (payload) => {
  return (dispatch) => {
    dispatch({ type: GET_CURRENT_USER_EXPENSE });
    getExpense({payload})
      .then((res) => {
        dispatch({ type: GET_CURRENT_USER_EXPENSE_SUCCESS, payload: res });
      })
      .catch((err) => {
        dispatch({ type: GET_CURRENT_USER_EXPENSE_FAILURE, payload: err });
      });
  };
};

export default setExpenses
