import React, { useEffect, useState } from 'react';
import { Backdrop, CircularProgress, Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

import Post from './post';

import { useStyles } from 'src/styles/pagination';
import { loadPostsAction } from 'src/redux/action/posts';
import { selectAllUsersPosts, selectIsPostsLoading, selectTotalPostInDB } from 'src/redux/selector';

const AllPosts: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const page = useParams();
  const [defaultPage, setDefaultPage] = useState(1);
  const allUsersPosts = useSelector(selectAllUsersPosts);
  const isPostsLoading = useSelector(selectIsPostsLoading);
  const totalPostInDB = useSelector(selectTotalPostInDB);
  const postPerPage = 5;
  const paginationButtonsCount = Math.ceil(Number(totalPostInDB) / postPerPage);

  useEffect(() => {
    if (page) {
      dispatch(loadPostsAction(page));
    }
  }, [dispatch, page]);

  const classes = useStyles();

  const handlePaginationClick = (event: React.ChangeEvent<unknown>, paginationPage: number) => {
    navigate(`../allPosts/${paginationPage}`, { replace: true });
    setDefaultPage(paginationPage);
  };

  if (isPostsLoading) {
    return (
      <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <Container>
      {allUsersPosts.length > 0 ? (
        <ul>
          <Grid container spacing={2}>
            {allUsersPosts.map(item => {
              const { firstName, lastName, post, postCreationTime, title, postID } = item;
              const formattedPostCreationTime = new Date(postCreationTime as Date).toDateString();

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
      ) : (
        <h1 className={classes.title}>No Posts were found</h1>
      )}
    </Container>
  );
};

export default AllPosts;
