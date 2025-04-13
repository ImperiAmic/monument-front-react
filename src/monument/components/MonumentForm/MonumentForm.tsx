import { useState } from "react";
import { useNavigate } from "react-router";
import { MonumentData } from "../../types";
import "./MonumentForm.css";

interface MonumentFormProps {
  action: (monumentData: MonumentData) => Promise<void>;
}

const MonumentForm: React.FC<MonumentFormProps> = ({ action }) => {
  const emptyMonumentData = {
    name: "",
    description: "",
    imageUrl: "",
    country: "",
    city: "",
  };

  const [monumentData, setMonumentData] =
    useState<MonumentData>(emptyMonumentData);

  const editMonumentData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const newValue = event.target.value;
    const propertyName = event.target.id;

    setMonumentData((monumentData) => ({
      ...monumentData,
      [propertyName]: newValue,
    }));
  };

  const navigate = useNavigate();

  const onSubmitForm = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    await action(monumentData);

    navigate("/monuments");
  };

  const isFormValid =
    monumentData.name !== "" &&
    monumentData.description !== "" &&
    monumentData.imageUrl !== "" &&
    monumentData.country !== "" &&
    monumentData.city !== "";

  return (
    <form className="form" onSubmit={onSubmitForm}>
      <div className="form__group">
        <label className="form__label" htmlFor="name">
          Monument Name
        </label>
        <input
          className="form__input"
          type="text"
          id="name"
          value={monumentData.name}
          onChange={editMonumentData}
          required
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="description">
          Monument Description
        </label>
        <input
          className="form__input"
          type="text"
          id="description"
          value={monumentData.description}
          onChange={editMonumentData}
          required
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="imageUrl">
          Monument Image URL
        </label>
        <input
          className="form__input"
          type="url"
          id="imageUrl"
          value={monumentData.imageUrl}
          onChange={editMonumentData}
          required
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="country">
          Monument Country
        </label>
        <input
          className="form__input"
          type="text"
          id="country"
          value={monumentData.country}
          onChange={editMonumentData}
          required
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="city">
          Monument City
        </label>
        <input
          className="form__input"
          type="text"
          id="city"
          value={monumentData.city}
          onChange={editMonumentData}
          required
        />
      </div>
      <button className="form__button" type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};

export default MonumentForm;
