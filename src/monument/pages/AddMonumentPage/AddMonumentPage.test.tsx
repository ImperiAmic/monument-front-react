import { render, screen } from "@testing-library/react";
import AddMonumentPage from "./AddMonumentPage";
import { MemoryRouter } from "react-router";
import MonumentsContextProvider from "../../context/MonumentsContextProvider";

describe("Given the AddMonumentPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Add a new monument' as a heading", () => {
      const expectedPageTitle = "Add a new monument";

      render(
        <MonumentsContextProvider>
          <MemoryRouter>
            <AddMonumentPage />
          </MemoryRouter>
        </MonumentsContextProvider>,
      );

      const pageTitle = screen.getByRole("heading", {
        name: expectedPageTitle,
      });

      expect(pageTitle).toBeVisible();
    });
  });
});
