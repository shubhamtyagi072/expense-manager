import { message } from "antd";
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

export const segemented_data = [
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

export const emailError = (err) => {
  switch (err) {
    case "auth/invalid-credential":
      return "Please enter correct credential";
    case "auth/email-already-in-use":
      return "You already have account with us with same emailID";
    case "auth/operation-not-supported-in-this-environment":
      return "HTTP protocol is not supported. Please use HTTPS.";
    case "auth/popup-blocked":
      return "Popup has been blocked by the browser. Please allow popups for this website.";
    case "auth/popup-closed-by-user":
      return "Popup has been closed by the user before finalizing the operation. Please try again.";
    case "auth/invalid-email":
      return "This email address is invalid.";
    case "auth/user-disabled":
      return "This email address is disabled by the administrator.";
    case "auth/user-not-found":
      return "This email address is not registered.";
    case "auth/wrong-password":
      return "The password is invalid or the user does not have a password.";
  }
};
