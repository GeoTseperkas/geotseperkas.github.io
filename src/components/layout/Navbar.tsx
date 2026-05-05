import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  IconButton,
  alpha,
  useTheme,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useNavigate, useLocation } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';
import { navLinks, personalInfo } from '../../data/portfolio';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ py: { xs: 1, md: 2 } }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: '56px', md: '70px' },
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {/* LEFT: Logo */}
          <Button
            onClick={() => handleNavigation('/')}
            sx={{
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              height: { xs: '42px', md: '50px' },
              px: { xs: 2, md: 3 },
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: { xs: '0.8rem', md: '0.95rem' },
              letterSpacing: '0.5px',
              minWidth: 'auto',
              '&:hover': {
                bgcolor: 'primary.dark',
                transform: 'scale(1.02)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            {personalInfo.shortName}
          </Button>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.label}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    px: 2,
                    bgcolor: isActive
                      ? alpha(theme.palette.secondary.main, 0.1)
                      : 'transparent',
                    color: isActive ? 'secondary.main' : 'text.secondary',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      color: 'secondary.main',
                      bgcolor: alpha(theme.palette.secondary.main, 0.08),
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}

            {/* Theme Toggle */}
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              sx={{
                ml: 1,
                transition: '0.2s',
                '&:hover': { color: 'secondary.main' },
              }}
            >
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            aria-label="Open navigation menu"
            onClick={() => setDrawerOpen(true)}
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: '42px',
              height: '42px',
              border: '2px solid',
              borderColor: 'divider',
              borderRadius: '50%',
              color: 'text.primary',
              transition: '0.2s',
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Drawer */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{
              sx: {
                width: '280px',
                bgcolor: 'background.paper',
                pt: 2,
              },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 1 }}>
              <IconButton
                aria-label="Close navigation menu"
                onClick={() => setDrawerOpen(false)}
                sx={{ width: '42px', height: '42px' }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <Divider />

            <List sx={{ px: 1, pt: 1 }}>
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <ListItemButton
                    key={item.label}
                    onClick={() => handleNavigation(item.path)}
                    sx={{
                      minHeight: '48px',
                      borderRadius: 2,
                      mb: 0.5,
                      bgcolor: isActive
                        ? alpha(theme.palette.secondary.main, 0.1)
                        : 'transparent',
                      '&:hover': {
                        bgcolor: alpha(theme.palette.secondary.main, 0.08),
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: isActive ? 700 : 600,
                        fontSize: '1rem',
                        color: isActive ? 'secondary.main' : 'text.primary',
                        letterSpacing: '0.02em',
                      }}
                    />
                  </ListItemButton>
                );
              })}

              {/* Theme Toggle in Drawer */}
              <ListItemButton
                onClick={toggleTheme}
                sx={{
                  minHeight: '48px',
                  borderRadius: 2,
                  mb: 0.5,
                  mt: 1,
                  '&:hover': {
                    bgcolor: alpha(theme.palette.secondary.main, 0.08),
                  },
                }}
              >
                <ListItemText
                  primary={mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: 'text.primary',
                    letterSpacing: '0.02em',
                  }}
                />
                <ListItemIcon sx={{ minWidth: 'unset' }}>
                  {mode === 'dark' ? (
                    <LightModeIcon sx={{ color: 'text.primary' }} />
                  ) : (
                    <DarkModeIcon sx={{ color: 'text.primary' }} />
                  )}
                </ListItemIcon>
              </ListItemButton>
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
