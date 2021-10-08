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
                // borderBottom: "2px solid #f1f1f1",
            },
        },
        MuiButton: {
            root: {
                borderRadius: 3,
                // padding: "0.35rem 1.5rem",
                fontSize: "12px",
                "@media (min-width:768px)": {
                    minWidth: "6rem",
                    minHeight: "2.5rem",
                },
            },
        },
    },
    palette: {
        primary: { main: "#3A8DFF" },
        secondary: { main: "#B0B0B0" },
    },
});