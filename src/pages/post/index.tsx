import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { requestUserPost } from 'src/redux/action/requestPost';

const Post = () => {
  const dispatch = useDispatch();
  const { postID } = useParams();

  useEffect(() => {
    if (postID) {
      dispatch(requestUserPost(postID));
    }
  }, [dispatch, postID]);

  return <div>{postID}</div>;
};

export default Post;
