import React from 'react';
import { Box, Typography, Paper, Divider, alpha, useTheme } from '@mui/material';
import { experience } from '../data/portfolio';

const ExperiencePage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ pb: 6 }}>
      <Box sx={{ mb: 6, pt: { xs: 2, md: 4 } }}>
        <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: '0.2em', mb: 2, display: 'block' }}>
          EXPERIENCE // 004
        </Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', mb: 3 }}>
          Where I've <br />worked.
        </Typography>
      </Box>

      <Divider sx={{ mb: 6, opacity: 0.15 }} />

      {/* Timeline */}
      <Box sx={{ position: 'relative', pl: { xs: 3, md: 4 } }}>
        {/* Vertical line */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '5px', md: '7px' },
            top: 8,
            bottom: 8,
            width: '2px',
            bgcolor: 'divider',
          }}
        />

        {experience.map((item, idx) => (
          <Box key={item.id} sx={{ position: 'relative', pb: idx === experience.length - 1 ? 0 : 4 }}>
            {/* Dot */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: -27, md: -33 },
                top: 14,
                width: 12,
                height: 12,
                borderRadius: '50%',
                border: '2px solid',
                borderColor: 'secondary.main',
                bgcolor: idx === 0 ? 'secondary.main' : 'background.paper',
                zIndex: 1,
              }}
            />

            <Paper
              elevation={0}
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: alpha(theme.palette.secondary.main, 0.3),
                  bgcolor: alpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.04 : 0.02),
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap', mb: 0.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem' }}>
                  {item.company}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500, letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                  {item.period}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 600, mb: item.description ? 1 : 0 }}>
                {item.role}
              </Typography>
              {item.description && (
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5, lineHeight: 1.6 }}>
                  {item.description}
                </Typography>
              )}
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ExperiencePage;
