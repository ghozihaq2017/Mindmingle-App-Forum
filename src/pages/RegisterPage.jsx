import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import peoplesimg from '../assets/image/home.png';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/login');
  };

  return (
    <section id="register-page" className="flex h-screen font-jkt">
      <div className="container h-screen w-2/4 bg-primary max-[700px]:hidden">
        <img src={peoplesimg} alt="Peoples" className="px-[65px] pt-[128px]" />
        <p className=" mt-8 px-14 text-center text-xl font-bold text-secondary">
          &ldquo;Through discussion, we unravel complexities, solving problems together in the
          forum.&rdquo;
        </p>
      </div>
      <div className="container relative h-screen w-full bg-secondary pl-4 md:w-2/4 md:pl-48">
        <p className="absolute mt-8 text-sm md:left-2/4">
          Already have an account?&nbsp;
          <Link to="/login" className="font-semibold hover:font-bold">
            Sign In
          </Link>
        </p>
        <h2 className="mt-32 font-jkt text-5xl  font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          Register
        </h2>
        <p className="mt-4 text-xl font-bold ">Data will be deleted periodically</p>
        <RegisterInput register={onRegister} />
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

export default RegisterPage;
