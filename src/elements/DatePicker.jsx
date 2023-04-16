import { Col, Row , DatePicker} from "antd";
import React from "react";

const CustomDatePicker = ({ classname, onChange }) => {
  return (
    <div className={`${classname}`}>
      <Row>
        <Col>
          <DatePicker format="YYYY-MM-DD HH:mm" showTime onChange={onChange} />
          {/* <DatePicker onChange={onChange} /> */}
        </Col>
      </Row>
    </div>
  );
};

export default CustomDatePicker;
