import styled from "styled-components";

export const CustomLabel = styled.label`
  font-size: ${(props) => props.fontSize}px;
  text-align: ${(props) => props.align};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "bold")};
`;

export const form_select_option = [
  {
    value: "essential",
    label: "Essential",
  },
  {
    value: "non-essential",
    label: "Non-essential",
  },
];

export const type_of_input = {
  select: "Select",
  input: "Input",
  datepicker: "Datepicker",
  inputnumber: "InputNumber",
};

export const segemented_data = 
  [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
