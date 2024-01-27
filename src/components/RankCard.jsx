import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function RankCard({ ranking, ranker }) {
  const { authUser } = useSelector((states) => states);
  const thisMe = authUser && authUser.id === ranker.user.id ? 'border-2 border-primary p-0.5' : '';

  return (
    <div className="top10 mx-10 mb-5 flex h-auto w-auto items-center bg-secondary px-4 py-3 shadow-card md:mx-20 md:px-6">
      <p className="text-sm font-bold md:text-base">{`${ranking + 1}`}</p>
      <img
        src={ranker.user.avatar}
        alt="avatar4"
        className={`${thisMe} ml-2 w-8 rounded-full md:ml-4 md:w-10 `}
      />
      <p className="ml-2 text-sm font-bold md:text-base">{ranker.user.name}</p>
      <p className="ml-auto text-sm font-semibold">{ranker.score}</p>
    </div>
  );
}

RankCard.propTypes = {
  ranker: PropTypes.objectOf(Array).isRequired,
  ranking: PropTypes.number.isRequired,
};

export default RankCard;
