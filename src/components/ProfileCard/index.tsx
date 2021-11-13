import { Container } from "./styles";

export const ProfileCard = (props: { care_recipient_id: string }) => {
  const { care_recipient_id } = props;
  return (
    <Container>
      <h2>Care Recipient</h2>
      <img
        src="https://gravatar.com/avatar/51a0d88e74ac2796506043ccfc9940de?s=400&d=robohash&r=x"
        alt=""
      />

      <div>
        <h3>Name:</h3>
        <p>John Doo</p>

        <h3>Email:</h3>
        <p>johndoo@email.com</p>

        <h3>Care recipient id:</h3>
        <p>{care_recipient_id}</p>
      </div>
    </Container>
  );
};
