import { useId } from 'react';

import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  const searchId = useId();

  return (
    <div className={css['SearchBox']}>
      <label className={css.label} htmlFor="searchId">
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        name="text"
        id={searchId}
        placeholder="Search..."
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;