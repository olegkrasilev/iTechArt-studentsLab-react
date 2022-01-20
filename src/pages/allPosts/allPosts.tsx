/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';
import Pagination from '@mui/material/Pagination';

import { mockData } from 'src/data/post';
import { Posts } from 'src/types';

export const AllPosts = () => {
  const [posts, setPosts] = useState<Posts[]>(mockData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPost] = useState(5);

  // Logic for displaying posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const hey = (event.target as HTMLButtonElement).textContent;

    if (hey) {
      setCurrentPage(+hey);
    }
  };

  const renderPosts = currentPost.map(item => {
    const { id, post, postCreationTime, title, user } = item;

    return (
      <Grid item key={id} xs>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {title} by {user}
              </Typography>
              <Typography gutterBottom variant="body1" component="div">
                Created at <time>{postCreationTime}</time>
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
          </CardActions>
        </Card>
      </Grid>
    );
  });

  // Logic for displaying posts number
  const pageNumbers = [];
  for (let index = 0; index < Math.ceil(posts.length / postsPerPage); index++) {
    // Avoid number zero
    pageNumbers.push(index + 1);
  }

  return (
    <Container>
      <ul>
        <Grid container spacing={2}>
          {renderPosts}
        </Grid>
      </ul>
      <Pagination
        className="pagination"
        onClick={paginationClick}
        count={pageNumbers.length}
        sx={{
          marginTop: 2,
          marginBottom: 2,
          display: 'flex',
          justifyContent: 'center',
        }}
      />
    </Container>
  );
};
