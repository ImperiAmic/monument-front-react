import MonumentForm from "../../components/MonumentForm/MonumentForm";
import "./AddMonumentPage.css";

const AddMonumentPage: React.FC = () => {
  return (
    <div className="form-container">
      <h2 className="form__title">Add a new monument</h2>
      <MonumentForm />
    </div>
  );
};

export default AddMonumentPage;
