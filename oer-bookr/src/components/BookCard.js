import React from 'react';
// react-redux imports
import { connect } from 'react-redux';
// action imports
import { deleteBook } from '../actions';
// import EditBook from './EditBook';


//material ui imports
import { makeStyles, Card, CardActionArea, 
        CardActions, CardContent, CardMedia, 
        Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
      height: 140,
    },
});



function BookCard(props) {
  console.log(props)
    const classes = useStyles();
    const { image, title, author, publisher, license, description, avg_rating } = props.book;

    const deleteItem = e => {
      e.preventDefault();
      console.log(props.book.id);
      props.dispatch(deleteBook(props.book))
    }; 

    return (
      <Card className={classes.card}>
        <CardActionArea>
        <CardMedia
        className={classes.media}
        image={image}
        title="Book"
      />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h4">
              Author: {author}
              Publisher: {publisher}
              License: {license}
              Average rating: {avg_rating}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <EditBook /> */}
          <Button size="small" color="primary" onClick={deleteItem}>
            Delete
          </Button>
        </CardActions>
      </Card>
    );
}

export default connect(state => {
    return state;
})(BookCard);