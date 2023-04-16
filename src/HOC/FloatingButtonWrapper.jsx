import { FloatButton } from "antd";
import React from "react";

const FloatingButtonWrapper = (WrapperCompoenent) => (props) => {
  return (
    <div>
      <WrapperCompoenent {...props} />
      <FloatButton />
    </div>
  );
};

export default FloatingButtonWrapper;
