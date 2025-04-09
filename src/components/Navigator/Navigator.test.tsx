import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Navigator from "./Navigator";

describe("Given the Navigator component", () => {
  describe("When it renders", () => {
    test("Then it should a 'Monuments' link and a 'Add Monument' link", () => {
      render(
        <MemoryRouter>
          <Navigator />
        </MemoryRouter>,
      );

      const monumentLink = screen.getByRole("link", {
        name: /monuments/i,
      });

      const addLink = screen.getByRole("link", {
        name: /add/i,
      });

      expect(monumentLink).toBeVisible();
      expect(addLink).toBeVisible();
    });
  });
});
