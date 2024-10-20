import Alert from "react-bootstrap/Alert";
import React from "react";

function NAlert({ message, variant }) {
  return <Alert variant={variant}>{message}</Alert>;
}

export default NAlert;
