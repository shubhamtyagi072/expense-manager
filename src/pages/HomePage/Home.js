import React, { useState, useEffect } from "react";
import Table from "../../components/table";
import "./Home.css";
import setExpenses,{getExpenses} from "../../Actions/Expense";
import { useDispatch, useSelector } from "react-redux";
var _ = require("lodash");

const Home = () => {
  const [itemList, setItemList] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState(1);
  const user_id = useSelector((state) => _.get(state, "user.userData.user_id"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpenses({ user_id }));
  }, [user_id]);

  const onRemoveActn = (id) => {
    setItemList(itemList.filter((e) => e.item_entertime !== id));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (expenseName && price && date) {
      const obj = {
        date: date,
        item: expenseName,
        price: price,
        quantity: quantity,
        item_entertime: new Date().getTime(),
      };
      dispatch(setExpenses({ ...obj, user_id }));
      setItemList([...itemList, obj]);
      setExpenseName("");
      setPrice("");
      setQuantity(1);
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else alert("please enter all the enteries");
  };

  return (
    <div>
      {/* header */}
      <div className="header">
        <div className="container">
          <h1>Expense ₹ Manager</h1>
          <h2>manage your expenses here!!</h2>
        </div>
      </div>

      {/* form */}
      <div className="container_form">
        <form>
          <label>
            Enter Item Date:
            <input
              className="input"
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>

          <label>
            Enter Item Name:
            <input
              className="input"
              type="text"
              name="expenditure"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
            />
          </label>

          <label>
            Enter Item Value:
            <input
              className="input"
              type="number"
              name="expenditure"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          <label>
            Enter Item quantity:
            <input
              className="input"
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>

          <label>
            Enter Item type :
            <select name="expense" id="price" className="select">
              <option value="essential">Essential</option>
              <option value="nonessential">Non-essential</option>
              <option value="Lend">Lend</option>
              <option value="Borrow">Borrow</option>
            </select>
          </label>

          <button className="button" onClick={onSubmit}>
            Add to calender
          </button>
        </form>
      </div>
      <div>
        <h3>expense for the April month</h3>
        <Table item={itemList} onRemoveActn={onRemoveActn} />
      </div>
    </div>
  );
};

export default Home;
