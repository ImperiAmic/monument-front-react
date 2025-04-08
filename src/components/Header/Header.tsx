import Navigator from "../Navigator/Navigator";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <h1 className="main-title">Monuments - Backoffice</h1>
        <Navigator />
      </div>
    </header>
  );
};

export default Header;
