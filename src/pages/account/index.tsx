import { Backdrop, CircularProgress, Container, Grid, Pagination } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { StyledDiv, useStyles } from './style';

import { deleteUserPostAction } from 'src/redux/action/deleteUserPost';
import UserPage from 'src/components/userCard';
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
import Post from 'src/pages/account/post';

const Account = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const page = useParams();
  const navigate = useNavigate();
  const [defaultPage, setDefaultPage] = useState(1);
  const currentUserAllPosts = useSelector(selectCurrentUserPosts);
  const isCurrentUserAllPostsLoading = useSelector(selectIsUserLoading);
  const userEmail = useSelector(selectUserEmail);
  const userFirstName = useSelector(selectUserFirstName);
  const userLastName = useSelector(selectUserLastName);
  const totalPostInDB = useSelector(selectUsersTotalPostInDB);
  const postPerPage = 5;
  const paginationButtonsCount = Math.ceil(Number(totalPostInDB) / postPerPage);

  useEffect(() => {
    dispatch(loadUserPostsAction({ userId, page }));
  }, [dispatch, userId, page]);

  const deletePostHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      // TODO FIX type
      const postID = (event.target as HTMLButtonElement).id;

      dispatch(deleteUserPostAction(postID));
    },
    [dispatch],
  );

  const handlePaginationClick = (event: React.ChangeEvent<unknown>, paginationPage: number) => {
    navigate(`../account/${paginationPage}`, { replace: true });
    setDefaultPage(paginationPage);
  };

  const classes = useStyles();

  if (isCurrentUserAllPostsLoading) {
    return (
      <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <Container>
      <StyledDiv>
        <UserPage email={userEmail} firstName={userFirstName} lastName={userLastName} />
        {totalPostInDB === 0 ? (
          <h1 className={classes.title}>No posts were found</h1>
        ) : (
          <ul>
            <Grid container spacing={2}>
              {currentUserAllPosts.map(item => {
                const { post, postCreationTime, title, id } = item;
                const formattedPostCreationTime = new Date(postCreationTime).toDateString();

                return (
                  <Post
                    key={id}
                    id={id}
                    formattedPostCreationTime={formattedPostCreationTime}
                    title={title}
                    post={post}
                    deletePostHandler={deletePostHandler}
                  />
                );
              })}
            </Grid>
            <Pagination
              hidePrevButton
              hideNextButton
              page={defaultPage}
              className={classes.centerPagination}
              count={paginationButtonsCount}
              onChange={handlePaginationClick}
            />
          </ul>
        )}
      </StyledDiv>
    </Container>
  );
};

export default Account;
