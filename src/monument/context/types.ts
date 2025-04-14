import { Monument, MonumentData } from "../types";

interface MonumentsContextStructure {
  monuments: Monument[];
  loadMonuments: () => Promise<void>;
  createMonument: (monumentData: MonumentData) => Promise<void>;
  trashMonument: (monumentId: string) => Promise<void>;
}

export default MonumentsContextStructure;
