import { Monument } from "../types";
import MonumentDto from "./types";

export const mapMonumentsDtoToMonuments = (
  monumentsDto: MonumentDto[],
): Monument[] => {
  return monumentsDto.map<Monument>(({ name, ...monumentDto }) => ({
    ...monumentDto,
    name,
    imageDescription: `General view of ${name}`,
  }));
};

export const mapMonumentDtoToMonument = (
  monumentDto: MonumentDto,
): Monument => {
  const monument: Monument = {
    ...monumentDto,
    imageDescription: `General view of ${monumentDto.name}`,
  };

  return monument;
};
