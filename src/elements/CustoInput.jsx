import React from "react";
import { Input, Row, Col } from "antd";

const CustomInput = ({ classname, placeholder, onChange, value }) => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <Input
            className={`${classname ?? ""}`}
            placeholder={placeholder ?? ""}
            onChange={onChange}
            value={value}
            style={{width:"300px"}}
          />
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(CustomInput);