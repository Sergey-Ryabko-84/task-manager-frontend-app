import { AppBar, Toolbar } from "@mui/material";
import { IPropChildren } from "../types/types";

const AppPanel: React.FC<IPropChildren> = ({ children }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};

export default AppPanel;
