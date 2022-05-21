import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { get } from "lodash";
import './Piechart.css'

/*
data={[
          { title: "One", value: 10, color: "#E38627" },
          { title: "Two", value: 15, color: "#C13C37" },
          { title: "Three", value: 20, color: "#6A2135" },
        ]}
*/

const Piechart = ({ data }) => {
    const color = ["#E38627","#C13C37","#6A2135","#6A2765"]
  const pieData = { "essential": 0, "Non-essential": 0, "Lend": 0, "Borrow": 0 };
  data.forEach((element) => {
    if (element.type === "Essential")
      pieData["Essential"] += parseInt(get(element, "price"));
    if (element.type === "Non-essential")
      pieData["Non-essential"] += parseInt(get(element, "price"));
    if (element.type === "Lend")
      pieData["Lend"] += parseInt(get(element, "price"));
    if (element.type === "Borrow")
      pieData["Borrow"] += parseInt(get(element, "price"));
  });
  let newData = [];
  newData = Object.keys(pieData).map((e,i) => {
      return {title:e,value:pieData[`${e}`],color:color[i]}
  });
  console.log(newData,pieData)
  return (
    <div className="pie_container">
      <PieChart data={newData} />;
    </div>
  );
};

export default React.memo(Piechart);
