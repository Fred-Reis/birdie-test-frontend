import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from ".";

const mockClick = jest.fn(() => console.log("gotcha!"));

describe("Button component", () => {
  test("button component renders correctly", () => {
    const { debug } = render(<Button title="button" onclick={mockClick} />);

    debug();
  });

  test("button component renders title correctly", () => {
    render(<Button title="button" onclick={mockClick} />);

    expect(screen.getByText("button")).toBeTruthy();
  });

  test("button component should trigger fuction correctly correctly", () => {
    render(<Button title="button" onclick={mockClick} />);

    const custtomButton = screen.getByText("button");

    fireEvent.click(custtomButton);

    expect(mockClick).toHaveBeenCalled();
  });
});
