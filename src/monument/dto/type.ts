import Monument from "../types";

export type MonumentDto = Omit<Monument, "imageDescription">;

export default MonumentDto;
