import React, { useState } from 'react';
// react-redux imports
import { connect } from 'react-redux';
// action imports
import { postBook } from '../actions';
// Material-UI imports
import { Button, TextField, Dialog, 
        DialogActions, DialogContent, 
        DialogContentText, DialogTitle } from '@material-ui/core';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Add Book!
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address here. We will send updates
                occasionally.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }