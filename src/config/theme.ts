import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: "light", 

    primary: {
      main: "#C3A578",
      contrastText: "#fff",
    },

    secondary: {
      main: "#ECECEC",
      contrastText: '#FAFAFA',
    },

    error: {
      main: "#C90D0D",
      contrastText: "#fff",
    },

    background: {
      default: "#F9F9F9",
      paper: "#9E9E9E",
    },

    text: {
      primary: "#333333",
      secondary: "#777777",
    },

    common: {
      white: '#ffffff',
      black: '#1F1F1F',
    },

  },

  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: '20px',
          fontSize: '14px',

          '& input': {
            padding: '10px 25px',
          },

          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.secondary.main,
          },

          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
          },

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
            borderWidth: '2px',
          },
        }),
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.secondary,
          fontSize: '14px',

          '&.Mui-focused': {
            color: theme.palette.primary.main,
          },
        }),
      },
    },

    MuiButton: {
      styleOverrides: {
        root: () => ({
          borderRadius: '20px',
          textTransform: 'none',
          fontSize: '14px',
          fontWeight: 500,
          padding: '10px 25px',
          boxShadow: 'none',

          '&:hover': {
            boxShadow: 'none',
          }
        }),

        containedPrimary: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,

          '&:hover': {
            backgroundColor: theme.palette.primary.dark ?? theme.palette.primary.main,
          },
        }),

        outlinedPrimary: ({ theme }) => ({
          color: theme.palette.primary.main,
          border: `1px solid ${theme.palette.primary.main}`,

          '&:hover': {
            border: `1px solid ${theme.palette.primary.main}`,
            backgroundColor: `${theme.palette.primary.main}10`,
          },
        }),
      },
    },
  },
})
export default theme;