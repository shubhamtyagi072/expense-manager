import React from "react";
import './table.css'
const Table = ({ item }) => {
  return (
    <table>
      <tr>
        <th> date </th>
        <th> Item </th>
        <th> Price</th>
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
