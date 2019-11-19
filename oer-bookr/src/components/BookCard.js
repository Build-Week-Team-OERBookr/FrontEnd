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

export default function BookCard(props) {
    const classes = useStyles();
    const { title, author, publisher, license, description } = props.book;
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
              <Typography variant="body2" color="textSecondary" component="p">
                <p>{description}</p>
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