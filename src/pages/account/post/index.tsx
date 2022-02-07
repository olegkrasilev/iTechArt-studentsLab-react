/* eslint-disable unicorn/consistent-function-scoping */
import React, { useRef, useState } from 'react';
import { Button, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

type Properties = {
  id: number;
  title: string;
  formattedPostCreationTime: string;
  post: string;
  deletePostHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Post: React.FC<Properties> = ({ id, title, formattedPostCreationTime, post, deletePostHandler }) => {
  const [isEditable, setIsEditable] = useState<boolean | undefined>();
  const postReference = useRef<HTMLSpanElement | null>(null);
  const useStyles = makeStyles({
    button: {
      margin: 10,
    },
  });

  const classes = useStyles();
  const editPostHandler = () => {
    setIsEditable(true);

    if (postReference.current) {
      postReference.current.focus();
      /*
      By default its select parent element,so focus need to be invoked twice.
      */
      setTimeout(() => {
        postReference?.current?.focus();
      }, 0);
    }
  };

  return (
    <Grid item key={id} xs={12}>
      <article>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography id="title" gutterBottom component="h6" variant="h6">
                {title}:
              </Typography>
              <Typography gutterBottom variant="body2" component="time">
                created At {formattedPostCreationTime}
              </Typography>
              <Typography
                ref={postReference}
                gutterBottom
                variant="body1"
                contentEditable={isEditable}
                suppressContentEditableWarning
              >
                {post}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Button onClick={deletePostHandler} className={classes.button} id={`${id}`} variant="contained">
            Delete
          </Button>
          <Button onClick={editPostHandler} className={classes.button} variant="contained">
            Edit
          </Button>
          <Button className={classes.button} variant="contained">
            Save
          </Button>
        </Card>
      </article>
    </Grid>
  );
};

export default Post;
