/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

function CategoryButton({ category, onClickCategory, keyword }) {
  return (
    <div className="category">
      <button
        type="button"
        className={`text-bold flex h-auto w-auto rounded-xl ${
          keyword === category.category ? 'bg-oldPrimary text-white' : 'bg-primary'
        }  px-3 py-1 hover:bg-oldPrimary hover:text-white`}
        onClick={() => onClickCategory(category.category)}
      >
        <p>
          {category.count}
          &nbsp;
        </p>
        <h4>{category.category}</h4>
      </button>
    </div>
  );
}

CategoryButton.propTypes = {
  category: PropTypes.objectOf(Array).isRequired,
  onClickCategory: PropTypes.func.isRequired,
  keyword: PropTypes.string,
};

export default CategoryButton;
