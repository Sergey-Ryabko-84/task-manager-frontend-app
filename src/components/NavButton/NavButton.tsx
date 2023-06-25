import { Button } from "./NavButton.styled";

interface IProps {
  to: string;
  children: React.ReactNode;
}

const NavButton: React.FC<IProps>= ({to, children}) => {
  return <Button to={to}>{children}</Button>;
};

export default NavButton;
