import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/P1">P1</Link>
        <br />
        <Link to="/P2">P2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
