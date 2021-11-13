import { Container } from "./styles";

interface ButtonProps {
  title: string | any;
  onclick: () => void;
}

export const Button = ({ title, onclick }: ButtonProps) => {
  return <Container onClick={onclick}>{title}</Container>;
};
