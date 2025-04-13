import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import MonumentsContext from "./MonumentsContext";
import MonumentsContextStructure from "./types";
import MonumentClient from "../client/MonumentClient";
import { Monument, MonumentData } from "../types";

const MonumentsContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [monuments, setMonuments] = useState<Monument[]>([]);

  const monumentClient = useMemo(() => new MonumentClient(), []);

  const loadMonuments = useCallback(async (): Promise<void> => {
    const apiMonuments = await monumentClient.getMonuments();

    setMonuments(apiMonuments);
  }, [monumentClient]);

  const createMonument = async (monumentData: MonumentData): Promise<void> => {
    const addedMonument = await monumentClient.addMonument(monumentData);

    setMonuments((monuments) => [...monuments, addedMonument]);
  };

  const monumentContextValue: MonumentsContextStructure = {
    monuments,
    loadMonuments,
    createMonument,
  };

  return (
    <MonumentsContext.Provider value={monumentContextValue}>
      {children}
    </MonumentsContext.Provider>
  );
};

export default MonumentsContextProvider;
