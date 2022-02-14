import React, { useEffect, useState } from 'react';
import { Backdrop, CircularProgress, Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Params, useNavigate, useParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@mui/styles';

import Post from './post';

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

  const useStyles = makeStyles({
    centerPagination: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 20,
      marginBottom: 20,
    },
    title: {
      textAlign: 'center',
      fontSize: 40,
    },
  });

  const classes = useStyles();

  const handlePaginationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const paginationButtonNumber = (event.target as HTMLButtonElement).textContent;

    if (paginationButtonNumber) {
      navigate(`../allPosts/${paginationButtonNumber}`, { replace: true });
      setDefaultPage(+paginationButtonNumber);
    }
  };

  const renderAllUsersPosts = allUsersPosts.map(item => {
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
  });

  if (isPostsLoading) {
    return (
      <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <Container>
      {allUsersPosts.length === 0 ? (
        <h1 className={classes.title}>No Posts were found</h1>
      ) : (
        <ul>
          <Grid container spacing={2}>
            {renderAllUsersPosts}
          </Grid>
          <Pagination
            page={defaultPage}
            hidePrevButton
            hideNextButton
            className={classes.centerPagination}
            count={paginationButtonsCount}
            onClick={handlePaginationClick}
          />
        </ul>
      )}
    </Container>
  );
};

export default AllPosts;
