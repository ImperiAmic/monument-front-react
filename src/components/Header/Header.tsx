import Navigator from "../Navigator/Navigator";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header">
        <h1 className="header__title">Monuments - Backoffice</h1>
        <Navigator />
      </div>
    </header>
  );
};

export default Header;
