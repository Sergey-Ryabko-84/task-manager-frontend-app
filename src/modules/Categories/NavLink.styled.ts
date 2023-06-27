import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  padding: 4;
  color: #1976d2;
  transition: color 250ms;

  :hover,
  :focus {
    color: #1564c0;
    text-decoration: underline;
  }
`;
