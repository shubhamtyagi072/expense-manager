import React from "react";
import { Row, Col, Table } from "antd";

const CustomTable = ({
  tableColumns,
  dataSource,
  onChange,
  pagination,
  size,
  showHeader = true
}) => {
  const tableProps = {
    size : "large", 
    
    showHeader,
    // footer: showfooter ? defaultFooter : undefined,
    // rowSelection,
    // scroll,
    // tableLayout,
  };
  return (
    <div>
      <Row>
        <Col span={24}>
          <Table {...tableProps} dataSource={dataSource} columns={tableColumns} />
        </Col>
      </Row>
    </div>
  );
};

export default CustomTable;
