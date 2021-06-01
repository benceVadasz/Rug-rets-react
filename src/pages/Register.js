import React, { useState } from "react";
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import {
    Grid,
    Paper,
    Avatar,
    Typography,
    TextField,
    Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { BASE_URL } from "../constants";
import {useTheme} from '@material-ui/core/styles';
// import Loading from "./Loading";

const Register = () => {
    const useStyles = makeStyles(() => ({
        paperStyle: {
            padding: "30px 20px",
            height: 460,
            width: 500,
            margin: "70px auto",
        },
        mobilePaperStyle: {
            padding: "30px 20px 10px 20px",
            height: 450,
            width: '90%',
            margin: "140px auto",
        },
        formStyle: {
            height: 350,
            display: "flex",
            flexFlow: "column wrap",
            justifyContent: "space-between",
        },
        mobileFormStyle: {
            padding: "30px 20px",
            display: "flex",
            flexFlow: "column wrap",
            justifyContent: "space-between",
        },
        headerStyle: { margin: 0, fontFamily: "'IBM Plex Mono', monospace" },
        invalid: { color: 'red' },
        avatarStyle: { backgroundColor: "#859DF4", marginBottom: 10 },
        button: { backgroundColor: "#edede9", color: 'black' },
        load: { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }
    }));
    const classes = useStyles();
    const [name, setNameState] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const theme = useTheme();
    const [invalidEmail, setInvalidEmail] = useState(false);

    const submit = (e) => {
        if (password !== confirmPassword) alert("Passwords do not match");
        setLoading(true);
        e.preventDefault();
        axios
            .post(`${BASE_URL}/Rug-Rets/public/api/registration`, {
                headers: {
                    "Content-Type": "application/json",
                },
                name,
                email,
                password,
            })
            .then((response) => {
                setLoading(false);
                window.location.href = "/";
            })
            .catch((error) => {
                if (error.response.status === 400) {
                    setInvalidEmail(true)
                    setLoading(false)
                }
            });
    };

    const setName = (e) => {
        setNameState(e.target.value)
        setInvalidEmail(false)
    }

    // if (loading)
    //     return (
    //         <div className={classes.load}>
    //             <Loading/>
    //         </div>
    //     );

    return (
        <div>
            <Grid>
                <Paper elevation={20} className={classes.paperStyle}>
                    <Grid align="center">
                        <Avatar className={classes.avatarStyle}>
                            <AddCircleOutlineOutlinedIcon />
                        </Avatar>
                        <h2 className={classes.headerStyle}>Rug rets</h2>
                        {!invalidEmail? <Typography className={classes.headerStyle} variant="caption" gutterBottom>
                            Please fill in this form to create an account!
                        </Typography> : <Typography className={classes.invalid} variant="caption" gutterBottom>
                            Email is invalid
                        </Typography>}
                    </Grid>
                    <form className={classes.formStyle} onSubmit={submit}>
                        <TextField
                            onChange={setName}
                            fullWidth
                            label="Name"
                            placeholder="Enter your name"
                            inputProps={{
                                form: {
                                    autocomplete: 'off',
                                }
                            }}
                        />
                        <TextField
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            error={invalidEmail}
                            label="Email"
                            placeholder="Enter your email"
                            inputProps={{
                                form: {
                                    autocomplete: 'off',
                                },
                            }}
                        />
                        <TextField
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            inputProps={{
                                form: {
                                    autocomplete: 'off',
                                },
                            }}
                        />
                        <TextField
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            fullWidth
                            label="Confirm Password"
                            type="password"
                            placeholder="Confirm your password"
                            inputProps={{
                                form: {
                                    autocomplete: 'off',
                                },
                            }}
                        />
                        <Button color={"primary"} type="submit" variant="contained" className={classes.button}>
                            Sign up
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
}

export default Register;