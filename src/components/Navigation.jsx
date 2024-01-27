import React from 'react';
import { LiaComments, LiaChartBarSolid, LiaCommentMedicalSolid } from 'react-icons/lia';
import { MdLogin } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navigation() {
  const { authUser } = useSelector((states) => states);

  return (
    <nav className="navigation fixed bottom-14 flex h-[80px] w-11/12 items-center justify-around rounded-full bg-primary px-10 py-2.5 font-jkt shadow-nav md:w-4/12">
      <Link
        to="/"
        className="flex h-auto w-auto flex-col items-center justify-center text-secondary hover:text-white"
      >
        <LiaComments className="h-7 w-7 md:h-8 md:w-8" />
        <span className="text-xs md:text-base">Threads</span>
      </Link>
      {authUser && (
        <Link
          to="/add"
          className="flex h-auto w-auto flex-col items-center justify-center text-secondary hover:text-white"
        >
          <LiaCommentMedicalSolid className="h-7 w-7 md:h-8 md:w-8" />
          <span className="text-xs md:text-base">Add</span>
        </Link>
      )}
      <Link
        to="/leaderboards"
        className="flex h-auto w-auto flex-col items-center justify-center text-secondary hover:text-white"
      >
        <LiaChartBarSolid className="h-7 w-7 md:h-8 md:w-8" />
        <span className="text-xs md:text-base">Leaderboards</span>
      </Link>
      {authUser ? (
        <Link
          to="/profile"
          className="flex h-auto w-auto flex-col items-center justify-center text-secondary hover:text-white"
        >
          <img
            src={authUser.avatar}
            alt={`${authUser.name} avatar's`}
            className="h-7 w-7 rounded-full md:h-8 md:w-8"
          />
          <span className="text-xs md:text-base">Profile</span>
        </Link>
      ) : (
        <Link
          to="/login"
          className="flex h-auto w-auto flex-col items-center justify-center text-secondary hover:text-white"
        >
          <MdLogin className="h-7 w-7 md:h-8 md:w-8" />
          <span className="text-xs md:text-base">Sign In</span>
        </Link>
      )}
    </nav>
  );
}

export default Navigation;
