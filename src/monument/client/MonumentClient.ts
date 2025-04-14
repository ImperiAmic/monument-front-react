import {
  mapMonumentDtoToMonument,
  mapMonumentsDtoToMonuments,
} from "../dto/mappers";
import MonumentDto from "../dto/types";
import { Monument, MonumentData } from "../types";
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

  public addMonument = async (
    monumentData: MonumentData,
  ): Promise<Monument> => {
    const response = await fetch(`${this.apiUrl}/monuments/add-monument`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(monumentData),
    });

    const addedMonument = (await response.json()) as MonumentDto;

    return mapMonumentDtoToMonument(addedMonument);
  };

  public deleteMonument = async (monumentId: string): Promise<Monument> => {
    const response = await fetch(
      `${this.apiUrl}/monuments/delete/${monumentId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      },
    );

    const deletedMonument = (await response.json()) as MonumentDto;

    return mapMonumentDtoToMonument(deletedMonument);
  };
}

export default MonumentClient;
