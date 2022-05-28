import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate(); // useNavigate returns a fucntion that can called later
  return (
    <>
      <header className="header">
        <div
          className="logo"
          onClick={() => {
            navigate("/orders/go-facebook", {
              state: { b: 4, c: 6 },
            });
          }}
        >
          <img
            src={require("../../images/app.logo.png")}
            alt="Burger delivery"
          />
        </div>
        <div>
          <h2>Burger Builder App</h2>
        </div>
        <nav>
          <NavLink
            className={({ isActive }) =>
              isActive ? "menu_item_active" : undefined
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "menu_item_active" : undefined
            }
            to="/orders"
          >
            Orders
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "menu_item_active" : undefined
            }
            to="/faq"
          >
            FAQ
          </NavLink>
        </nav>
      </header>
    </>
  );
}
