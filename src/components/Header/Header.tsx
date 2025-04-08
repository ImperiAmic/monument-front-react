import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <h1 className="main-title">Monuments - Backoffice</h1>
        <nav>
          <ul className="header-navigation">
            <li>
              <a
                className="header-navigation__link header-navigation__link--active"
                href="/monuments"
              >
                Monuments
              </a>
            </li>
            <li>
              <a className="header-navigation__link" href="/add">
                Add Monument
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
