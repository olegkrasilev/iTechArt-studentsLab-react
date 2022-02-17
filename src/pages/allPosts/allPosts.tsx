import React from 'react';
import { Container, Grid, Pagination } from '@mui/material';

import Post from './post';

import { Post as PostT } from 'src/types/posts';
import { useStyles } from 'src/styles/pagination';

type Properties = {
  allUsersPosts: PostT[];
  defaultPage: number;
  paginationButtonsCount: number;
  handlePaginationClick: (event: React.ChangeEvent<unknown>, paginationPage: number) => void;
};

const AllPosts: React.FC<Properties> = ({
  allUsersPosts,
  defaultPage,
  paginationButtonsCount,
  handlePaginationClick,
}) => {
  const classes = useStyles();

  return (
    <Container>
      <ul>
        <Grid container spacing={2}>
          {allUsersPosts.map(item => {
            const { firstName, lastName, post, postCreationTime, title, postID } = item;
            const formattedPostCreationTime = new Date(postCreationTime).toDateString();

            return (
              <Post
                key={postID}
                firstName={firstName}
                lastName={lastName}
                formattedPostCreationTime={formattedPostCreationTime}
                post={post}
                title={title}
                postID={postID}
              />
            );
          })}
        </Grid>
        <Pagination
          page={defaultPage}
          hidePrevButton
          hideNextButton
          className={classes.centerPagination}
          count={paginationButtonsCount}
          onChange={handlePaginationClick}
        />
      </ul>
    </Container>
  );
};

export default AllPosts;
