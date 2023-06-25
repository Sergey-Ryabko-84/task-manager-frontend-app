import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const Button = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  padding: 12px;
  border-radius: 4px;
  background-color: #1976d2;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  transition: background-color 250ms;

  :hover,
  :focus {
    background-color: #1564c0;
  }

  :active {
    background-color: #0854 b0;
  }
`;
