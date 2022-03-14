import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { StyledDiv } from './style';

import { createPost } from 'src/redux/action/createPost';
import { selectUserId } from 'src/redux/selector';

const CreatePost: React.FC = () => {
  const userID = useSelector(selectUserId);
  const dispatch = useDispatch();
  const createPostSchemaValidation = yup.object({
    title: yup.string().required('Title name is required'),
    post: yup.string().required('Post name is required'),
  });

  const createPostFormik = useFormik({
    initialValues: {
      title: 'New Title',
      post: 'New Post',
    },
    validationSchema: createPostSchemaValidation,
    onSubmit: data => {
      const { post, title } = data;

      dispatch(createPost({ post, title, userID }));
    },
  });

  return (
    <StyledDiv>
      <form onSubmit={createPostFormik.handleSubmit} noValidate autoComplete="false">
        <TextField
          className="title"
          id="title"
          name="title"
          type="text"
          label="title"
          variant="outlined"
          required
          value={createPostFormik.values.title}
          onChange={createPostFormik.handleChange}
          error={createPostFormik.touched.title && Boolean(createPostFormik.errors.title)}
          helperText={createPostFormik.touched.title && createPostFormik.errors.title}
        />
        <TextField
          className="post"
          id="post"
          name="post"
          type="text"
          label="post"
          variant="outlined"
          required
          value={createPostFormik.values.post}
          onChange={createPostFormik.handleChange}
          error={createPostFormik.touched.post && Boolean(createPostFormik.errors.post)}
          helperText={createPostFormik.touched.post && createPostFormik.errors.post}
        />
        <Button className="button" type="submit" variant="contained" color="success" size="large">
          Create
        </Button>
      </form>
    </StyledDiv>
  );
};

export default CreatePost;
