// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageSignin from "./pages/signin";

function HomePage() {
  return <h2>Home Page</h2>;
}
function App() {
  // const Hello = () => "Hello World";
  return (
    <BrowserRouter>
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<PageSignin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
