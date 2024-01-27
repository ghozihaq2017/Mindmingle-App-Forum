/* eslint-disable react/require-default-props */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CategoryButton from './CategoryButton';

function PopularCategory({ onClickCategory, keyword }) {
  const { categories } = useSelector((states) => states);

  if (categories.length === 0) {
    return null;
  }
  return (
    <>
      <h3 className="mx-10 mt-24 text-xl font-bold md:mx-20 md:mt-32">Popular Category</h3>
      <div className="categories mx-10 mt-6 flex flex-wrap justify-start gap-3 md:mx-20">
        {categories.map(
          (categoryObj, i) =>
            i < 6 && (
              <CategoryButton
                key={categoryObj.id}
                category={categoryObj}
                onClickCategory={onClickCategory}
                keyword={keyword}
              />
            ),
        )}
      </div>
    </>
  );
}

PopularCategory.propTypes = {
  onClickCategory: PropTypes.func.isRequired,
  keyword: PropTypes.string,
};

export default PopularCategory;
