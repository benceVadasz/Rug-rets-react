import React from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import ProfileMenu from '../components/profile/ProfileMenu';
import SavedDesigns from "../components/profile/SavedDesigns";
import Orders from "../components/profile/Orders";
import {Route} from "react-router-dom";
import ProfilePersonalInfo from "../components/profile/ProfilePersonalInfo";
import {profileStyles} from "../styles/styles";

const Profile = () => {
        const classes = profileStyles();
        return (
            <div className={classes.bg}>
                <Typography className={`${classes.title} lower-case`} variant="h4" color="primary" align="center">MY
                    ACCOUNT</Typography>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3} direction="row">
                        <Grid item xs={3}>
                            <ProfileMenu/>
                        </Grid>

                        <div className={classes.grid}>
                            <Route exact path="/profile/account" children={<ProfilePersonalInfo/>}/>
                            <Route exact path="/profile/saved" children={<SavedDesigns/>}/>
                            <Route exact path="/profile/orders" children={<Orders/>}/>
                        </div>
                    </Grid>
                </Container>
            </div>
        );
    }
;

export default Profile;
