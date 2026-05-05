import React from 'react';
import { Box, IconButton, Typography, Divider, alpha, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { personalInfo } from '../../data/portfolio';

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ mt: 'auto' }}>
      <Divider sx={{ opacity: 0.5 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          py: 4,
          px: 3,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <IconButton
            component="a"
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            sx={{
              color: 'text.secondary',
              transition: '0.2s',
              '&:hover': {
                color: 'primary.main',
                transform: 'translateY(-2px)',
                bgcolor: alpha(theme.palette.primary.main, 0.08),
              },
            }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            sx={{
              color: 'text.secondary',
              transition: '0.2s',
              '&:hover': {
                color: 'primary.main',
                transform: 'translateY(-2px)',
                bgcolor: alpha(theme.palette.primary.main, 0.08),
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>

        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            letterSpacing: '0.05em',
            opacity: 0.7,
          }}
        >
          © {currentYear} {personalInfo.shortName}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
