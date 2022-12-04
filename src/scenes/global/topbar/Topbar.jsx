import {AppBar, Badge, Box, IconButton, Toolbar, Typography} from "@mui/material";
import StoreIcon from '@mui/icons-material/Store';
import React from  'react'
import {ShoppingCart} from "@mui/icons-material";

import useStyles  from './styles';


const Topbar = () => {
    const classes = useStyles();
        return (
            <Box>
                <AppBar position="fixed" className={classes.appBar}  color="inherit">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}  color="inherit">
                            <StoreIcon/>
                            PASAL
                        </Typography>
                        <IconButton aria-label="Show cart items"  color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        );
}

export default Topbar;