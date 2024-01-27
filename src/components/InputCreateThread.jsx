import React from 'react';
import PropTypes from 'prop-types';
import { BiSend } from 'react-icons/bi';
import useFlexibleInput from '../hooks/useFlexibleInput';

function InputCreateThread({ createThread }) {
  const [title, onTitleChange] = useFlexibleInput('');
  const [body, onBodyChange] = useFlexibleInput('');
  const [category, onCategoryChange] = useFlexibleInput('');
  const countCategory = category.length === 0 ? '0' : category.split(' ').length;

  const inputTitleHandler = (event) => {
    if (event.target.value.length > 100) return;
    onTitleChange(event);
  };

  const inputBodyHandler = (event) => {
    if (event.target.value.length > 500) return;
    onBodyChange(event);
  };

  const inputCategoryHandler = (event) => {
    const checkCategory = /[^\sa-zA-Z0-9]/;
    const checkLength = event.target.value.split(' ');

    if (!checkCategory.test(event.target.value) && checkLength.length <= 3) {
      onCategoryChange(event);
    }
  };

  const onSubmitHandler = () => {
    createThread({ title, body, category });
  };

  return (
    <form
      className="input-create-thread mx-10 mt-7 h-auto w-auto bg-secondary px-5 py-5 shadow-card md:mx-20 md:px-10 md:py-7"
      onSubmit={onSubmitHandler}
    >
      <div className="input-title mb-3 flex ">
        <input
          type="text"
          placeholder="Title"
          className=" w-5/6 bg-secondary text-base font-bold outline-none md:text-xl"
          value={title}
          onChange={inputTitleHandler}
          required
        />
        <span className="ml-4 mr-3 w-1/6  text-end text-xs">{`${title.length}/100`}</span>
      </div>
      <div className="input-content relative mb-3  flex">
        <textarea
          name="body"
          className="h-80 w-full resize-none rounded-md border-2 border-primary bg-secondary py-1 pl-3 pr-14 text-sm outline-none md:pr-20 md:text-base"
          value={body}
          onChange={inputBodyHandler}
          required
        />
        <span className="absolute right-3 top-2 text-xs">{`${body.length}/500`}</span>
      </div>
      <div className="input-tag mb-3 flex ">
        <input
          type="text"
          placeholder="Categories"
          className=" w-5/6 bg-secondary text-sm font-medium outline-none"
          value={category}
          onChange={inputCategoryHandler}
        />
        <span className="ml-4 mr-3 w-1/6  text-end text-xs">{`${countCategory}/3`}</span>
      </div>
      <button
        type="submit"
        className="mt-3 flex w-full items-center justify-center rounded-md bg-primary py-1.5 font-semibold text-secondary hover:bg-oldPrimary hover:font-bold hover:text-white"
      >
        <BiSend className="h-5 w-5" />
        <span className="ml-2">Send</span>
      </button>
    </form>
  );
}

InputCreateThread.propTypes = {
  createThread: PropTypes.func.isRequired,
};

export default InputCreateThread;
