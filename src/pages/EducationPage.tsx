import React from 'react';
import { Box, Typography, Paper, Divider, alpha, useTheme } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { education } from '../data/portfolio';

const EducationPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ pb: 6 }}>
      <Box sx={{ mb: 6, pt: { xs: 2, md: 4 } }}>
        <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: '0.2em', mb: 2, display: 'block' }}>
          EDUCATION // 005
        </Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', mb: 3 }}>
          Academic <br />background.
        </Typography>
      </Box>

      <Divider sx={{ mb: 6, opacity: 0.15 }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        {education.map((item) => (
          <Paper
            key={item.id}
            elevation={0}
            sx={{
              display: 'flex',
              gap: { xs: 2, md: 2.5 },
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
            {/* Icon */}
            <Box
              sx={{
                width: 44, height: 44, borderRadius: 2,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                bgcolor: alpha(theme.palette.secondary.main, 0.1),
                color: 'secondary.main',
                flexShrink: 0,
              }}
            >
              <SchoolOutlinedIcon />
            </Box>

            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap', mb: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.3 }}>
                  {item.institution}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500, letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                  {item.period}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.5 }}>
                {item.program}
              </Typography>
              {item.details && (
                <Typography variant="caption" sx={{ color: 'text.secondary', opacity: 0.7, mt: 0.5, display: 'block' }}>
                  {item.details}
                </Typography>
              )}
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default EducationPage;
