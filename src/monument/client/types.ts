import MonumentDto from "../dto/type";

interface MonumentClientStructure {
  getMonuments: () => Promise<MonumentDto[]>;
}

export default MonumentClientStructure;
