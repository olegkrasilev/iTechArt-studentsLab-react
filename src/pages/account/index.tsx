import { Backdrop, CircularProgress, Container } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyledDiv } from './style';

import { deleteUserPostAction } from 'src/redux/action/deleteUserPost';
import UserPage from 'src/components/userCard';
import { RenderPagination } from 'src/components/pagination';
import { loadUserPostsAction } from 'src/redux/action/loadUserPosts';
import {
  selectCurrentUserPosts,
  selectIsUserLoading,
  selectUserId,
  selectUserFirstName,
  selectUserEmail,
  selectUserLastName,
} from 'src/redux/selector';
import Post from 'src/pages/account/post';

const Account = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const currentUserAllPosts = useSelector(selectCurrentUserPosts);
  const isCurrentUserAllPostsLoading = useSelector(selectIsUserLoading);
  const userEmail = useSelector(selectUserEmail);
  const userFirstName = useSelector(selectUserFirstName);
  const userLastName = useSelector(selectUserLastName);

  useEffect(() => {
    dispatch(loadUserPostsAction(userId));
  }, [dispatch, userId]);

  const deletePostHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const postID = (event.target as HTMLButtonElement).id;

      dispatch(deleteUserPostAction(postID));
    },
    [dispatch],
  );

  const renderCurrentUserAllPosts = currentUserAllPosts.map(item => {
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
  });

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
        <RenderPagination incomingData={currentUserAllPosts} renderData={renderCurrentUserAllPosts} />;
      </StyledDiv>
    </Container>
  );
};

export default Account;
