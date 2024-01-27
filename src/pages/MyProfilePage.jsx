import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ProfileCard from '../components/ProfileCard';
import { asyncUnsetAuthUser } from '../states/authUser/action';

function MyProfilePage() {
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());

    navigate('/login');
  };

  return (
    <section
      id="my-profile-page "
      className="flex h-[850px] w-full justify-center bg-secondary bg-pattern bg-repeat "
    >
      <Header />
      <div className="body h-auto w-5/6 bg-white font-jkt shadow-3xl md:w-3/5">
        <h3 className="mx-10 mt-24 text-xl font-bold md:mx-20 md:mt-32">My Profile</h3>
        <ProfileCard data={authUser} signOut={onSignOut} />
      </div>
      <Navigation />
    </section>
  );
}

export default MyProfilePage;
