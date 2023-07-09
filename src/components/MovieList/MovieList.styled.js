import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(NavLink)`
  text-decoration: none;

  font-size: 20px;
  color: black;

  :hover {
    color: orangered;
  }
`;
