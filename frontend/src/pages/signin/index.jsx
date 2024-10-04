import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import NButton from "../../components/button";
import Form from "react-bootstrap/Form";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import axios from "axios";

function PageSignin() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handlerChange = (e) => {
    console.log("e.target.name", e.target.name);

    console.log("e.target.value", e.target.value);

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlerSubmit = async () => {
    try {
      const result = await axios.post(
        "http://localhost:4000/api/v1/auth/signin/cms",
        { email: form.email, password: form.password }
      );
      console.log(result);
      console.log(result.data.meta.message);
    } catch (error) {
      console.log(error.response.data.meta.message);
    }
  };

  return (
    <Container md={12}>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title className="text-center">Form Signup</Card.Title>
          <Form>
            <TextInputWithLabel
              label="Email Address"
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handlerChange}
              value={form.email}
            />
            <TextInputWithLabel
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handlerChange}
              value={form.password}
            />
            <NButton variant="primary" type="submit" action={handlerSubmit}>
              Submit
            </NButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
