import React from 'react';
// Material-UI imports
import { makeStyles, Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
      },
    iconButton: {
    padding: 10,
    }
}));

function SearchBar() {
    const classes = useStyles();
  
    return (
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search TextBooks"
          inputProps={{ 'aria-label': 'search textbooks' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }

  export default SearchBar