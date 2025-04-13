import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Oopsie doopsie!' as a text", () => {
      const expectedNotFoundPageText = "Oopsie doopsie!";

      render(<NotFoundPage />);

      const notFoundPageText = screen.getByText(expectedNotFoundPageText);
      expect(notFoundPageText).toBeVisible();
    });

    test("Then it should show 'The page you are looking for does not exist, sorry.' as a text", () => {
      const expectedNotFoundPageText =
        "The page you are looking for does not exist, sorry.";

      render(<NotFoundPage />);

      const notFoundPageText = screen.getByText(expectedNotFoundPageText);

      expect(notFoundPageText).toBeVisible();
    });
  });
});
