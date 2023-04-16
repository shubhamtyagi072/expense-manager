import React from "react";
import styled from "styled-components";

const CustomDiv = styled.div`
  padding: ${(props) => props.width/10}px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  width: ${(props) => props.width + 200}px;
  margin: auto;
  background: hsla(0, 0%, 100%, 0.55);
  backdrop-filter: blur(30px);
`;

const Card = ({ children, width }) => {
  return <CustomDiv width={width}>{children}</CustomDiv>;
};

export default Card;
