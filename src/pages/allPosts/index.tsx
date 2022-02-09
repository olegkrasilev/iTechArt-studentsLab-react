import React, { useEffect } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import Post from './post';

import { loadPostsAction } from 'src/redux/action/posts';
import { RenderPagination } from 'src/components/pagination';
import { selectAllUsersPosts, selectIsPostsLoading } from 'src/redux/selector';

const AllPosts: React.FC = () => {
  const dispatch = useDispatch();
  const allUsersPosts = useSelector(selectAllUsersPosts);
  const isPostsLoading = useSelector(selectIsPostsLoading);

  useEffect(() => {
    dispatch(loadPostsAction());
  }, [dispatch]);

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

  return <RenderPagination incomingData={allUsersPosts} renderData={renderAllUsersPosts} />;
};

export default AllPosts;
