import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import InputCreateThread from '../components/InputCreateThread';
import { asyncCreateThread } from '../states/threads/action';

function CreateThreadPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCreateThread = ({ title, body, category }) => {
    dispatch(asyncCreateThread({ title, body, category }));
    navigate('/');
  };

  return (
    <section
      id="add-thread-page "
      className="flex h-auto w-full justify-center bg-secondary bg-pattern bg-repeat "
    >
      <Header />
      <div className="body h-[850px] w-5/6 bg-white font-jkt shadow-3xl md:w-3/5">
        <h3 className="mx-10 mt-24 text-xl font-bold md:mx-20 md:mt-32">Create Thread</h3>
        <InputCreateThread createThread={onCreateThread} />
      </div>
      <Navigation />
    </section>
  );
}

export default CreateThreadPage;
