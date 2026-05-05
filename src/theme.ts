import { PaletteMode } from '@mui/material';
import { alpha } from '@mui/material/styles';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#2c3e50',
            light: '#546e7a',
            dark: '#1a252f',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#5d9cec',
            light: '#8ebcf3',
            dark: '#3d6ea4',
            contrastText: '#ffffff',
          },
          background: {
            default: '#f4f6f8',
            paper: '#ffffff',
          },
          text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.6)',
          },
          divider: 'rgba(0, 0, 0, 0.08)',
        }
      : {
          primary: {
            main: '#90caf9',
            light: '#e3f2fd',
            dark: '#3887c9',
            contrastText: 'rgba(0, 0, 0, 0.87)',
          },
          secondary: {
            main: '#5d9cec',
            light: '#8ebcf3',
            dark: '#3d6ea4',
            contrastText: 'rgba(0, 0, 0, 0.87)',
          },
          background: {
            default: '#0d1117',
            paper: '#262e3a',
          },
          text: {
            primary: '#f0f6fc',
            secondary: '#8b949e',
          },
          divider: 'rgba(240, 246, 252, 0.12)',
        }),
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3rem',
      lineHeight: 1.1,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.75rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.4,
    },
    button: {
      textTransform: 'none' as const,
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    body1: {
      lineHeight: 1.7,
      fontSize: '1.05rem',
    },
    body2: {
      lineHeight: 1.6,
    },
    overline: {
      fontWeight: 700,
      letterSpacing: '0.15em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          backgroundColor: mode === 'light' ? '#f4f6f8' : '#0a0e14',
          scrollbarWidth: 'thin' as const,
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor:
              mode === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
        },
        '::selection': {
          backgroundColor: mode === 'light' ? '#2c3e50' : '#90caf9',
          color: mode === 'light' ? '#ffffff' : '#0d1117',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          padding: '8px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow:
              mode === 'light'
                ? '0px 4px 12px rgba(0,0,0,0.1)'
                : '0px 4px 12px rgba(255,255,255,0.05)',
          },
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow:
              mode === 'light'
                ? '0px 4px 12px rgba(44, 62, 80, 0.2)'
                : '0px 4px 12px rgba(167, 193, 211, 0.2)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            mode === 'light'
              ? '0px 4px 20px rgba(0,0,0,0.05)'
              : '0px 4px 20px rgba(0,0,0,0.4)',
          backgroundImage: 'none',
          borderRadius: '20px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow:
            mode === 'light'
              ? '0px 2px 8px rgba(0,0,0,0.05)'
              : '0px 2px 8px rgba(0,0,0,0.3)',
        },
        elevation2: {
          boxShadow:
            mode === 'light'
              ? '0px 4px 12px rgba(0,0,0,0.08)'
              : '0px 4px 12px rgba(0,0,0,0.4)',
        },
        elevation3: {
          boxShadow:
            mode === 'light'
              ? '0px 8px 24px rgba(0,0,0,0.1)'
              : '0px 8px 24px rgba(0,0,0,0.5)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: '50px',
        },
        outlined: {
          borderColor:
            mode === 'light'
              ? alpha('#000', 0.12)
              : alpha('#fff', 0.15),
          '&:hover': {
            backgroundColor:
              mode === 'light'
                ? alpha('#5d9cec', 0.08)
                : alpha('#5d9cec', 0.12),
            borderColor:
              mode === 'light'
                ? alpha('#5d9cec', 0.4)
                : alpha('#5d9cec', 0.5),
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
        },
      },
    },
  },
});
