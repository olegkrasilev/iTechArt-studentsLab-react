import React, { useState } from 'react';
import { Button, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';

import { editPostsAction } from 'src/redux/action/editPost';

type Properties = {
  id: number;
  title: string;
  formattedPostCreationTime: string;
  post: string;
  deletePostHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Post: React.FC<Properties> = ({ id, title, formattedPostCreationTime, post, deletePostHandler }) => {
  const [initialPost, setInitialPost] = useState<string | null>(post);
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();

  const useStyles = makeStyles({
    button: {
      margin: 10,
    },
    isActive: {
      border: 1,
      borderColor: '#000',
      borderStyle: 'dashed',
    },
  });

  const classes = useStyles();

  const editPostHandler = () => {
    setIsEditable(true);
  };

  const inputPostHandler = (event: React.FormEvent<HTMLSpanElement>) => {
    setInitialPost(event.currentTarget.textContent);
  };

  const savePostHandler = () => {
    setIsEditable(false);
    const sendData = {
      postID: id,
      post: initialPost,
      title,
    };

    dispatch(editPostsAction(sendData));
  };

  return (
    <Grid item key={id} xs={12}>
      <article>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography id="title" gutterBottom variant="h3" component="h6">
                {title}:
              </Typography>
              <Typography gutterBottom variant="h5" component="time">
                created At {formattedPostCreationTime}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                contentEditable={isEditable}
                suppressContentEditableWarning
                onInput={inputPostHandler}
                className={isEditable ? classes.isActive : ''}
              >
                {initialPost}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Button onClick={deletePostHandler} className={classes.button} id={`${id}`} variant="contained" size="large">
            Delete
          </Button>
          <Button onClick={editPostHandler} className={classes.button} variant="contained" size="large">
            Edit
          </Button>
          <Button onClick={savePostHandler} className={classes.button} variant="contained" size="large">
            Save
          </Button>
        </Card>
      </article>
    </Grid>
  );
};

export default Post;
