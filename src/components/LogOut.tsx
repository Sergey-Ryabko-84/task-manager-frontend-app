import { Logout } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { logout } from "../redux/auth/operations";
import { signout } from "../redux/auth/slice";
import { selectUser } from "../redux/auth/selectors";

const LogOut: React.FC = () => {
  const dispatch = useAppDispatch();
  const { email } = useAppSelector(selectUser);

  const handleLogout = () => {
    logout();
    dispatch(signout());
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
      }}
    >
      <Typography>{email}</Typography>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleLogout}
        color="inherit"
      >
        <Logout />
      </IconButton>
    </Box>
  );
};

export default LogOut;
