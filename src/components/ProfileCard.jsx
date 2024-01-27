import React from 'react';
import PropTypes from 'prop-types';
import { MdLogout } from 'react-icons/md';
import ProfileData from './ProfileData';

function ProfileCard({ data, signOut }) {
  return (
    <div className="my-profile-card mx-10 mt-7 h-auto w-auto bg-secondary px-5 py-5 shadow-card md:mx-20 md:px-10 md:pb-24 md:pt-12">
      <ProfileData data={data} />
      <button
        type="button"
        className="mx-auto my-4 flex w-auto items-center justify-center rounded-3xl bg-primary px-11 py-3 font-bold text-white shadow-button hover:bg-oldPrimary"
        onClick={() => signOut()}
      >
        <MdLogout className="h-6 w-6" />
        <span className="ml-3">Sign Out</span>
      </button>
    </div>
  );
}

ProfileCard.propTypes = {
  data: PropTypes.objectOf(Array).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default ProfileCard;
