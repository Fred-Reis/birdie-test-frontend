import { render } from "@testing-library/react";
import { InfoCards } from ".";

describe("InfoCards component", () => {
  test("info cards renders correctly", () => {
    const { getByText } = render(<InfoCards type="events" value="10" />);

    expect(getByText("Most recurrent event type")).toBeTruthy();
  });
});
