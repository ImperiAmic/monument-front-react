import "./MonumentForm.css";

const MonumentForm: React.FC = () => {
  return (
    <form className="form">
      <div className="form__group">
        <label className="form__label" htmlFor="name">
          Monument Name
        </label>
        <input className="form__input" type="text" id="name" required />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="description">
          Monument Description
        </label>
        <input className="form__input" type="text" id="description" required />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="imageUrl">
          Monument Image URL
        </label>
        <input className="form__input" type="url" id="imageUrl" required />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="country">
          Monument Country
        </label>
        <input className="form__input" type="text" id="country" required />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="city">
          Monument City
        </label>
        <input className="form__input" type="text" id="city" required />
      </div>
      <button className="form__button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default MonumentForm;
