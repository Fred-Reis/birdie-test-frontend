import renderer from "react-test-renderer";
import { Skeleton } from ".";

describe("Skeleton component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Skeleton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
