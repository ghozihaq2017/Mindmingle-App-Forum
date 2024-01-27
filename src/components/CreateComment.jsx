import React from 'react';
import { useDispatch } from 'react-redux';
import { BiSend } from 'react-icons/bi';
import { asyncCreateComment } from '../states/detailThread/action';
import useFlexibleInput from '../hooks/useFlexibleInput';

function CreateComment() {
  const dispatch = useDispatch();
  const [content, onContentChange] = useFlexibleInput();

  const inputContentHandler = (event) => {
    onContentChange(event);
  };

  const onCreateComment = (e) => {
    dispatch(asyncCreateComment(content));
    onContentChange('');
    e.preventDefault();
  };

  return (
    <form onSubmit={onCreateComment}>
      <label htmlFor="comment-thread">
        <h4 className="mb-3 text-base font-semibold">Create a comment</h4>
        <textarea
          name="comment-thread"
          id="comment-thread"
          className="h-24 w-full resize-none rounded-lg border-2 border-primary bg-white p-3 text-sm leading-5 outline-none"
          placeholder="Comment..."
          value={content}
          onChange={inputContentHandler}
        />
      </label>
      <button
        type="submit"
        className="mt-3 flex w-full items-center justify-center rounded-md bg-primary py-2 text-white hover:bg-oldPrimary hover:text-white"
      >
        <BiSend className="mr-2 text-base" />
        <span className="text-base font-semibold">Send</span>
      </button>
    </form>
  );
}

export default CreateComment;
