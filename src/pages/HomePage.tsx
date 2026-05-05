import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Button,
  IconButton,
  alpha,
  useTheme,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CodeIcon from '@mui/icons-material/Code';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { personalInfo, navLinks } from '../data/portfolio';

const fadeInUpKeyframes = `
@keyframes heroFadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
`;

const sectionIcons: Record<string, React.ReactElement> = {
  About: <PersonOutlineIcon sx={{ fontSize: 28 }} />,
  Skills: <CodeIcon sx={{ fontSize: 28 }} />,
  Projects: <FolderOpenIcon sx={{ fontSize: 28 }} />,
  Experience: <WorkOutlineIcon sx={{ fontSize: 28 }} />,
  Education: <SchoolOutlinedIcon sx={{ fontSize: 28 }} />,
};

const sectionDescriptions: Record<string, string> = {
  About: 'Background, contact, and CV',
  Skills: 'Languages, tools & technologies',
  Projects: 'Things I\'ve built',
  Experience: 'Career timeline',
  Education: 'Academic background',
};

const HomePage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ pb: 4 }}>
      <style>{fadeInUpKeyframes}</style>

      {/* ─── Hero Area ─── */}
      <Box
        sx={{
          minHeight: { xs: '60vh', md: '70vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          py: { xs: 6, md: 10 },
        }}
      >
        {/* Subtle glow */}
        <Box
          sx={{
            position: 'absolute',
            top: '-15%',
            right: '-10%',
            width: { xs: 300, md: 500 },
            height: { xs: 300, md: 500 },
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.08)} 0%, transparent 70%)`,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
          <Typography
            variant="overline"
            sx={{
              color: 'secondary.main',
              fontWeight: 700,
              letterSpacing: '0.15em',
              fontSize: { xs: '0.8rem', md: '0.9rem' },
              mb: 2,
              display: 'block',
              '@media (prefers-reduced-motion: no-preference)': {
                animation: 'heroFadeInUp 0.6s ease-out both',
              },
            }}
          >
            Welcome — I'm
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              color: 'text.primary',
              mb: 1.5,
              '@media (prefers-reduced-motion: no-preference)': {
                animation: 'heroFadeInUp 0.6s ease-out both',
                animationDelay: '0.1s',
              },
            }}
          >
            {personalInfo.name}
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: 'text.secondary',
              fontWeight: 500,
              fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem' },
              mb: 3,
              '@media (prefers-reduced-motion: no-preference)': {
                animation: 'heroFadeInUp 0.6s ease-out both',
                animationDelay: '0.2s',
              },
            }}
          >
            {personalInfo.role}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '540px',
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 4,
              '@media (prefers-reduced-motion: no-preference)': {
                animation: 'heroFadeInUp 0.6s ease-out both',
                animationDelay: '0.3s',
              },
            }}
          >
            {personalInfo.tagline}
          </Typography>

          {/* Social + CTA */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              '@media (prefers-reduced-motion: no-preference)': {
                animation: 'heroFadeInUp 0.6s ease-out both',
                animationDelay: '0.4s',
              },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/projects')}
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 700,
                fontSize: '0.95rem',
              }}
            >
              View Projects
            </Button>

            <IconButton
              component="a"
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={{
                width: 44,
                height: 44,
                border: '2px solid',
                borderColor: 'divider',
                color: 'text.secondary',
                transition: '0.2s',
                '&:hover': {
                  borderColor: 'primary.main',
                  color: 'primary.main',
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
                width: 44,
                height: 44,
                border: '2px solid',
                borderColor: 'divider',
                color: 'text.secondary',
                transition: '0.2s',
                '&:hover': {
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  bgcolor: alpha(theme.palette.primary.main, 0.08),
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* ─── Navigation Cards Grid ─── */}
      <Box sx={{ mt: { xs: 2, md: 4 } }}>
        <Typography
          variant="overline"
          sx={{
            color: 'text.secondary',
            fontWeight: 700,
            letterSpacing: '0.15em',
            mb: 3,
            display: 'block',
          }}
        >
          Explore
        </Typography>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {navLinks.map((link) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={link.path}>
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: isDark
                    ? alpha(theme.palette.background.paper, 0.6)
                    : 'background.paper',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    borderColor: alpha(theme.palette.secondary.main, 0.4),
                    transform: 'translateY(-4px)',
                    boxShadow: isDark
                      ? `0 8px 24px ${alpha('#000', 0.4)}`
                      : `0 8px 24px ${alpha('#000', 0.08)}`,
                    '& .card-arrow': {
                      transform: 'translateX(4px)',
                      color: 'secondary.main',
                    },
                    '& .card-icon': {
                      color: 'secondary.main',
                      bgcolor: alpha(theme.palette.secondary.main, 0.1),
                    },
                  },
                }}
              >
                <CardActionArea
                  onClick={() => navigate(link.path)}
                  sx={{ height: '100%', p: 3 }}
                >
                  <CardContent sx={{ p: '0 !important' }}>
                    <Box
                      className="card-icon"
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: alpha(theme.palette.primary.main, 0.08),
                        color: 'primary.main',
                        mb: 2,
                        transition: '0.2s',
                      }}
                    >
                      {sectionIcons[link.label]}
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 1,
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {link.label}
                      </Typography>
                      <ArrowForwardIcon
                        className="card-arrow"
                        sx={{
                          fontSize: 18,
                          color: 'text.secondary',
                          transition: 'all 0.2s ease',
                        }}
                      />
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary' }}
                    >
                      {sectionDescriptions[link.label]}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
