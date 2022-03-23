import React, { useState, useRef } from "react";
import Table from "../../components/table";
import "./Home.css";

/*
 json = [{
   date:22-2-2022,
   item_name:maggie,
   item_price:13
 },{
   date:22-2-2022,
   item_name:diaper,
   item_price:143
 }]
*/

const Home = () => {
  const itemList = useRef([]);
  const [expenseName, setExpenseName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (expenseName && price && date) {
      const obj = { date: date, item_name: expenseName, item_price: price };
      itemList.current.push(obj);
      setExpenseName("");
      setPrice("");
    } else {
      alert("please enter all the enteries");
    }
  };

  return (
    <div>
      {/* header */}
      <div className="header">
        <div className="container">
          <h1>Expense Manager</h1>
          <h2>manage your expenses here!!</h2>
        </div>
      </div>

      {/* form */}
      <div className="container_form">
        <form>
          <label>
            Enter Date:
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
          <button className="button" onClick={onSubmit}>
            Add to calender
          </button>
        </form>
      </div>
      <div>
        <h5>expense for the April month</h5>
        <Table item={itemList.current} />
      </div>
    </div>
  );
};

export default Home;
