import { Container } from "./styles";

interface ButtonProps {
  title: string | any;
  onclick: () => void;
  disabled?: boolean;
}

export const Button = ({ title, onclick, disabled }: ButtonProps) => {
  return (
    <Container disabled={disabled} onClick={onclick}>
      {title}
    </Container>
  );
};
