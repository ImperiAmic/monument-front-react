import MonumentDto from "../dto/types";

interface MonumentClientStructure {
  getMonuments: () => Promise<MonumentDto[]>;
}

export default MonumentClientStructure;
