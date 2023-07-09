import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 10px 0px 0px 60px;
  text-decoration: none;
  color: black;

  :hover {
    color: orangered;
  }
`;
