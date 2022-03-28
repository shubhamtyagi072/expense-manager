import {
  LOGIN_CURRENT_USER,
  LOGIN_CURRENT_USER_SUCCESS,
  LOGIN_CURRENT_USER_FAILURE,
} from "../ActionCreater/Actions";

const initial = { userData: {}, laoding: false, error: null };

const user = (state = initial, action) => {
  switch (action.type) {
    case LOGIN_CURRENT_USER:
      return { ...state, laoding: true };

    case LOGIN_CURRENT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userData: action.payload,
      };

    case LOGIN_CURRENT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default user;
