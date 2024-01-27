import React from 'react';
import PropTypes from 'prop-types';

function ProfileData({ data }) {
  return (
    <div className="data-profile my-10 flex flex-col items-center justify-center md:my-16 md:flex-row">
      <img src={data.avatar} alt="avatar1" className="w-28 rounded-full md:w-36" />
      <div className="mt-5 pl-3 text-center md:pl-9 md:text-left">
        <h1 className="text-xl font-bold md:text-5xl md:font-extrabold ">{data.name}</h1>
        <p className="mt-2 text-sm font-medium md:text-xl">{data.email}</p>
      </div>
    </div>
  );
}

ProfileData.propTypes = {
  data: PropTypes.objectOf(Array).isRequired,
};

export default ProfileData;
