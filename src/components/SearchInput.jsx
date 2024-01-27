/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';

function SearchInput({ keyword, onKeywordChange }) {
  return (
    <div className="search-input absolute  right-5 md:right-11">
      <label className="relative block" htmlFor="search-input">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-2 flex items-center pl-2 text-[#808080]">
          <GoSearch className=" h-5=4 w-4 md:h-6 md:w-6" />
        </span>
        <input
          className=" placeholder:text-slate-400 w-50 focus:border-sky-500 focus:ring-sky-500 my-5 block h-7 rounded-3xl bg-white py-1 pl-10 pr-3 text-sm focus:outline-none  focus:ring-1 sm:text-sm md:h-10 md:w-80 md:pl-14"
          placeholder="Search by category...."
          type="text"
          name="search"
          id="search-input"
          value={keyword}
          onChange={onKeywordChange}
        />
      </label>
    </div>
  );
}

SearchInput.propTypes = {
  onKeywordChange: PropTypes.func.isRequired,
  keyword: PropTypes.string,
};

export default SearchInput;
