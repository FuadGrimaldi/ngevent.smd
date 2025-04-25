// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageSignin from "./pages/signin";
import PageDashboard from "./pages/dashboard";
import Categories from "./pages/categories";

function HomePage() {
  return <h2>Home Page</h2>;
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<PageSignin />} />
        <Route path="/dashboard" element={<PageDashboard />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
