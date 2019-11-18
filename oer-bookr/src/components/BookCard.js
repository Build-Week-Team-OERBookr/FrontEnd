import React, { useEffect } from 'react';
// react-redux imports
import { connect } from 'react-redux';


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

export default function BookCard() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              src={book.image}
              title=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <h2>{book.title}</h2>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <p>{book.description}</p>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Edit
            </Button>
            <Button size="small" color="primary">
              Delete
            </Button>
          </CardActions>
        </Card>
    );
}

export default connect(state => {
    return state;
})(BookCard);