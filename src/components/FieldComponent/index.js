import React from "react";
import { Row, Col, Space } from "antd";
import { CustomLabel } from "../../Constant";
import CustomInput from "../CustomInput/CustomInput";

const FieldComponent = ({ label, error, isError, ...props }) => {
  return (
    <div>
      <Row gutter={[32, 16]}>
        <Col lg={8} style={{textAlign:"right"}}>
          <CustomLabel fontSize="14">{label} :</CustomLabel> 
        </Col>
        <Col lg={16}>
          <Space size={'middle'} direction={'vertical'}>
            <CustomInput {...props} />
            {isError && <div>{error}</div>}
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(FieldComponent);
