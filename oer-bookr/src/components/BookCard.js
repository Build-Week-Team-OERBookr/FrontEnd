import React from 'react';
// react-redux imports
import { connect } from 'react-redux';
// action imports
import deleteBook from '../actions';


//material ui imports
import { makeStyles, Card, CardActionArea, 
        CardActions, CardContent, 
        Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    }
});



function BookCard(props) {
    const classes = useStyles();
    const { title, author, publisher, license } = props.book;
    return (
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <h2>{title}</h2>
              </Typography>
              <Typography gutterBottom variant="h5" component="h4">
                <h4>{author}</h4>
                <h4>{publisher}</h4>
                <h4>{license}</h4>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Edit
            </Button>
            <Button size="small" color="primary" onClick={() => deleteBook(props.book.id)}>
              Delete
            </Button>
          </CardActions>
        </Card>
    );
}

export default connect(state => {
    return state;
})(BookCard);