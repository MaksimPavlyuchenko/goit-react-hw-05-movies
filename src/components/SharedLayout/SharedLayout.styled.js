import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  font-size: 40;
`;
export const Navigation = styled.nav`
  width: 1400px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const LinkStyled = styled(NavLink)`
  font-size: 60px;
  margin-right: 20px;
  color: black;
  text-decoration: none;
  &.active {
    color: orangered;
  }
`;
