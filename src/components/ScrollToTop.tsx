import React, { useState, useEffect } from 'react';
import { Fab, Fade, useTheme, alpha } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fade in={visible}>
      <Fab
        size="small"
        aria-label="Scroll to top"
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: { xs: 16, md: 32 },
          right: { xs: 16, md: 32 },
          bgcolor: 'background.paper',
          color: 'text.secondary',
          border: '1px solid',
          borderColor: 'divider',
          boxShadow: `0 4px 12px ${alpha(theme.palette.common.black, 0.15)}`,
          transition: 'all 0.2s ease',
          '&:hover': {
            bgcolor: alpha(theme.palette.secondary.main, 0.1),
            borderColor: alpha(theme.palette.secondary.main, 0.3),
            color: 'secondary.main',
            transform: 'translateY(-2px)',
          },
          zIndex: 50,
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Fade>
  );
};

export default ScrollToTop;
