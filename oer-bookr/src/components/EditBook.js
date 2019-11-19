import React, { useState } from 'react';
// react-redux imports
import { connect } from 'react-redux';
// action imports
import { postBook } from '../actions';
// Material-UI imports
import { Button, TextField, Dialog, 
        DialogActions, DialogContent, 
        DialogContentText, DialogTitle } from '@material-ui/core';


// Adds a new book to the book list
function EditBook(props) {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({
        title: '',
        author: '',
        publisher: '',
        license: ''
    })
    
    const handleClickOpen = e => {
        setOpen(true);
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
    
    const handleClose = e => {
        e.preventDefault();
        props.dispatch(postBook(values));
        setOpen(false);
    };
    return (
        <div>
          <Button size="small" color="primary" onClick={handleClickOpen}>
            Edit Book!
          </Button>
          <Dialog autocomplete='off' open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add a Textbook!</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To add a recommended textbook, please enter all required information below. Thank you for your contribution!
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                name="title"
                label="Book Title"
                onChange={handleClickOpen}
                type="text"
                fullWidth
                required
              />
              <TextField
                autoFocus
                margin="dense"
                id="author"
                name="author"
                label="Author"
                onChange={handleClickOpen}
                type="text"
                fullWidth
                required
              />
              <TextField
                autoFocus
                margin="dense"
                id="publisher"
                name="publisher"
                label="Publisher"
                onChange={handleClickOpen}
                type="text"
                fullWidth
                required
              />
              <TextField
                autoFocus
                margin="dense"
                id="license"
                name="license"
                label="license"
                onChange={handleClickOpen}
                type="text"
                fullWidth
                required
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)} color="primary">
                Cancel
              </Button>
              <Button type="submit" onClick={handleClose} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }

export default connect(state => {
    return state;
})(EditBook);