import React from 'react';

function CommentReminder() {
  return (
    <div>
      <p className="text-base font-normal text-black ">
        Please&nbsp;
        <a href="/login" className="font-semibold underline hover:text-primary">
          login
        </a>
        &nbsp;or&nbsp;
        <a href="/register" className="font-semibold underline hover:text-primary">
          register
        </a>
        &nbsp;before create a comment
      </p>
    </div>
  );
}

export default CommentReminder;
