import { useLocation, useHistory } from 'react-router-dom';

function useSearchURL(key) {
  const location = useLocation();
  const history = useHistory();

  function setKeyword(newKeyword) {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(key, newKeyword);

    history.push({
      search: `?${searchParams.toString()}`,
    });
  }

  return [new URLSearchParams(location.search).get(key) || '', setKeyword];
}

export default useSearchURL;
