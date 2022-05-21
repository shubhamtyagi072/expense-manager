import React from "react";
import { Row, Col, Space } from "antd";
import { CustomLabel, type_of_input } from "../../Constant";
import CustomInput from "../../elements/CustoInput";
import CustomDatePicker from "../../elements/DatePicker";
import CustomSelect from "../../elements/CustomSelect";
import CustomInputNumer from "../../elements/CustomInputNumer";

const FieldComponent = ({ type, label, error, isError, ...props }) => {
  return (
    <div style={{ margin: "20px 0px" }}>
      <Row gutter={[32, 16]}>
        <Col lg={10} style={{ textAlign: "left" }}>
          <CustomLabel fontSize="14">{label}</CustomLabel>
        </Col>
        <Col lg={14} style={{ textAlign: "left" }}>
          <Space size={"middle"} direction={"vertical"}>
            {type === type_of_input.input && <CustomInput {...props} />}
            {type === type_of_input.datepicker && (
              <CustomDatePicker {...props} />
            )}
            {type === type_of_input.select && <CustomSelect {...props} />}
            {type === type_of_input.inputnumber && (
              <CustomInputNumer {...props} />
            )}
            {isError && <label style={{ color: "red" }}>{error}</label>}
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(FieldComponent);
