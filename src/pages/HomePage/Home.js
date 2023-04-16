import React, { useState, useEffect } from "react";
import { getExpenses } from "../../Actions/Expense";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Row, Segmented } from "antd";
import {
  CustomLabel,
  segemented_data,
} from "../../Constant";
import "./Home.css";
import FloatingButtonWrapper from "../../HOC/FloatingButtonWrapper";
import { PlusOutlined } from "@ant-design/icons";
import DrawerWrapper from "../../HOC/DrawerWrapper";
var _ = require("lodash");

const Home = ({ drawerChange }) => {
  const [itemList, setItemList] = useState([]);
  const userid = useSelector((state) => _.get(state, "user.userData"));
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("user_id", userid);
    const { user_id } = userid;
    dispatch(getExpenses({ user_id }));
  }, [userid]);

  const onRemoveActn = (id) => {
    setItemList(itemList.filter((e) => e.item_entertime !== id));
  };

  return (
    <div>
      <div className="home-container">
        <div style={{ margin: "30px 0px" }}>
          <h1>Expense ₹ Manager</h1>
          <h2> Hi {userid.name} manage your expenses here!!</h2>
          <div className="container_form_home_button">
            <Button
              type="primary"
              onClick={drawerChange}
              icon={<PlusOutlined />}
            >
              Click for the entry of New Expense
            </Button>
          </div>
        </div>
      </div>

      <div>
        <Row justify={"center"}>
          <Col span={24} style={{ textAlign: "center" }}>
            <div className="my-4">
              <CustomLabel>Data of the Following Month:</CustomLabel>
            </div>
            <Segmented
              options={segemented_data}
              size="large"
              defaultValue={segemented_data[0]}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DrawerWrapper(FloatingButtonWrapper(Home));
