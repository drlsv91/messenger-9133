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
                fontSize: 12,
                fontWeight: "bold",
                borderBottom: "2px solid #E9EEF2",
                opacity: 0.5,
            },
        },
        MuiButton: {
            root: {
                borderRadius: 2,
                padding: "0.35rem 1.5rem",
                fontSize: "12px",
            },
        },
    },
    palette: {
        primary: { main: "#3A8DFF" },
        secondary: { main: "#B0B0B0" },
    },
});