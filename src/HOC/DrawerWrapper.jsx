import {
  Button,
  Col,
  Drawer,
  Row,
  Space,
} from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import setExpenses from "../Actions/Expense";
import FieldComponent from "../components/FieldComponent";
import { form_select_option, type_of_input } from "../Constant";
import  '../pages/HomePage/Home.css'
var _ = require("lodash");


function DrawerWrapper(WrapperComponent) {
  const initialState = {
    date: new Date(),
    name: "",
    price: 0,
    type: form_select_option[1].value,
    quantity: 1,
  };

  return function NewFunc(props) {
    const [open, setOpen] = useState(false);
    const [expenseData, setExpenseData] = useState(initialState);
    const { date, name, price, type, quantity } = expenseData;
    const userid = useSelector((state) => _.get(state, "user.userData"));
    const dispatch = useDispatch();
    const onSubmit = (e) => {
      console.log("userdata------->>>", expenseData);
      e.preventDefault();
      if (name && price && date) {
        const obj = {
          date: date,
          item: name,
          price: price,
          quantity: quantity,
          type: type,
          item_entertime: new Date().getTime(),
        };
        dispatch(setExpenses({ ...obj, userid }));
        setExpenseData(initialState);
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
        onClose()
      } else alert("please enter all the enteries");
    };
    const showDrawer = () => {
      console.log("test");
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    return (
      <>
        <WrapperComponent
          drawerOpen={open}
          drawerChange={showDrawer}
          {...props}
        />
        <Drawer
          title="Create a new expense entry"
          width={720}
          onClose={onClose}
          open={open}
          bodyStyle={{
            paddingBottom: 80,
          }}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={onSubmit} type="primary">
                Submit
              </Button>
            </Space>
          }
        >
          <div className="container_form_home">
            <h1>Enter your expenses</h1>
            {/* <form> */}
            <Row justify={"center"}>
              <Col span={18}>
                <FieldComponent
                  label="Enter Item Date:"
                  error="Please enter your Date"
                  onChange={(e) => console.log(e)}
                  type={type_of_input.datepicker}
                />

                <FieldComponent
                  label="Enter Item Name:"
                  error="Please enter your Name"
                  placeholder="Please enter your Name"
                  onChange={(e) =>
                    setExpenseData({ ...expenseData, name: e.target.value })
                  }
                  value={name}
                  type={type_of_input.input}
                />

                <FieldComponent
                  label="Enter Item Value:"
                  error="Please enter your Price"
                  placeholder="Please enter your Value"
                  onChange={(e) =>
                    setExpenseData({ ...expenseData, price: e.target.value })
                  }
                  type={type_of_input.input}
                />

                <FieldComponent
                  label="Enter Item quantity:"
                  error="Please enter your Quantity"
                  placeholder="Please enter your Name"
                  onChange={(e) =>
                    setExpenseData({ ...expenseData, quantity: e })
                  }
                  type={type_of_input.inputnumber}
                />

                <FieldComponent
                  label="Enter Item type:"
                  error="Please enter your Name"
                  options={form_select_option}
                  onChange={(e) => setExpenseData({ ...expenseData, type: e })}
                  style={{ width: "200px" }}
                  type={type_of_input.select}
                />
              </Col>
            </Row>

            {/* </form> */}
          </div>
        </Drawer>
      </>
    );
  };
}
export default DrawerWrapper;
