import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    game: {
        minWidth: "50vw",
        padding: "1rem",
        margin: "1rem",
        marginBottom: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    play: {
        position: "fixed",
        top: "40vh",
        width: "50vw",
        height: "200px",
        minWidth: "300px",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "100",
        boxShadow: "1px 1px 4px #000",
        borderRadius: "15px",
        flexDirection: "column",

    },
    squares: {
        height: "25vh",
        minWidth: "200px",
        minHeight: "100px",
        borderRadius: "15%",
        background: "#000",
        transition: "background 0.7s",
        margin: "1rem 2.4rem",
    },
    row: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    header: {
        width: "100%",
        background: "#37036d",
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "normal",
        textAlign: "center",
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
        letterSpacing: "0.7rem",
        margin: "0",
        fontSize: "3rem",
        padding: "20px 0px",
        lineHeight: "1.1",
        borderRadius: "10px",
    },
    navbar: {
        background: "#fff",
        textAlign: "center",
        height: "30px",
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    },
    button: {
        height: "100%",
        outline: "none",
        border: "none",
        background: "#fff",
        textTransform: "uppercase",
        transition: "all 0.4s",
        color: "#37036d",
        fontWeight: "700",
        borderRadius: "0 0 5px 5px",
        '&:hover': {
            background: "#37036d",
            color: "#fff"
        }
    },
    selected: {
        background: "#37036d",
        color: "#fff",
    },
    message: {
        fontSize: "2rem",
        fontWeight: "700",
    },
}))

