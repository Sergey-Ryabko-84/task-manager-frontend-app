import * as React from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import { ICategory } from "../types/types";
import CategoryActions from "../modules/Categories/CategoryActions";

const CategoryActionsBtn: React.FC<ICategory> = (item) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Button aria-describedby={id} onClick={handleClick}>
        actions
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <CategoryActions {...item} />
      </Popover>
    </>
  );
};

export default CategoryActionsBtn;
