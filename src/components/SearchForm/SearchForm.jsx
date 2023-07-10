import { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as MyIcon } from '../search.svg';
import { InputStyled, FormStyled } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [state, setState] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    setState('');
  };

  function handlerChange(e) {
    setState(e.target.value);
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <button type="submit">
        <MyIcon />
      </button>
      <InputStyled
        type="text"
        name="searchValue"
        value={state}
        onChange={handlerChange}
      />
    </FormStyled>
  );
};
export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
