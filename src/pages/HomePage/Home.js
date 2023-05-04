import React, { useState } from "react";
import { getExpenses } from "../../Actions/Expense";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, DatePicker, Row, Segmented } from "antd";
import { CustomLabel, segemented_data } from "../../Constant";
import "./Home.css";
import FloatingButtonWrapper from "../../HOC/FloatingButtonWrapper";
import { PlusOutlined } from "@ant-design/icons";
import DrawerWrapper from "../../HOC/DrawerWrapper";
import TableComponent from "../../components/TableComponent";
import CustomCard from "../../elements/CustomCard";
var _ = require("lodash");

const Home = ({ drawerChange }) => {
  // const [itemList, setItemList] = useState([]);
  const [monthData, setMonthData] = useState(
    segemented_data[new Date().getMonth()]
  );
  const [yearData, setYeatData] = useState(new Date().getFullYear());
  const userid = useSelector((state) => _.get(state, "user.userData"));
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("user_id", userid);
  //   const { user_id } = userid;
  // }, [userid]);

  dispatch(getExpenses({ user_id: userid.user_id }));

  // const onRemoveActn = (id) => {
  //   setItemList(itemList.filter((e) => e.item_entertime !== id));
  // };

  return (
    <div style={{ position: "relative" }}>
      <div className="date-card">
        <Row>
          <Col span={8}>
            <CustomCard>
              <label style={{ marginBottom: "20px", display: "inline-block" }}>
                Select Year -:
              </label>
              <DatePicker onChange={(e, i) => setYeatData(i)} picker="year" />
            </CustomCard>
          </Col>
        </Row>
      </div>

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
              <CustomLabel>
                Data of the Following Month:{" "}
                <span style={{ color: "red", fontSize: "20px" }}>
                  {monthData} is ₹ 0
                </span>
                &nbsp; of {yearData} Year
              </CustomLabel>
            </div>
            <Segmented
              options={segemented_data}
              size="large"
              defaultValue={monthData}
              onChange={(e) => setMonthData(e)}
            />
          </Col>
        </Row>
      </div>
      <div className="m-4">
        <Row>
          <Col span={24}>
            <TableComponent />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DrawerWrapper(FloatingButtonWrapper(Home));
