import React from 'react';
import { Container, Paper, Box, useTheme, alpha } from '@mui/material';
import ScrollToTop from '../ScrollToTop';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        // Ambient background effect — subtle gradient in the viewport gap
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDark
            ? `radial-gradient(ellipse at 20% 0%, ${alpha(theme.palette.secondary.main, 0.06)} 0%, transparent 50%),
               radial-gradient(ellipse at 80% 100%, ${alpha(theme.palette.primary.main, 0.04)} 0%, transparent 50%)`
            : `radial-gradient(ellipse at 20% 0%, ${alpha(theme.palette.secondary.main, 0.04)} 0%, transparent 50%),
               radial-gradient(ellipse at 80% 100%, ${alpha(theme.palette.primary.main, 0.03)} 0%, transparent 50%)`,
          pointerEvents: 'none',
          zIndex: 0,
        },
      }}
    >
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            flex: 1,
            bgcolor: 'background.paper',
            overflow: 'hidden',
            my: { xs: 0, md: 3 },
            mx: { xs: 0, md: 2 },
            borderRadius: { xs: 0, md: 4 },
            boxShadow: isDark
              ? `0px 8px 40px ${alpha('#000', 0.5)}, 0px 0px 0px 1px ${alpha('#fff', 0.04)}`
              : `0px 8px 40px ${alpha('#000', 0.08)}, 0px 0px 0px 1px ${alpha('#000', 0.04)}`,
            display: 'flex',
            flexDirection: 'column',
            transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
          }}
        >
          <Navbar />

          <Box
            component="main"
            sx={{
              flex: 1,
              px: { xs: 2.5, sm: 3, md: 4 },
              py: { xs: 2, md: 3 },
            }}
          >
            <Outlet />
          </Box>

          <Footer />
        </Paper>
      </Container>

      <ScrollToTop />
    </Box>
  );
};

export default MainLayout;
