import { Button, Space } from "antd";
import React from "react";
import CustomTable from "../../elements/CustomTable";

const TableComponent = () => {
  // const HEADER = ["Date", "Item", "Price", "Quantity","Total Price","type", "Action"];

  const columns = [
    {
      title: "Date",
      dataIndex: "Date",
      key: "Date",
    },
    {
      title: "Item",
      dataIndex: "Item",
      key: "Item",
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
      dataIndex: "total_price",
      key: "total_price",
      sorter: (a, b) => a.total_price - b.total_price,
    },
    {
      title: "Type",
      key: "type",
      dataIndex: "type",
      render: (_, { type }) => (
        <>
          {/* {type.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })} */}
        </>
      ),
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

  const data = [];

  return (
    <div>
      <CustomTable tableColumns={columns} dataSource={data} />
    </div>
  );
};

export default TableComponent;
