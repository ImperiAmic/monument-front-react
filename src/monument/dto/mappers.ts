import { Monument } from "../types";
import MonumentDto from "./types";

const mapMonumentsDtoToMonuments = (
  monumentsDto: MonumentDto[],
): Monument[] => {
  return monumentsDto.map<Monument>(({ name, ...monumentDto }) => ({
    ...monumentDto,
    name,
    imageDescription: `General view of ${name}`,
  }));
};

export default mapMonumentsDtoToMonuments;
