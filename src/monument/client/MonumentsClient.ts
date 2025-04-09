import { Monument } from "../types";
import MonumentClientStructure from "./types";

class MonumentClient implements MonumentClientStructure {
  public getMonuments = async (): Promise<Monument[]> => {
    const response = await fetch("http://localhost:3001/monuments/");

    const { monuments } = (await response.json()) as { monuments: Monument[] };

    return monuments;
  };
}

export default MonumentClient;
