import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Backdrop, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import Account from './account';

import { deleteUserPostAction } from 'src/redux/action/deleteUserPost';
import { loadUserPostsAction } from 'src/redux/action/loadUserPosts';
import {
  selectCurrentUserPosts,
  selectIsUserLoading,
  selectUserId,
  selectUserFirstName,
  selectUserEmail,
  selectUserLastName,
  selectUsersTotalPostInDB,
} from 'src/redux/selector';

type Properties = {
  userId: number | null;
};

const AccountContainer: React.FC<Properties> = ({ userId }) => {
  const dispatch = useDispatch();
  const page = useParams();
  const navigate = useNavigate();
  const [defaultPage, setDefaultPage] = useState(1);
  const currentUserAllPosts = useSelector(selectCurrentUserPosts);
  const isCurrentUserAllPostsLoading = useSelector(selectIsUserLoading);
  const userEmail = useSelector(selectUserEmail);
  const userFirstName = useSelector(selectUserFirstName);
  const userLastName = useSelector(selectUserLastName);
  const totalPostInDB = useSelector(selectUsersTotalPostInDB) ?? 0;
  const postPerPage = 5;
  const paginationButtonsCount = Math.ceil(totalPostInDB / postPerPage);

  useEffect(() => {
    dispatch(loadUserPostsAction({ userId, page }));
  }, [dispatch, userId, page]);

  const deletePostHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const postID = (event.target as HTMLButtonElement).id;

      dispatch(deleteUserPostAction(postID));
    },
    [dispatch],
  );

  const handlePaginationClick = useCallback(
    (event: React.ChangeEvent<unknown>, paginationPage: number) => {
      navigate(`../account/${paginationPage}`, { replace: true });
      setDefaultPage(paginationPage);
    },
    [navigate],
  );

  if (isCurrentUserAllPostsLoading) {
    return (
      <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  if (!(userEmail && userFirstName && userLastName)) {
    return <h1>Something went wrong...</h1>;
  }

  if (!totalPostInDB) {
    return <h1>No posts were found...</h1>;
  }

  return (
    <Account
      userEmail={userEmail}
      userFirstName={userFirstName}
      userLastName={userLastName}
      currentUserAllPosts={currentUserAllPosts}
      defaultPage={defaultPage}
      deletePostHandler={deletePostHandler}
      handlePaginationClick={handlePaginationClick}
      paginationButtonsCount={paginationButtonsCount}
    />
  );
};

export default AccountContainer;
