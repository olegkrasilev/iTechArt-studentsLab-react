import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';

import { StyledCard } from './style';

import profile from 'src/components/userCard/assets/profilePicture.png';

type Properties = {
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  email: string | null | undefined;
};

const UserPage: React.FC<Properties> = ({ firstName, email, lastName }) => {
  // userID, email, lastName, firstName <<<< to server

  const editAccountSchemaValidation = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
  });

  const editAccountFormik = useFormik({
    initialValues: {
      email: `${email}`,
      firstName: `${firstName}`,
      lastName: `${lastName}`,
    },
    validationSchema: editAccountSchemaValidation,
    onSubmit: data => {
      // do nothing
      console.log(data);
    },
  });

  return (
    <StyledCard>
      <img src={profile} alt="" className="avatar" />
      <form onSubmit={editAccountFormik.handleSubmit} className="form__right" noValidate autoComplete="off">
        <TextField
          className="input"
          id="email"
          name="email"
          label="email"
          type="email"
          value={editAccountFormik.values.email}
          onChange={editAccountFormik.handleChange}
          error={editAccountFormik.touched.email && Boolean(editAccountFormik.errors.email)}
          helperText={editAccountFormik.touched.email && editAccountFormik.errors.email}
          variant="outlined"
          required
        />
        <TextField
          className="input"
          id="firstName"
          name="firstName"
          label="First Name"
          type="text"
          value={editAccountFormik.values.firstName}
          onChange={editAccountFormik.handleChange}
          error={editAccountFormik.touched.firstName && Boolean(editAccountFormik.errors.firstName)}
          helperText={editAccountFormik.touched.firstName && editAccountFormik.errors.firstName}
          variant="outlined"
          required
        />

        <TextField
          className="input"
          id="lastName"
          name="lastName"
          type="text"
          label="Last Name"
          value={editAccountFormik.values.lastName}
          onChange={editAccountFormik.handleChange}
          error={editAccountFormik.touched.lastName && Boolean(editAccountFormik.errors.lastName)}
          helperText={editAccountFormik.touched.lastName && editAccountFormik.errors.lastName}
          variant="outlined"
          required
        />
        <Button className="loginBtn button" type="submit" variant="contained" color="success" size="large">
          Edit
        </Button>
      </form>
    </StyledCard>
  );
};

export default UserPage;
