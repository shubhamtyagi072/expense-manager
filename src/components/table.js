import React from "react";

const Table = ({ item, onRemoveActn }) => {
  let sum = 0
  const HEADER = ["Date", "Item", "Price", "Quantity","Total Price","type", "Action"];
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
          currentSum = currentSum + (parseInt(e.price) * parseInt(e.quantity))
          sum = sum + currentSum
          return (
            <tr key={e.item_entertime}>
              <td> {e.date} </td>
              <td>{e.item}</td>
              <td>{e.price} ₹</td>
              <td>{e.quantity}</td>
              <td>{currentSum} ₹</td>
              <td>{e.type}</td>
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
