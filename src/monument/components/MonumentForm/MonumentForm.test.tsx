import { render, screen } from "@testing-library/react";
import MonumentForm from "./MonumentForm";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";

const user = userEvent.setup();
const fakeAction = vitest.fn();

beforeEach(() => {
  fakeAction.mockClear();
});

describe("Given the MonumentForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Monument Name' text box", () => {
      render(
        <MemoryRouter>
          <MonumentForm action={fakeAction} />
        </MemoryRouter>,
      );

      const monumentNameTextBox = screen.getByLabelText(/monument name/i);

      expect(monumentNameTextBox).toBeVisible();
    });

    test("Then it should show a 'Monument Description' text box", () => {
      render(
        <MemoryRouter>
          <MonumentForm action={fakeAction} />
        </MemoryRouter>,
      );
      const monumentNameTextBox =
        screen.getByLabelText(/monument description/i);

      expect(monumentNameTextBox).toBeVisible();
    });

    test("Then it should show a 'Monument Image URL' text box", () => {
      render(
        <MemoryRouter>
          <MonumentForm action={fakeAction} />
        </MemoryRouter>,
      );
      const monumentNameTextBox = screen.getByLabelText(/monument image url/i);

      expect(monumentNameTextBox).toBeVisible();
    });

    test("Then it should show a 'Monument Country' text box", () => {
      render(
        <MemoryRouter>
          <MonumentForm action={fakeAction} />
        </MemoryRouter>,
      );
      const monumentNameTextBox = screen.getByLabelText(/monument country/i);

      expect(monumentNameTextBox).toBeVisible();
    });

    test("Then it should show a 'Monument City' text box", () => {
      render(
        <MemoryRouter>
          <MonumentForm action={fakeAction} />
        </MemoryRouter>,
      );
      const monumentNameTextBox = screen.getByLabelText(/monument city/i);

      expect(monumentNameTextBox).toBeVisible();
    });

    test("Then it should show a 'Submit' button", () => {
      render(
        <MemoryRouter>
          <MonumentForm action={fakeAction} />
        </MemoryRouter>,
      );
      const monumentNameTextBox = screen.getByRole("button", {
        name: "Submit",
      });

      expect(monumentNameTextBox).toBeVisible();
    });
  });

  describe("And the user types 'Rambla del Poblenou' in 'Monument Name' text box", () => {
    test("Then it should show 'Rambla del Poblenou' in 'Monument Name' text box", async () => {
      const expectedTextBox = "Rambla del Poblenou";

      render(
        <MemoryRouter>
          <MonumentForm action={fakeAction} />
        </MemoryRouter>,
      );
      const monumentNameTextBox = screen.getByLabelText(/monument name/i);

      await user.type(monumentNameTextBox, expectedTextBox);

      expect(monumentNameTextBox).toHaveValue(expectedTextBox);
    });
  });
});
