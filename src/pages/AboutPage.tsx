import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  alpha,
  useTheme,
} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DownloadIcon from '@mui/icons-material/Download';
import { personalInfo, aboutText } from '../data/portfolio';

const AboutPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ pb: 6 }}>
      {/* Editorial Header */}
      <Box sx={{ mb: 6, pt: { xs: 2, md: 4 } }}>
        <Typography
          variant="overline"
          sx={{
            color: 'secondary.main',
            fontWeight: 800,
            letterSpacing: '0.2em',
            mb: 2,
            display: 'block',
          }}
        >
          ABOUT // 001
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            mb: 3,
          }}
        >
          A bit <br />
          about me.
        </Typography>
      </Box>

      <Divider sx={{ mb: 6, opacity: 0.15 }} />

      {/* Content Grid */}
      <Grid container spacing={{ xs: 4, md: 6 }}>
        {/* Text Column */}
        <Grid size={{ xs: 12, md: 7 }}>
          {aboutText.map((paragraph, i) => (
            <Typography
              key={i}
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                mb: 3,
                ...(i === 0 && {
                  borderLeft: '4px solid',
                  borderColor: 'primary.main',
                  pl: 3,
                  py: 1,
                  fontSize: '1.15rem',
                }),
              }}
            >
              {paragraph}
            </Typography>
          ))}
        </Grid>

        {/* Info Card Column */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 4,
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: alpha(
                theme.palette.background.paper,
                theme.palette.mode === 'dark' ? 0.5 : 1
              ),
              position: { md: 'sticky' },
              top: { md: 100 },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              {/* Location */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: alpha(theme.palette.secondary.main, 0.1),
                    color: 'secondary.main',
                  }}
                >
                  <LocationOnOutlinedIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                    Location
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {personalInfo.location}
                  </Typography>
                </Box>
              </Box>

              {/* Email */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: alpha(theme.palette.secondary.main, 0.1),
                    color: 'secondary.main',
                  }}
                >
                  <EmailOutlinedIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                    Email
                  </Typography>
                  <Typography
                    variant="body2"
                    component="a"
                    href={`mailto:${personalInfo.email}`}
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      textDecoration: 'none',
                      transition: '0.2s',
                      '&:hover': { color: 'secondary.main' },
                    }}
                  >
                    {personalInfo.email}
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ opacity: 0.3 }} />

              {/* CV Download */}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<DownloadIcon />}
                component="a"
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: '0.9rem',
                }}
              >
                Download CV
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutPage;
