import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import IconCrown1 from '../assets/image/1st.avif';
import IconCrown2 from '../assets/image/2nd.avif';
import IconCrown3 from '../assets/image/3rd.avif';

function TopRankCard({ ranking, ranker }) {
  const { authUser } = useSelector((states) => states);
  const thisMe = authUser && authUser.id === ranker.user.id ? 'border-4 border-primary p-0.5' : '';

  const rankBadge = {
    1: {
      rankingCheck: '1st',
      iconTopRank: IconCrown1,
      textColor: 'text-gold',
    },
    2: {
      rankingCheck: '2nd',
      iconTopRank: IconCrown2,
      textColor: 'text-silver',
    },
    3: {
      rankingCheck: '3rd',
      iconTopRank: IconCrown3,
      textColor: 'text-bronze',
    },
  };

  const rankAttribute = rankBadge[ranking];
  return (
    <div className="flex flex-col items-center">
      <img src={rankAttribute.iconTopRank} alt="crown" className="w-3 md:w-7" />
      <p className={`text-sm font-bold  md:text-xl ${rankAttribute.textColor}`}>
        {rankAttribute.rankingCheck}
      </p>
      <img
        src={ranker.user.avatar}
        alt="avatar1"
        className={`mb-2 mt-1 w-12 rounded-full md:mb-5 md:w-24 ${thisMe}`}
      />
      <p className="text-center text-sm font-bold md:text-xl">{ranker.user.name}</p>
      <p className="text-xs font-semibold md:text-base">{ranker.score}</p>
    </div>
  );
}

TopRankCard.propTypes = {
  ranker: PropTypes.objectOf(Array).isRequired,
  ranking: PropTypes.string.isRequired,
};

export default TopRankCard;
