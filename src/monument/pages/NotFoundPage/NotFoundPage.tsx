import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="notfound-container">
      <span className="notfound__number">Oopsie doopsie!</span>
      <span className="notfound__text">
        The page you are looking for does not exist, sorry.
      </span>
    </div>
  );
};

export default NotFoundPage;
