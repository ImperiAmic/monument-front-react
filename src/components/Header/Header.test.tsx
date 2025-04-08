import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the App component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Monuments - Backoffice' inside a level 1 heading", () => {
      const expectedAppTitle = "Monuments - Backoffice";

      render(<Header />);

      const appTitle = screen.queryByRole("heading", {
        name: expectedAppTitle,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });

    test("Then it should show a 'Monuments' link and a 'Add monument' link", () => {
      render(<Header />);

      const monumentLink = screen.queryByRole("link", {
        name: /monuments/i,
      });

      const addLink = screen.queryByRole("link", {
        name: /add/i,
      });

      expect(monumentLink).toBeVisible();
      expect(addLink).toBeVisible();
    });
  });
});
