import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SBreadCrumb from "../../components/Breadcrumb";
import NAlert from "../../components/alert";
import Form from "./form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { postData } from "../../utils/fetch";
// import { useDispatch } from "react-redux";
// import { setNotif } from "../../redux/notif/actions";

function CategoryCreate() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    // const res = await postData("/cms/categories", form);
    const res = await axios.post(`/cms/categories`, form);
    if (res?.data?.data) {
      // dispatch(
      //   setNotif(
      //     true,
      //     "success",
      //     `berhasil tambah kategori ${res.data.data.name}`
      //   )
      // );
      navigate("/categories");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: res.response.data.msg,
      });
    }
  };

  return (
    <Container>
      <SBreadCrumb
        textSecound={"Categories"}
        urlSecound={"/categories"}
        textThird="Create"
      />
      {alert.status && <NAlert type={alert.type} message={alert.message} />}
      <Form
        form={form}
        isLoading={isLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default CategoryCreate;
