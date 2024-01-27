import React from 'react';
import PropTypes from 'prop-types';
import { FaRegEnvelope, FaKey, FaRegUser } from 'react-icons/fa';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form>
      <label
        className="relative mt-8 block  drop-shadow-[7px_7px_2px_rgba(0,0,0,0.25)]"
        htmlFor="name-register"
      >
        <span className="sr-only">Name</span>
        <span className="absolute inset-y-0 left-6 flex items-center pl-2 text-[#808080]">
          <FaRegUser className="h-6 w-6 " />
        </span>
        <input
          className=" placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500 block h-16 w-[350px] rounded-xl bg-white py-1 pl-20  pr-3 focus:outline-none focus:ring-1 sm:text-sm md:w-[412px]"
          placeholder="Name"
          type="text"
          name="name"
          id="name-register"
          value={name}
          onChange={onNameChange}
        />
      </label>
      <label
        className="relative mt-7 block  drop-shadow-[7px_7px_2px_rgba(0,0,0,0.25)]"
        htmlFor="email-register"
      >
        <span className="sr-only">Email</span>
        <span className="absolute inset-y-0 left-6 flex items-center pl-2 text-[#808080]">
          <FaRegEnvelope className="h-6 w-6 " />
        </span>
        <input
          className=" placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500 block h-16 w-[350px] rounded-xl bg-white py-1 pl-20  pr-3 focus:outline-none focus:ring-1 sm:text-sm md:w-[412px]"
          placeholder="Enter your email"
          type="text"
          name="email"
          id="email-register"
          value={email}
          onChange={onEmailChange}
        />
      </label>
      <label
        className="relative mt-7 block  drop-shadow-[7px_7px_2px_rgba(0,0,0,0.25)]"
        htmlFor="password-register"
      >
        <span className="sr-only">Paswword</span>
        <span className="absolute inset-y-0 left-6 flex items-center pl-2 text-[#808080]">
          <FaKey className="h-6 w-6 " />
        </span>
        <input
          className=" placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500 block h-16 w-[350px] rounded-xl bg-white py-1 pl-20  pr-3 focus:outline-none focus:ring-1 sm:text-sm md:w-[412px]"
          placeholder="Password"
          type="password"
          name="password"
          id="password-register"
          value={password}
          onChange={onPasswordChange}
        />
      </label>
      <button
        type="button"
        onClick={() => register({ name, email, password })}
        className="mt-14 flex h-16 w-[350px] items-center justify-center rounded-xl bg-primary py-6 font-semibold text-white drop-shadow-[7px_7px_2px_rgba(0,0,0,0.25)] hover:bg-[#26538D] hover:font-bold md:w-[412px]"
      >
        <span className="pl-4">Sign Up</span>
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
