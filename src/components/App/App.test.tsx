import App from "./App";
import { render, screen } from "@testing-library/react";

describe("Given the App component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Monuments - Backoffice' inside a level 1 heading", () => {
      const expectedAppTitle = "Monuments - Backoffice";

      render(<App />);

      const appTitle = screen.queryByRole("heading", {
        name: expectedAppTitle,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });
  });
});
