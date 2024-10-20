import React from "react";
import { Container } from "react-bootstrap";
import SBreadCrumb from "../../components/Breadcrumb";
import SNavbar from "../../components/Navbar";

export default function Dashboard() {
  return (
    <Container className="mt-3">
      <SNavbar></SNavbar>
      <SBreadCrumb />
      <h1>Dashboard</h1>
    </Container>
  );
}
