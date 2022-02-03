import { Backdrop, Card, CardActionArea, CardContent, CircularProgress, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserPage from '../user';

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

  const renderCurrentUserAllPosts = currentUserAllPosts.map(item => {
    const { post, postCreationTime, title, id } = item;
    const formattedPostCreationTime = new Date(postCreationTime).toDateString();

    return (
      <Grid item key={id} xs={12}>
        <article>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {title}: created At {formattedPostCreationTime}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  {post}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </article>
      </Grid>
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
    <>
      <UserPage email={userEmail} firstName={userFirstName} lastName={userLastName} />
      <RenderPagination incomingData={currentUserAllPosts} renderData={renderCurrentUserAllPosts} />;
    </>
  );
};

export default Account;
