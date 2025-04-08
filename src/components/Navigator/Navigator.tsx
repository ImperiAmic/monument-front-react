import { NavLink } from "react-router";
import "./Navigator.css";

const Navigator: React.FC = () => {
  return (
    <nav>
      <ul className="header-navigation">
        <li>
          <NavLink className="header-navigation__link" to="/monuments">
            Monuments
          </NavLink>
        </li>
        <li>
          <NavLink className="header-navigation__link" to="/add-monument">
            Add Monument
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
