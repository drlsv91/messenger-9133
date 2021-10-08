import { makeStyles } from "@material-ui/core/styles";
import authBgImage from "../assets/images/bg-img.png";

export const authStyles = makeStyles((theme) => ({
    wrapper: {
        height: "700px",
        maxWidth: "1024px",
        margin: "auto",
    },
    container: {
        height: "100vh",
        overflow: "hidden",
    },
    left: {
        backgroundImage: `linear-gradient(to bottom, rgba(58, 141, 255, 0.8),rgba(58, 141, 255, 0.8), rgba(58, 141, 255, 1)), url(${authBgImage})`,
        color: "#fff",
        height: "100%",
        display: "none",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "@media (min-width:768px)": {
            display: "flex",
            maxWidth: "425px",
            width: "40%",
        },
    },
    right: {
        height: "100%",
        width: "100%",
        margin: "0 auto",
        "@media (min-width:768px)": {
            width: "50%",
            maxWidth: "calc(100% - 340px)",
        },
    },
    inputContainer: {
        width: "100%",
        marginBottom: "2rem",
    },
    formContainer: {
        width: "80%",
        height: "calc(100% - 38px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        "@media (min-width:768px)": {
            width: "70%",
        },
    },
    top: {
        marginTop: "1rem",
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: "1rem",
        "@media (min-width:768px)": {
            paddingRight: "0.8rem",
            marginTop: "3rem",
        },
    },
    formTitle: {
        width: "100%",
        fontSize: "20px",
        marginBottom: "1rem",
        fontWeight: "bold",
    },

    buttonOutline: {
        boxShadow: "0 1px 7px 5px #f3f3f3",
        marginLeft: "2rem",
    },

    inputFieldRoot: {
        "& .MuiInput-underline:before": {
            borderBottom: "2px solid #E9EEF2",
        },
        "& .MuiInput-underline:after": {
            borderBottom: "1px solid #E9EEF2",
            color: "#E9EEF2",
        },
        "& .MuiFormLabel-root.Mui-focused": {
            color: "rgba(0, 0, 0, 0.54)",
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid #E9EEF2",
            color: "#E9EEF2",
        },
    },
}));