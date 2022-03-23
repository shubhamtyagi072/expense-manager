import React from "react";
import './table.css'
const Table = ({ item }) => {
  const HEADER = ["Date", "Item", "Price"]
  return (
    <table>
      <tr>
        {HEADER.map(e => <th key={e}>{e}</th>)}
      </tr>
        {item.map((e) => {
          return (
            <tr key={e.date}>
              <td> {e.date} </td>
              <td>{e.item_name}</td>
              <td>{e.item_price}</td>
            </tr>
          );
        })}
    </table>
  );
};

export default Table;
