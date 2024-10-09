import React from "react";

export default function PageDashboard() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <div>Please login to access the dashboard.</div>;
  }
  return (
    <div>
      <h1>dashboard</h1>
    </div>
  );
}
