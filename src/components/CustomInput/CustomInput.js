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
          />
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(CustomInput);
