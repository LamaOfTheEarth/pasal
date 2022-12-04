import React from 'react';
import Product from "./product/Product";
import {Grid} from "@mui/material";

import useStyles from './styles'

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justifyContent="center" space={4}>
                <Grid lg={4}>
                    <Product />
                </Grid>
            </Grid>
        </main>
    );
};

export default Products;