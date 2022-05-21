import {
  SET_CURRENT_USER_EXPENSE,
  SET_CURRENT_USER_EXPENSE_SUCCESS,
  SET_CURRENT_USER_EXPENSE_FAILURE,
} from "../ActionCreater/Actions";

const initial = { ItemData: {}, loading: false, error: null };

const setExpense = (state = initial, action) => {
  switch (action.type) {
    case SET_CURRENT_USER_EXPENSE:
      return { ...state, loading: true };

    case SET_CURRENT_USER_EXPENSE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        ItemData: action.payload,
      };

    case SET_CURRENT_USER_EXPENSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default setExpense;
