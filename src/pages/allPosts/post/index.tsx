import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

type Properties = {
  firstName: string | null;
  lastName: string | null;
  post: string | null;
  formattedPostCreationTime: string | null;
  title: string | null;
  postID: number | null;
};
const Post: React.FC<Properties> = ({ firstName, lastName, post, formattedPostCreationTime, postID, title }) => (
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
          <Link to={`post/${postID}`}>More</Link>
        </CardActions>
      </Card>
    </article>
  </Grid>
);

export default Post;
