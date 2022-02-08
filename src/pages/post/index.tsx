import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { postID } = useParams();

  useEffect(() => {
    // Dispatch here
  }, []);

  return <div>{postID}</div>;
};

export default Post;
