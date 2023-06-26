import { Container } from "@mui/material";
import { IPropChildren } from "../types/types";

const StartPageContainer: React.FC<IPropChildren> = ({ children }) => {
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
