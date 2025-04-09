import Monument from "../types";
import MonumentDto from "./type";

const mapMonumentsDtoToMonuments = (
  monumentsDto: MonumentDto[],
): Monument[] => {
  return monumentsDto.map<Monument>(({ ...monumentDto }) => ({
    ...monumentDto,
    imageDescription: `General view of ${monumentDto.name}`,
  }));
};

export default mapMonumentsDtoToMonuments;
