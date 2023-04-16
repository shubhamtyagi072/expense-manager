import React from "react";
import { Row, Col, Table } from "antd";

const CustomTable = ({ classname, placeholder, onChange, value }) => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <Table
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

export default CustomTable