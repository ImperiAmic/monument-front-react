import { render, screen } from "@testing-library/react";
import santaMaria from "../../fixture";
import MonumentCard from "./MonumentCard";

describe("Given the MonumentCard component", () => {
  describe("When it receives Basílica de Santa María", () => {
    test("Then it should show 'Basílica de Santa María' inside a heading", () => {
      const expectedMonumentName = santaMaria.name;

      render(<MonumentCard monument={santaMaria} />);

      const monumentName = screen.getByRole("heading", {
        name: expectedMonumentName,
      });

      expect(monumentName).toBeVisible();
    });
  });
});
