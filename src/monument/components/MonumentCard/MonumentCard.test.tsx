import { render, screen } from "@testing-library/react";
import MonumentCard from "./MonumentCard";
import { santaMaria } from "../../fixture";
import { MemoryRouter } from "react-router";
import MonumentsContextProvider from "../../context/MonumentsContextProvider";

describe("Given the MonumentCard component", () => {
  describe("When it receives Basílica de Santa María", () => {
    test("Then it should show 'Basílica de Santa María' inside a heading", () => {
      const expectedMonumentName = santaMaria.name;

      render(
        <MonumentsContextProvider>
          <MemoryRouter>
            <MonumentCard monument={santaMaria} />
          </MemoryRouter>
        </MonumentsContextProvider>,
      );

      const monumentName = screen.getByRole("heading", {
        name: expectedMonumentName,
      });

      expect(monumentName).toBeVisible();
    });
  });
});
