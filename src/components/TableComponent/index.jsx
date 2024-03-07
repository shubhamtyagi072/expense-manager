import { Button, Space } from "antd";
import React from "react";
import CustomTable from "../../elements/CustomTable";

const TableComponent = ({ data = [] }) => {
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => b.price - a.price,
    },
    {
      title: "Item",
      dataIndex: "item",
      key: "item",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: "Total Price",
      dataIndex: "totalprice",
      key: "totalprice",
      sorter: (a, b) => a.total_price - b.total_price,
    },
    {
      title: "Type",
      key: "type",
      dataIndex: "type",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type={"primary"}>Remove</Button>
        </Space>
      ),
    },
  ];

  const totData = [];

  for (const value of data) {
    const Tempdata = {};
    Tempdata.key = value._id;
    Tempdata.type = value.type;
    Tempdata.totalprice = value.price * value.quantity;
    Tempdata.price = value.price;
    Tempdata.quantity = value.quantity;
    Tempdata.item = value.item;
    Tempdata.date = new Date(Number(value.date)).toLocaleString();

    totData.push(Tempdata);
  }

  return (
    <div>
      <CustomTable tableColumns={columns} dataSource={totData} />
    </div>
  );
};

export default React.memo(TableComponent);
