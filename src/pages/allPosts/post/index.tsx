import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type Properties = {
  firstName: string;
  lastName: string;
  post: string;
  formattedPostCreationTime: string;
  title: string;
  postID: number;
};
const Post: React.FC<Properties> = ({ firstName, lastName, post, formattedPostCreationTime, postID, title }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`../allPosts/post/${postID}`, { replace: true });
  };

  return (
    <Grid item xs={12}>
      <article>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h6" component="p">
                {title} by {firstName}
                {lastName}
              </Typography>
              <Typography gutterBottom variant="body1" component="p">
                Created at <time>{formattedPostCreationTime}</time>
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {post}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Comment
            </Button>
            <Button onClick={handleNavigate} size="small" color="primary" variant="contained">
              More
            </Button>
          </CardActions>
        </Card>
      </article>
    </Grid>
  );
};

export default Post;
