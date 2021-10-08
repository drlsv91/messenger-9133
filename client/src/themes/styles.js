import { makeStyles } from "@material-ui/core/styles";

export const authStyles = makeStyles((theme) => ({
    wrapper: {
        border: "1px solid green",
        height: "700px",
        maxWidth: "1024px",
        margin: "auto",
    },
    container: {
        border: "1px solid red",
        height: "100vh",
    },
    left: {
        border: "1px solid red",
        height: "100%",
        width: "425px",
    },
    right: {
        width: "calc(100% - 430px)",
        height: "100%",
        border: "1px solid blue",
    },
    inputContainer: {
        width: "100%",
    },
    formContainer: {
        border: "1px solid red",
        width: "80%",
        height: "calc(100% - 38px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
    },
    top: {
        border: "1px solid red",
        alignSelf: "flex-start",
        justifySelf: "flex-start",
    },
    formTitle: {
        // border: "1px solid red",
        width: "100%",
        fontSize: "20px",
    },

    root: {
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
    topDashboard: {
        display: "grid",
        gridTemplateColumns: "[col1-start] 1fr [col1-end col2-start] 2.6fr [col2-end]",
        gap: "2rem",

        "@media (max-width:768px)": {
            gridTemplateColumns: "repeat(1, auto)",
            gap: "2rem",
        },
    },

    topLeftDashboard: {
        display: "grid",
        gridTemplateColumns: "repeat(1, auto)",
        gap: "1rem",
    },

    topRightDashboard: {
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 0px 12px #F2F4F9",
        borderRadius: "10px",
        padding: "1rem",
    },

    middleDashboard: {
        display: "grid",
        gridTemplateColumns: "[col1-start] 2.5fr [col1-end col2-start] 1.2fr [col2-end]",
        gap: "2rem",

        "@media (max-width:768px)": {
            gridTemplateColumns: "repeat(1, auto)",
            gap: "2rem",
        },
    },

    middleLeftDashboard: {
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 0px 12px #F2F4F9",
        borderRadius: "10px",
        padding: "1rem",
    },

    middleRightDashboard: {
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 0px 12px #F2F4F9",
        borderRadius: "10px",
        padding: "1rem",
    },

    bottomDashboard: {
        display: "grid",
        gridTemplateColumns: "[col1-start] 2fr [col1-end col2-start] 2.5fr [col2-end]",
        gap: "2rem",

        "@media (max-width:768px)": {
            gridTemplateColumns: "repeat(1, auto)",
            gap: "2rem",
        },
    },

    bottomLeftDashboard: {
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 0px 12px #F2F4F9",
        borderRadius: "10px",
        padding: "1rem",
    },

    bottomRightDashboard: {
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 0px 12px #F2F4F9",
        borderRadius: "10px",
        padding: "1rem",
    },
}));