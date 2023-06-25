import { Container, Typography } from "@mui/material";
import StartPageContainer from "../components/StartPageContainer";
import NavButton from "../components/NavButton/NavButton";

const HomePage: React.FC = () => {
  return (
    <StartPageContainer>
      <Typography
        variant="h1"
        sx={{ textAlign: "center", fontSize: 24, fontWeight: 600, mb: 2 }}
      >
        Welcome to task manager
      </Typography>
      <Typography sx={{ textAlign: "center", fontSize: 18, mb: 2 }}>
        Log in with your account to continue
      </Typography>
      <Container
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "center",
        }}
      >
        <NavButton to="/login">Log in</NavButton>
        <NavButton to="/register">Register</NavButton>
      </Container>
    </StartPageContainer>
  );
};

export default HomePage;
