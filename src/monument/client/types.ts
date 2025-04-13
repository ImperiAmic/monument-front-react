import MonumentDto from "../dto/types";
import { Monument, MonumentData } from "../types";

interface MonumentClientStructure {
  getMonuments: () => Promise<MonumentDto[]>;
  addMonument: (monumentData: MonumentData) => Promise<Monument>;
}

export default MonumentClientStructure;
