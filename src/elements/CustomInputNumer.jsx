import React from "react";
import { Row, Col, InputNumber } from "antd";

const CustomInputNumber = ({ classname, placeholder, onChange, value }) => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <InputNumber
            min={1}
            max={100}
            className={`${classname ?? ""}`}
            onChange={onChange}
            style={{width:"300px"}}
          />
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(CustomInputNumber);