import { expense } from "../Services/Apiservices";

export const setExpense = (payload) => {
  return {
    type: "SETEXPENSE",
    payload,
  };
};

export const getExpense = (payload) => {
  return (dispatch) => {
    expense(payload)
      .then((res) =>
        dispatch({
          type: "GETEXPENSESUCCESS",
          res,
        })
      )
      .catch((err) => console.log(err));
  };
};
