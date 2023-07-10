import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Navigation, LinkStyled } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Navigation>
        <LinkStyled to="/">Home</LinkStyled>
        <LinkStyled to="/movies">Movies</LinkStyled>
      </Navigation>
      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
