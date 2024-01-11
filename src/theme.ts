import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export enum ThemeColor {
  BACKGROUND = "#f9fafb",
  SECONDARY_BACKGROUND = "#F3F4F6",
  WHITE = "#fff",
  BLACK = "#111928",
  GRAY = "#d1d5db",
  PLACEHOLDER = "#9ca3af",
  GRAY_3 = "#6B7280",
  ORANGE = "#FF5A1F",
}

const theme = createTheme({
  palette: {
    primary: {
      main: ThemeColor.BLACK,
    },
    common: {
      black: ThemeColor.BLACK,
      white: ThemeColor.WHITE,
    },
    text: {
      primary: ThemeColor.BLACK,
    },
    divider: "rgba(0,0,0,0.1)",

    background: {
      default: ThemeColor.WHITE,
    },

    error: {
      main: red.A700,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h1",
          subtitle2: "h2",
          body1: "p",
          body2: "p",
          button: "span",
          caption: "p",
        },
      },
    },
  },
  typography: {
    fontFamily: "inherit",
    fontWeightBold: "bold",
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightLight: 300,
    h6: {
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: 1.5,
      color: ThemeColor.BLACK,
      "@media (max-width:900px)": {
        fontSize: "10px",
      },
      "@media (max-width:600px)": {
        fontSize: "10px",
      },
    },
    body2: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: 1.5,
      color: ThemeColor.BLACK,
      "@media (max-width:900px)": {
        fontSize: "12px",
      },
      "@media (max-width:600px)": {
        fontSize: "10px",
      },
    },
    body1: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: 1.5,
      color: ThemeColor.BLACK,
      "@media (max-width:900px)": {
        fontSize: "14px",
      },
      "@media (max-width:600px)": {
        fontSize: "12px",
      },
    },
  },
});

export default theme;
