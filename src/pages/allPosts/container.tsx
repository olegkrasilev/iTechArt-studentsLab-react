import React, { useCallback, useEffect, useState } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import AllPosts from './allPosts';

import { loadPostsAction } from 'src/redux/action/posts';
import { selectAllUsersPosts, selectIsPostsLoading, selectTotalPostInDB } from 'src/redux/selector';

const AllPostsContainer: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const page = useParams();
  const [defaultPage, setDefaultPage] = useState(1);
  const allUsersPosts = useSelector(selectAllUsersPosts);
  const isPostsLoading = useSelector(selectIsPostsLoading);
  const totalPostInDB = useSelector(selectTotalPostInDB) ?? 0;
  const postPerPage = 5;
  const paginationButtonsCount = Math.ceil(totalPostInDB / postPerPage);

  useEffect(() => {
    if (page) {
      dispatch(loadPostsAction(page));
    }
  }, [dispatch, page]);

  const handlePaginationClick = useCallback(
    (event: React.ChangeEvent<unknown>, paginationPage: number) => {
      navigate(`../allPosts/${paginationPage}`, { replace: true });
      setDefaultPage(paginationPage);
    },
    [navigate],
  );

  if (isPostsLoading) {
    return (
      <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  if (allUsersPosts.length === 0) {
    return <h1>No posts were found...</h1>;
  }

  return (
    <AllPosts
      allUsersPosts={allUsersPosts}
      defaultPage={defaultPage}
      paginationButtonsCount={paginationButtonsCount}
      handlePaginationClick={handlePaginationClick}
    />
  );
};

export default AllPostsContainer;
