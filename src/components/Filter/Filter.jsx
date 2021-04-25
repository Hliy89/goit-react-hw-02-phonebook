import React from 'react';

import style from './Filter.module.css';

const Filter = ({ filter, changeFilter }) => {
  return (
    <>
      <p className={style.contactText}>Find contacts by name</p>
      <input
        className={style.findInput}
        onChange={changeFilter}
        type="text"
        value={filter}
      />
    </>
  );
};

export default Filter;
