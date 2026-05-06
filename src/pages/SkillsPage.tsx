import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
  alpha,
  useTheme,
} from '@mui/material';
import { skills } from '../data/portfolio';

const SkillsPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ pb: 6 }}>
      {/* Header */}
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
          SKILLS // 002
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
          Tools & <br />
          technologies.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            maxWidth: '500px',
            fontSize: '1.1rem',
            lineHeight: 1.7,
          }}
        >
          My technical toolkit is split into two areas: the core stack I rely on
          every day to solve complex professional problems, and the wider
          ecosystem of tools I’ve picked up for weekend projects, hackathons, or
          one-off experiments. Below is everything I’ve worked with, from my
          daily drivers to my brief curiosities.
        </Typography>
      </Box>

      <Divider sx={{ mb: 6, opacity: 0.15 }} />

      {/* Skills Grid */}
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {skills.map((group) => (
          <Grid size={{ xs: 12, sm: 6 }} key={group.category}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.25s ease',
                '&:hover': {
                  borderColor: alpha(theme.palette.secondary.main, 0.3),
                  bgcolor: alpha(
                    theme.palette.secondary.main,
                    theme.palette.mode === 'dark' ? 0.04 : 0.02,
                  ),
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    mb: 2.5,
                    display: 'block',
                  }}
                >
                  {group.category}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {group.items.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      variant="outlined"
                      size="medium"
                      sx={{
                        fontWeight: 500,
                        fontSize: '0.85rem',
                        transition: 'all 0.2s ease',
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsPage;
