import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import MonumentsContext from "./MonumentsContext";
import MonumentsContextStructure from "./types";
import Monument from "../types";
import MonumentClient from "../client/MonumentClient";

const MonumentsContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [monuments, setMonuments] = useState<Monument[]>([]);

  const monumentClient = useMemo(() => new MonumentClient(), []);

  const loadMonuments = useCallback(async (): Promise<void> => {
    const apiMonuments = await monumentClient.getMonuments();

    setMonuments(apiMonuments);
  }, [monumentClient]);

  const monumentContextValue: MonumentsContextStructure = {
    monuments,
    loadMonuments,
  };

  return (
    <MonumentsContext.Provider value={monumentContextValue}>
      {children}
    </MonumentsContext.Provider>
  );
};

export default MonumentsContextProvider;
