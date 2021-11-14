import { render } from "@testing-library/react";
import { ProfileCard } from ".";

describe("ProfileCard component", () => {
  test("info cards renders correctly", () => {
    const user = {
      name: {
        first: "John",
        last: "Doo",
      },
      email: "johndoo@email.com",
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/63.jpg",
      },
    };

    const { debug } = render(
      <ProfileCard user={user} care_recipient_id="any" />
    );

    debug();
  });
});
