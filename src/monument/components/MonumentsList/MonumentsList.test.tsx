import { render, screen } from "@testing-library/react";
import { bruc129, ermitaCid, santaMaria } from "../../fixture";
import Monument from "../../types";
import MonumentsList from "./MonumentsList";

describe("Given the MonumentList function component", () => {
  describe("When it receives Basílica de Santa María, Ermita de la Virgen del Cid and The Refactor Project Headquarters", () => {
    test("Then it should show 'Basílica de Santa María', 'Ermita de la Virgen del Cid' and 'The Refactor Project Headquarters' as a heading each", () => {
      const monuments: Monument[] = [santaMaria, ermitaCid, bruc129];

      render(<MonumentsList monuments={monuments} />);

      const santaMariaName = screen.getByRole("heading", {
        name: santaMaria.name,
      });
      const ermitaCidName = screen.getByRole("heading", {
        name: ermitaCid.name,
      });
      const bruc129Name = screen.getByRole("heading", {
        name: bruc129.name,
      });

      expect(santaMariaName).toBeVisible();
      expect(ermitaCidName).toBeVisible();
      expect(bruc129Name).toBeVisible();
    });
  });
});
