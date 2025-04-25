import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import NButton from "../../components/button";
import Form from "react-bootstrap/Form";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import axios from "axios";
import NAlert from "../../components/alert";
import { Navigate, useNavigate } from "react-router-dom";
import { config } from "../../config";

function PageSignin() {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    variant: "danger",
  });
  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlerSubmit = async () => {
    setLoading(true);
    try {
      const result = await axios.post(
        `${config.api_host_dev}/auth/signin/cms`,
        { email: form.email, password: form.password }
      );
      localStorage.setItem("token", result.data.data.token);
      setLoading(false);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setLoading(false);
      setAlert({
        status: true,
        message:
          error?.response?.data?.meta?.message ?? "Internal Server Error",
        variant: "danger",
      });
    }
  };

  // if (!token) return <Navigate to="/" replace={true} />;

  return (
    <Container md={12} className="my-5">
      <div className="m-auto" style={{ width: "50%" }}>
        {alert.status && (
          <NAlert message={alert.message} variant={alert.variant} />
        )}
      </div>

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
            <NButton
              variant="primary"
              type="submit"
              action={handlerSubmit}
              loading={loading}
              disabled={loading}
            >
              Submit
            </NButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
