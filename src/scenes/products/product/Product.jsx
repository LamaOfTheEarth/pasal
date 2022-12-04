import React from 'react';
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import {AddShoppingCart} from "@mui/icons-material";

import useStyles from './styles'


const Product = () => {
    const imgUrl = 'https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg'
    const classes =  useStyles();
    return (
        <Card className={classes.root} >
            <CardMedia image={imgUrl} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h2" gutterBottom>
                   Apple Mac Book
                </Typography>
                <Typography  variant="h5" gutterBottom>
                    £ 1000.00
                </Typography>
                <Typography  variant="body2">
                    The most powerful MacBook Pro ever is here.
                    With the blazing-fast M1 Pro or M1 Max chip
                    — the first Apple silicon designed for pros —
                    you get groundbreaking performance and amazing
                    battery life. Add to that a stunning Liquid
                    Retina XDR display, the best camera and audio ever
                    in a Mac notebook, and all the ports you need.
                    The first notebook of its kind, this MacBook Pro is a beast.
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton araia-lavel="Add to Cart">
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Product;