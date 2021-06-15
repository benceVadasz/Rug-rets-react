import React, {useEffect, useState} from 'react';
import {Typography, Paper, Grid} from '@material-ui/core';
import {useTheme} from '@material-ui/core/styles';
import {useMediaQuery} from '@material-ui/core';

const classes = {
    paper: {
        padding: "20px",
        margin: "20px",
        alignItems: "center",
        background: "#eceef7",
        height: "100%",
        marginBottom: 77
    },
    favBox: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-around",
        background: "#eceef7",
    },
    load: {position: 'fixed', top: "50%", left: "60%", transform: "translate(-50%, -50%)"},
    mobileLoad: {position: 'fixed', top: "50%", left: "50%", transform: "translate(-50%, -50%)"},
    label: {
        marginBottom: 50
    }
}


const SavedDesigns = (props) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    useEffect(() => {
    }, []);

    // if (loading)
    //     return (
    //         // <div style={!isMobile ? classes.load : classes.mobileLoad}>
    //         //     <Loading/>
    //         // </div>
    //     );

    return (
        <Paper elevation={3} style={classes.paper}>
            <Typography className={!isMobile ? classes.label : ''} variant={isMobile ? "h4" : "h2"} color="primary" align="center">Favorites</Typography>
            <Grid className={classes.favBox} container spacing={3} direction="row">
                <h1>Saved</h1>
            </Grid>
        </Paper>
    )
}

export default SavedDesigns;
