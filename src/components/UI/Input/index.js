import React from "react";
import { Form } from "react-bootstrap";

const Input = (props) => {
  return (
    <Form.Group>
      <Form.Label>{props.Label}</Form.Label>
      <Form.Control
        type={props.type}
        placeHolder={props.placeHolder}
        value={props.value}
        onChange={props.onChange}
      />
      <Form.Text className="text-muted">{props.errorMessage}</Form.Text>
    </Form.Group>
  );
};

export default Input;
