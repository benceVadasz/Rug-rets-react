import {makeStyles} from "@material-ui/core";

export const profileStyles = makeStyles((theme) => ({
    container: {
        padding: '20px 150px 0 120px',
        // maxWidth: "90%",
    },
    title: {
        marginTop: 10,
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: 0,
        right: 0
    },
    bg: {
        backgroundColor: '#EEEEEE',
        position: 'relative',
        height: '100vh',
    },
    grid: {
        backgroundColor: 'white',
        width: 600,
        height: '90vh',
        margin: '52px 0 0 70px'
    }
}));