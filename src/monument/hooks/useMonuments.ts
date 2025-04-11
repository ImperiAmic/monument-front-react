import { useContext } from "react";
import MonumentsContextStructure from "../context/types";
import MonumentsContext from "../context/MonumentsContext";

const useMonuments = (): MonumentsContextStructure => {
  const context = useContext(MonumentsContext);

  if (!context) {
    throw new Error("Missing provider for Monuments content");
  }

  return context;
};

export default useMonuments;
