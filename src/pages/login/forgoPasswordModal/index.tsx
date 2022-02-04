import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type Properties = {
  closeIsUserForgotPasswordModal: () => void;
  isForgotUserPasswordPasswordModalOpen: boolean;
};

export const ForgotPasswordModal: React.FC<Properties> = ({
  closeIsUserForgotPasswordModal,
  isForgotUserPasswordPasswordModalOpen,
}: Properties) => (
  <Dialog open={isForgotUserPasswordPasswordModalOpen} onClose={closeIsUserForgotPasswordModal}>
    <DialogTitle>Forgot your password?</DialogTitle>
    <DialogContent>
      <DialogContentText>Please enter your email address here. We will send reset token.</DialogContentText>
      <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth variant="standard" />
    </DialogContent>
    <DialogActions>
      <Button onClick={closeIsUserForgotPasswordModal}>Cancel</Button>
      <Button onClick={closeIsUserForgotPasswordModal}>Done</Button>
    </DialogActions>
  </Dialog>
);
