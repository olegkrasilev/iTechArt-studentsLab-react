import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@mui/styles';

import { mockData } from 'src/data/post';
import { Posts } from 'src/types';
import { RenderPagination } from 'src/components/pagination';

type Properties = {
  currentData: Posts[];
};

export const AllPosts: React.FC<Properties> = ({ currentData }) => {
  const renderPosts = currentData.map(item => {
    const { id, post, postCreationTime, title, user } = item;

    return (
      <Grid item key={id} xs={12}>
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

  return <RenderPagination incomingData={mockData} renderData={renderPosts} />;
};
