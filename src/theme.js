import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2196f3"
    },
    secondary: {
      main: "#4caf50"
    }
  },
  overrides: {    
    MuiFilledInput: {
      root: {
        backgroundColor: "green"
      }
    },
    MuiTextField: {
      root: {
        width: 300
      },
    },
    MuiButton: {
      root: {
        borderRadius: 30,
        textTransform: "none",
        padding: "20px",
        width:"10em",
      },
    },
    MuiStepIcon:{
      root: {
        '&$completed': {
          color: "#4caf50",
        },
        '&$active': {
          color: "#2196f3",
        },
      },
      active: {},
      completed: {},
    },
    
  },

});