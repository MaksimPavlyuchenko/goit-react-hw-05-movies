import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { LinkStyled } from './MovieList.styled';

const MovieList = ({ stateArray }) => {
  const location = useLocation();

  return (
    <>
      {stateArray.map(({ title, id }) => {
        return (
          <LinkStyled to={`movies/${id}`} key={id} state={{ from: location }}>
            {title}
          </LinkStyled>
        );
      })}
    </>
  );
};
export default MovieList;

MovieList.propTypes = {
  stateArray: PropTypes.array,
};
