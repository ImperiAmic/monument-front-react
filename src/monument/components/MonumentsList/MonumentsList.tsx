import Monument from "../../types";
import MonumentCard from "../MonumentCard/MonumentCard";
import "./MonumentsList.css";

interface MonumentsListProps {
  monuments: Monument[];
}

const MonumentsList: React.FC<MonumentsListProps> = ({ monuments }) => {
  return (
    <div className="monuments-container">
      <ul className="monuments">
        {monuments.map((monument) => (
          <li className="monument-wrapper" key={monument.id}>
            <MonumentCard monument={monument} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonumentsList;
