import "./Header.css";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src={require("../../images/app.logo.png")}
            alt="Burger delivery"
          />
        </div>
        <div>
          <h2>Burger Builder App</h2>
        </div>
        <ul>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
