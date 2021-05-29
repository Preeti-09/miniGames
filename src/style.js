import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    navbar: {
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
    },
    mar: {
        margin: "4vh"
    },
    btn: {
        margin: "0.4rem"
    },
    footer: {
        fontFamily: "Monospace",
        fontSize: "1rem",
        color: "#fff",
        background: "#000",
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100vw",
        fontWeight: "600",
        textTransform: "uppercase",
        textAlign: "center",
    }
}));