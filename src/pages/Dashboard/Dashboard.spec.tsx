import renderer from "react-test-renderer";
import { Dashboard } from ".";

describe("Dashboard page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
