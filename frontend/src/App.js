// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageSignin from "./pages/signin";
import PageDashboard from "./pages/dashboard";

function HomePage() {
  return <h2>Home Page</h2>;
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/cms" element={<PageSignin />} />
        <Route path="/dashboard" element={<PageDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
