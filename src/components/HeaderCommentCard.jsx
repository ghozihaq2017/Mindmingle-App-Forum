import React from 'react';
import PropTypes from 'prop-types';
import getTime from '../utils/getTime';
// import Avatar from '../assets/image/avatar.png';

function HeaderCommentCard({ comment }) {
  const time = getTime(comment.createdAt);
  return (
    <div className="header-comment-card flex w-auto items-center border-b border-primary pb-3 ">
      <img src={comment.owner.avatar} alt="avatar" className="h-7 w-7 rounded-full" />
      <div className="info-user ml-3 flex w-full items-center">
        <h5 className="text-sm font-bold">{comment.owner.name}</h5>
        <p className="ml-auto w-1/3 text-end text-xs">{time}</p>
      </div>
    </div>
  );
}

HeaderCommentCard.propTypes = {
  comment: PropTypes.objectOf(Array).isRequired,
};

export default HeaderCommentCard;
