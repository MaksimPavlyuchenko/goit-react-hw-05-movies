import { useLocation } from 'react-router-dom';
import { LinkStyled } from './SearchMovieList.styled';
const SearchMovieList = ({ stateArray }) => {
  const location = useLocation();

  return (
    <>
      {stateArray.map(({ title, id }) => {
        return (
          <LinkStyled to={`${id}`} key={id} state={{ from: location }}>
            {title}
          </LinkStyled>
        );
      })}
    </>
  );
};
export default SearchMovieList;
