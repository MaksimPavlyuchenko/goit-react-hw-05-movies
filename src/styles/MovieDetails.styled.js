import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BoxLink = styled.div`
  display: flex;
  margin-left: 40px;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  width: 70px;

  padding: 10px;
  margin-top: 10px;
  margin-right: 10px;
  border: 1px solid black;
  border-radius: 4px;

  text-decoration: none;
  text-align: center;
  color: black;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  :hover {
    background-color: orangered;
    color: white;
    border-color: white;
  }
`;
