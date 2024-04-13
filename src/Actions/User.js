import { login } from "../Services/Apiservices";
import {
  LOGIN_CURRENT_USER,
  LOGIN_CURRENT_USER_SUCCESS,
  LOGIN_CURRENT_USER_FAILURE,
} from "../ActionCreater/Actions";

const User = (payload) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_CURRENT_USER });
    login({ payload })
      .then((res) => {
        dispatch({ type: LOGIN_CURRENT_USER_SUCCESS, payload: res.response });
      })
      .catch((err) => {
        dispatch({ type: LOGIN_CURRENT_USER_FAILURE, payload: err });
      });
  };
};

export default User;
