import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    typography: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: 14,
        button: {
            textTransform: "none",
            letterSpacing: 0,
            fontWeight: "bold",
        },
    },
    overrides: {
        MuiInput: {
            input: {
                fontSize: 13,
                fontWeight: "bold",
                paddingLeft: "5px",
                paddingBottom: "12px",
            },
        },
        MuiButton: {
            root: {
                borderRadius: 3,
                fontSize: "13px",
                fontWeight: "bold",
                "@media (min-width:768px)": {
                    minWidth: "8.5rem",
                    minHeight: "3rem",
                },
            },
        },
    },
    palette: {
        primary: { main: "#3A8DFF" },
        secondary: { main: "#B0B0B0" },
    },
});