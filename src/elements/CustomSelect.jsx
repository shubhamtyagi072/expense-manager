import { Col, Row, Select } from "antd";
import React from "react";

const CustomSelect = ({ options, onChange, className , ...props}) => {
  return (
    <div className={`${className}`}>
        <Row>
            <Col span={24}>
            <Select options={options} onChange={onChange} {...props}/>
            </Col>
        </Row>
    </div>
  );
};

export default CustomSelect
