import { Container, Grid, Pagination } from '@mui/material';
import React from 'react';

import { StyledDiv } from './style';

import { useStyles } from 'src/styles/pagination';
import UserPage from 'src/components/userCard';
import Post from 'src/pages/account/post';

type Properties = {
  userEmail: string;
  userFirstName: string;
  userLastName: string;
  currentUserAllPosts: {
    title: string;
    post: string;
    postCreationTime: Date;
    id: number;
  }[];
  defaultPage: number;
  paginationButtonsCount: number;
  deletePostHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handlePaginationClick: (event: React.ChangeEvent<unknown>, paginationPage: number) => void;
};

const Account: React.FC<Properties> = ({
  userEmail,
  userFirstName,
  userLastName,
  currentUserAllPosts,
  defaultPage,
  paginationButtonsCount,
  deletePostHandler,
  handlePaginationClick,
}) => {
  const classes = useStyles();

  return (
    <Container>
      <StyledDiv>
        <UserPage email={userEmail} firstName={userFirstName} lastName={userLastName} />

        <ul>
          <Grid container spacing={2}>
            {currentUserAllPosts.map(item => {
              const { post, postCreationTime, title, id } = item;
              const formattedPostCreationTime = new Date(postCreationTime).toDateString();

              return (
                <Post
                  key={id}
                  id={id}
                  formattedPostCreationTime={formattedPostCreationTime}
                  title={title}
                  post={post}
                  deletePostHandler={deletePostHandler}
                />
              );
            })}
          </Grid>
          <Pagination
            hidePrevButton
            hideNextButton
            page={defaultPage}
            className={classes.centerPagination}
            count={paginationButtonsCount}
            onChange={handlePaginationClick}
            size="large"
          />
        </ul>
      </StyledDiv>
    </Container>
  );
};

export default Account;
