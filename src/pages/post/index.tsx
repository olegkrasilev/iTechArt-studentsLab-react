import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Backdrop, Card, CardActionArea, CardContent, CircularProgress, Typography } from '@mui/material';

import { selectRequestedPost, selectIsPostsLoading } from 'src/redux/selector';
import { requestUserPost } from 'src/redux/action/requestPost';

const Post = () => {
  const { postID } = useParams();
  const dispatch = useDispatch();
  const requestedPost = useSelector(selectRequestedPost);
  const isRequestedPostLoading = useSelector(selectIsPostsLoading);
  const { email, firstName, lastName, post, postCreationTime, title } = requestedPost;

  useEffect(() => {
    if (postID) {
      dispatch(requestUserPost(postID));
    }
  }, [dispatch, postID]);

  const formattedPostCreationTime = new Date(postCreationTime as Date).toDateString();

  if (isRequestedPostLoading) {
    return (
      <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h2" component="p">
            {`${title} by`}
          </Typography>
          <Typography gutterBottom variant="h3" component="p">
            {`${firstName} ${lastName}`}
          </Typography>
          <Typography gutterBottom variant="h4" component="p">
            {`Email: ${email}`}
          </Typography>
          <Typography gutterBottom variant="h4" component="p">
            Created at <time>{formattedPostCreationTime}</time>
          </Typography>
          <Typography variant="h3" color="text.secondary">
            {post}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Post;
