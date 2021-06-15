import React from 'react';
import {Container, Grid} from '@material-ui/core';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {orange} from '@material-ui/core/colors';
import ProfileMenu from '../components/ProfileMenu';
import ProfilePersonalInfo from '../components/ProfilePersonalInfo';
import {Route} from 'react-router-dom';
import SavedDesigns from "../components/SavedDesigns";
import Orders from "../components/Orders";


const classes = {
    container: {
        padding: '20px 0',
        // maxWidth: "90%",
    },
    title: {
        color: '#7c88cc',
    },
};

const theme = createMuiTheme({
    typography: {
        h1: {
            fontSize: 36,
            margin: '10px',
            color: '#7c88cc',
        },
        h2: {
            fontSize: 30,
            margin: '10px',
            color: '#7c88cc',
        },
        h3: {
            fontSize: 24,
            margin: '5px',
            color: '#7c88cc',
        },
        h4: {
            fontSize: 20,
            color: '#7c88cc',
        },
    },
    palette: {
        primary: {
            main: '#859DF4',
        },
        secondary: {
            main: orange[400],
        },
    },
});

const Profile = () => {

    return (
        <>
            <Container maxWidth="lg" style={classes.container}>
                <Grid container spacing={3} direction="row">
                    {/* Profile menu */}
                    <Grid item xs={3}>
                        <ProfileMenu/>
                    </Grid>

                    <Grid item xs={9}>
                        <Route
                            exact
                            path="/profile"
                            render={(props) => (
                                <>
                                    <Grid container direction="column">
                                        <Grid item xs={12}>
                                            <ProfilePersonalInfo/>
                                        </Grid>
                                    </Grid>
                                </>
                            )}
                        />
                        <Route
                            exact
                            path="/profile/saved"
                            render={(props) => (
                                <>
                                    <SavedDesigns {...props}/>
                                </>
                            )}
                        />
                        <Route
                            exact
                            path="/profile/orders"
                            render={(props) => (
                                <>
                                    <Orders {...props}/>
                                </>
                            )}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
;

export default Profile;
