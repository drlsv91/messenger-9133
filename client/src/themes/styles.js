import { makeStyles } from "@material-ui/core/styles";

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
    formControl: {
        width: "100%",
    },
    form: {
        width: "100%",
    },
    inputLabel: { fontSize: 14, fontWeight: "bold", opacity: 0.5 },
    formLeftContainer: {
        backgroundImage: (props) =>
            `linear-gradient(to bottom, rgba(58, 141, 255, 0.8), rgba(134, 185, 255, 0.8)), url(${props.bgImage})`,
        color: "#fff",
        height: "100%",
        display: "none",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "5rem",
        "@media (min-width:768px)": {
            display: "flex",
            maxWidth: "425px",
            width: "40%",
        },
    },
    right: {
        boxShadow: "1px 0px 5px 1px #e7e7e7",
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
        margin: "0 auto",
        "@media (min-width:768px)": {
            width: "50%",
            maxWidth: "calc(100% - 320px)",
        },
    },
    inputContainer: {
        position: "relative",
        width: "100%",
        marginBottom: "2rem",
    },
    formContainer: {
        width: "80%",
        height: "calc(100% - 10rem)",
        padding: "0!important",
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
            marginTop: "2rem",
        },
    },
    formTitle: {
        width: "100%",
        fontSize: "20px",
        marginBottom: "2rem",
        fontWeight: "bold",
    },

    buttonOutline: {
        boxShadow: "0 1px 7px 5px #f3f3f3",
        marginLeft: "2rem",
    },
    forgetPasswordBtn: {
        position: "absolute",
        right: 0,
        bottom: 0,
        minWidth: "inherit",
        minHeight: "inherit",
        fontSize: 12,
    },

    inputFieldRoot: {
        "& .MuiInput-underline:before": {
            borderBottom: "2px solid #E9EEF2",
        },
        "& .MuiInput-underline:after": {
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