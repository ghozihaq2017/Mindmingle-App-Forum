import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section
      id="add-thread-page "
      className="flex h-auto w-full justify-center bg-secondary bg-pattern bg-repeat "
    >
      <div className="body flex h-screen w-5/6 flex-col items-center justify-center bg-primary font-jkt shadow-3xl md:w-3/5">
        <h3 className=" mb-5 text-6xl font-extrabold text-secondary">
          <span className="sr-only">Error</span>
          404 Not Found
        </h3>
        <p className="mb-10 text-xl font-semibold">Sorry, we couldn&apos;t find this page.</p>
        <Link
          to="/"
          className="cursor-pointer bg-secondary px-5 py-1 font-bold hover:bg-oldPrimary hover:text-secondary"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
