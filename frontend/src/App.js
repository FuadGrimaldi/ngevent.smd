// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function App() {
  // const Hello = () => "Hello World";
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/about" element={<About />}>
          {/* <About /> */}
        </Route>
        <Route path="/users" element={<Users />}>
          {/* <Users /> */}
        </Route>
        <Route path="/" element={<Home />}>
          {/* <Home /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
