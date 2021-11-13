import { Container } from "./styles";

export const ProfileCard = (props: {
  care_recipient_id: string;
  user: any;
}) => {
  const { care_recipient_id, user } = props;

  return (
    <Container>
      <h2>Care Recipient</h2>
      <img src={user.picture.medium} alt="profile" />

      <div style={{ width: "100%" }}>
        <h3>Name:</h3>
        <p>
          {user.name.last}, {user.name.first}
        </p>

        <h3>Email:</h3>
        <p>{user.email}</p>

        <h3>Care recipient id:</h3>
        <p>{care_recipient_id}</p>
      </div>
    </Container>
  );
};
