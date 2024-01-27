import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import PopularCategory from '../components/PopularCategory';
import ThreadsList from '../components/ThreadsList';
import Navigation from '../components/Navigation';
import { asyncReceiveUsersAndThreads } from '../states/shared/action';

function HomePage() {
  const { threads } = useSelector((states) => states);

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const [searchKeyword, setSearchKeyword] = useState(keyword || '');
  const filteredThreads = threads.filter((thread) => thread.category.includes(keyword));

  const onClickCategory = (ctg) => {
    if (keyword === ctg) setSearchParams('');
    else setSearchParams({ keyword: ctg });
  };

  const onSearchKeywordChange = ({ target }) => {
    setSearchKeyword(target.value);
    setSearchParams({ keyword: target.value });
  };

  useEffect(() => {
    dispatch(asyncReceiveUsersAndThreads());
  }, []);

  return (
    <section
      id="home-page "
      className="flex h-auto w-full justify-center bg-secondary bg-pattern bg-repeat "
    >
      <Header onKeywordChange={onSearchKeywordChange} keyword={searchKeyword} searchInput />
      <div className="body h-auto min-h-screen w-5/6 bg-white pb-28 font-jkt shadow-3xl md:w-3/5">
        <PopularCategory onClickCategory={onClickCategory} keyword={keyword} />
        <ThreadsList threads={keyword ? filteredThreads : threads} />
      </div>
      <Navigation />
    </section>
  );
}

export default HomePage;
