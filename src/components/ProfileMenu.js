import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Typography, Paper, Grid, Avatar, Divider} from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import { makeStyles } from '@material-ui/core/styles';
import AssessmentIcon from '@material-ui/icons/Assessment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';

const ProfileMenu = () => {

    const useStyles = makeStyles((theme) => ({
        paper: {
            padding: 45.5,
            alignItems: "center",
            display: "flex",
            flexFlow: "column"
        },
        button: {
            width: "100%",
            fontSize: "18px",
            color: "white",
            border: '1px solid black',
            borderRadius: 5
        },
        avatar: {
            width: "150px",
            height: "150px",
            margin: "5px",
        },
        link: {
            textDecoration: "none",
        },
        divider: {
            margin: "5px 0 10px 0"
        }
    }));

    const classes = useStyles();

    return (
        <>
            <Paper elevation={3} className={classes.paper}>
                <Grid container spacing={2} direction="column">
                    <Grid item xs align="center">
                        <Avatar alt="pic" variant="circular" className={classes.avatar}/>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h4" color="primary" align="center">Profile Menu</Typography>
                    </Grid>
                    <Grid item xs>
                        <Divider orientation="horizontal" className={classes.divider}/>
                    </Grid>
                    <Grid item xs>
                        <Link to="/profile/favorites" className={classes.link}>
                            <Button variant="contained" size="large" className={classes.button + ' lower-case'}
                                    startIcon={<PersonIcon fontSize="large"/>}>Profile</Button>
                        </Link>
                    </Grid>
                    <Grid item xs>
                        <Link to="/profile/favorites" className={classes.link}>
                            <Button variant="contained" size="large" className={classes.button + ' lower-case'}
                                    startIcon={<FavoriteIcon fontSize="large"/>}>Saved</Button>
                        </Link>
                    </Grid>
                    <Grid item xs>
                        <Link to="/profile/applications" className={classes.link}>
                            <Button variant="contained" size="large" className={classes.button  + ' lower-case'}
                                    startIcon={<DescriptionIcon fontSize="large"/>}>Orders</Button>
                        </Link>
                    </Grid>
                    <Grid item xs>
                        <Link to="/profile/assessments" className={classes.link}>
                            <Button variant="contained" size="large" className={classes.button  + ' lower-case'}
                                    startIcon={<AssessmentIcon fontSize="large"/>}>Posts</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default ProfileMenu
