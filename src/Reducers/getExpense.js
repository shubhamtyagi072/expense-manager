import {
  GET_CURRENT_USER_EXPENSE,
  GET_CURRENT_USER_EXPENSE_SUCCESS,
  GET_CURRENT_USER_EXPENSE_FAILURE,
} from "../ActionCreater/Actions";

const initial = { ItemData: [], loading: false, error: null };

const setExpense = (state = initial, action) => {
  switch (action.type) {
    case GET_CURRENT_USER_EXPENSE:
      return { ...state, loading: true };

    case GET_CURRENT_USER_EXPENSE_SUCCESS:
      return {
        loading: false,
        error: null,
        ItemData: [...action.payload],
      };

    case GET_CURRENT_USER_EXPENSE_FAILURE:
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
