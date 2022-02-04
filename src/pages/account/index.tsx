import {
  Backdrop,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@mui/styles';

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

  const useStyles = makeStyles({
    button: {
      margin: 10,
    },
  });

  const classes = useStyles();

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const deletePostHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const postID = (event.target as HTMLButtonElement).id;

    dispatch(deleteUserPostAction(postID));
  };

  const renderCurrentUserAllPosts = currentUserAllPosts.map(item => {
    const { post, postCreationTime, title, id } = item;
    const formattedPostCreationTime = new Date(postCreationTime).toDateString();

    return (
      <Grid item key={id} xs={12}>
        <article>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  {title}: created At {formattedPostCreationTime}
                </Typography>
                <Typography gutterBottom variant="body1" component="p">
                  {post}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button onClick={deletePostHandler} className={classes.button} id={`${id}`} variant="contained">
              Delete
            </Button>
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
    <Container>
      <StyledDiv>
        <UserPage email={userEmail} firstName={userFirstName} lastName={userLastName} />
        <RenderPagination incomingData={currentUserAllPosts} renderData={renderCurrentUserAllPosts} />;
      </StyledDiv>
    </Container>
  );
};

export default Account;
