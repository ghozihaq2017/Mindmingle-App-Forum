/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

function Header({ onKeywordChange, keyword, searchInput }) {
  return (
    <header className="fixed z-10 flex w-full bg-primary md:h-20 ">
      <Link to="/">
        <h3 className="ml-5 py-5 font-ysv text-lg text-secondary drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:ml-24 md:text-3xl ">
          MindMingle
        </h3>
      </Link>
      {searchInput && <SearchInput onKeywordChange={onKeywordChange} keyword={keyword} />}
    </header>
  );
}

Header.propTypes = {
  onKeywordChange: PropTypes.func,
  keyword: PropTypes.string,
  searchInput: PropTypes.bool,
};

export default Header;
