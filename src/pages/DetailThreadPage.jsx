import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import CommentCard from '../components/CommentCard';
import CreateComment from '../components/CreateComment';
import CommentReminder from '../components/CommentReminder';
import DetailThreadCard from '../components/DetailThreadCard';
import { asyncReceiveDetailThread } from '../states/detailThread/action';

function DetailThreadPage() {
  const { detailThread, authUser } = useSelector((states) => states);
  const { threadId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveDetailThread(threadId));
  }, [threadId, dispatch]);

  if (!detailThread || !detailThread.comments) {
    return null;
  }

  return (
    <section
      id="home-page "
      className="flex h-auto w-full justify-center bg-secondary bg-pattern bg-repeat "
    >
      <Header />
      <div className="body h-auto w-5/6 bg-white pb-36 font-jkt shadow-3xl md:w-3/5">
        <h3 className="mx-10 mt-24 text-xl font-bold md:mx-20 md:mt-32">Detail Thread</h3>
        <div className="thread mx-10 mt-7 md:mx-20">
          <DetailThreadCard thread={detailThread} />
          <div>
            <h4 className="mb-3 text-base font-semibold">
              {`Comment (${detailThread.comments.length})`}
            </h4>
            <div className="mt-5">
              {detailThread.comments.map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
              ))}
            </div>
          </div>
          <div>{authUser ? <CreateComment /> : <CommentReminder />}</div>
        </div>
      </div>
      <Navigation />
    </section>
  );
}

export default DetailThreadPage;
