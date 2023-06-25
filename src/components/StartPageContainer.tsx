import { Container } from "@mui/material";

interface IProps {
  children: React.ReactNode;
}

const StartPageContainer: React.FC<IProps> = ({ children }) => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pb: 8,
      }}
    >
      {children}
    </Container>
  );
};

export default StartPageContainer;
