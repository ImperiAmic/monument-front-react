import { Monument } from "../../types";
import "./MonumentCard.css";

interface MonumentCardProps {
  monument: Monument;
}

const MonumentCard: React.FC<MonumentCardProps> = ({ monument }) => {
  return (
    <article className="monument">
      <h2 className="monument__name">{monument.name}</h2>
      <button type="button" className="monument__delete">
        <img src="/trash.svg" alt="Trash icon" height={24} width={24} />
      </button>
      <img
        src={monument.imageUrl}
        alt={monument.imageDescription}
        className="monument__image"
        loading="lazy"
        width="500"
        height="500"
      />
      <div className="monument__details">
        <p className="monument__description">{monument.description}</p>
        <div className="monument__location">
          <span className="monument__location-details">
            Country: {monument.country}
          </span>
          <span className="monument__location-details">
            City: {monument.city}
          </span>
        </div>
      </div>
    </article>
  );
};

export default MonumentCard;
