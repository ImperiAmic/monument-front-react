import { MemoryRouter } from "react-router";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("Given the App component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Monuments - Backoffice' inside a level 1 heading", () => {
      const expectedAppTitle = "Monuments - Backoffice";

      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const appTitle = screen.getByRole("heading", {
        name: expectedAppTitle,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });
  });
});
