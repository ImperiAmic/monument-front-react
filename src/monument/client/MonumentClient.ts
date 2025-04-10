import mapMonumentsDtoToMonuments from "../dto/mappers";
import MonumentDto from "../dto/types";
import Monument from "../types";
import MonumentClientStructure from "./types";

class MonumentClient implements MonumentClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  public getMonuments = async (): Promise<Monument[]> => {
    const response = await fetch(`${this.apiUrl}/monuments`);

    const { monuments: monumentsDto } = (await response.json()) as {
      monuments: MonumentDto[];
    };

    return mapMonumentsDtoToMonuments(monumentsDto);
  };
}

export default MonumentClient;
