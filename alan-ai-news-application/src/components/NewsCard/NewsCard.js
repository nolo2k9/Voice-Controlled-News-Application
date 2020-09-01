import React from 'react';
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import useStyles from './style.js';
/*
De-structure properties coming from article
*/
const NewsCard = ({article: {description, publishedAt, source, title, url, urlToImage}, i}) => {
    const classes = useStyles();
    
    return (
        <Card>
            <CardActionArea>
                <CardMedia className ={classes.media}image={urlToImage ||'https://pixabay.com/illustrations/news-headlines-newsletter-636978/'}/>
                <div>
    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography gutterBottom varient="h5">{title}</Typography>
                <CardContent>
                    <Typography varient="body2" color="textSecondary" component ="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="smaill" color="primary">Learn More</Button>
                <Typography varient="h5" color="textSecondary">{i + 1}</Typography>

               
            </CardActions>
        </Card>
    )
}

export default NewsCard;
