import { Monument } from "../types";

interface MonumentClientStructure {
  getMonuments: () => Promise<Monument[]>;
}

export default MonumentClientStructure;
