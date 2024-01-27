import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import peoplesimg from '../assets/image/home.png';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));

    navigate('/');
  };
  return (
    <section id="login-page" className="flex h-screen font-jkt">
      <div className="container h-screen w-2/4 bg-primary max-[700px]:hidden">
        <img src={peoplesimg} alt="Peoples" className="px-[65px] pt-[128px]" />
        <p className=" mt-8 px-14 text-center text-xl font-bold text-secondary">
          &quot;Through discussion, we unravel complexities, solving problems together in the
          forum.&quot;
        </p>
      </div>
      <div className="container relative h-screen w-full bg-secondary pl-4 md:w-2/4 md:pl-48">
        <p className="absolute mt-8 text-sm md:left-2/4">
          Don&apos;t have an account yet?&nbsp;
          <Link to="/register" className="font-semibold hover:font-bold">
            Sign Up now
          </Link>
        </p>
        <h1 className="mt-52 font-ysv  text-5xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          MindMingle
        </h1>
        <p className="mt-4 text-xl font-bold ">Welcome back you&apos;ve been missed!</p>
        <LoginInput login={onLogin} />
        <p className="mt-7 text-sm">
          Back to&nbsp;
          <Link to="/" className="font-semibold hover:font-bold">
            Homepage
          </Link>
        </p>
      </div>
    </section>
  );
}

export default LoginPage;
