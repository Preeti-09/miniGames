import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    game: {
        padding: "1rem",
        margin: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    row: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    col: {
        height: "calc(min(30vw,25vh))",
        width: "calc(min(30vw,25vh))",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "150px"
    },
    col1: {
        borderBottom: "3px solid #000",
        borderRight: "3px solid #000",
    },
    col2: {
        borderBottom: "3px solid #000",
    },
    col3: {
        borderRight: "3px solid #000",
    },
    player: {
        textAlign: "center",
        fontFamily: "Monospace",
        fontWeight: "600",
        border: "1px solid #080808",
        borderRadius: "8px",
        marginTop: "0.5rem",
    },
    resetbtn: {
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
    },
}))
