import { Container, Typography } from "@mui/material";
import LoginForm from "../modules/AuthForms/LoginForm";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const Link = styled(NavLink)`
  padding: 4;
  color: #1976d2;
  transition: color 250ms;

  :hover,
  :focus {
    color: #1564c0;
    text-decoration: underline;
  }
`;

const LoginPage: React.FC = () => {
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
      <Typography
        variant="h1"
        sx={{ textAlign: "center", fontSize: 30, fontWeight: 600, mb: 2 }}
      >
        Welcome back
      </Typography>
      <LoginForm />
      <Typography variant="body1" sx={{}}>
        Don't have an account? <Link to={"/register"}>Register</Link>
      </Typography>
    </Container>
  );
};

export default LoginPage;
