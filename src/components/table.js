import React from "react";
import "./table.css";

const Table = ({ item, onRemoveActn }) => {
  let sum = 0
  const HEADER = ["Date", "Item", "Price", "Quantity","Total Price", "Action"];
  return (
    <>
      <table>
        <tr>
          {HEADER.map((e) => (
            <th key={e}>{e}</th>
          ))}
        </tr>
        {item.map((e) => {
          let currentSum = 0
          currentSum = currentSum + (parseInt(e.item_price) * parseInt(e.item_quantity))
          sum = sum + currentSum
          return (
            <tr key={e.item_entertime}>
              <td> {e.date} </td>
              <td>{e.item_name}</td>
              <td>{e.item_price} ₹</td>
              <td>{e.item_quantity}</td>
              <td>{currentSum} ₹</td>
              <td>
                <button onClick={() => onRemoveActn(e.item_entertime)}>Remove</button>
              </td>
            </tr>
          );
        })}
      </table>
      <div className="expense_text_wrapper">
      <h1>Your Total expense this month is {sum} ₹</h1>
      </div>
    </>
  );
};

export default Table;
