import React from 'react';
import {
  Box, Typography, Grid, Card, CardContent, Divider, alpha, useTheme,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { projects } from '../data/portfolio';

const ProjectsPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ pb: 6 }}>
      <Box sx={{ mb: 6, pt: { xs: 2, md: 4 } }}>
        <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: '0.2em', mb: 2, display: 'block' }}>
          PROJECTS // 003
        </Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', mb: 3 }}>
          Things I've <br />built.
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '500px', fontSize: '1.1rem', lineHeight: 1.7 }}>
          A collection of projects spanning full-stack development, data science, and algorithm design.
        </Typography>
      </Box>

      <Divider sx={{ mb: 6, opacity: 0.15 }} />

      <Grid container spacing={{ xs: 2, md: 3 }}>
        {projects.map((project) => (
          <Grid size={{ xs: 12, sm: 6 }} key={project.id + project.title}>
            <Card
              component="a"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                height: '100%', display: 'flex', flexDirection: 'column',
                border: '1px solid', borderColor: 'divider',
                textDecoration: 'none', color: 'inherit', cursor: 'pointer',
                transition: 'all 0.25s ease',
                '&:hover': {
                  borderColor: alpha(theme.palette.secondary.main, 0.4),
                  transform: 'translateY(-4px)',
                  boxShadow: isDark ? `0 12px 32px ${alpha('#000', 0.5)}` : `0 12px 32px ${alpha('#000', 0.1)}`,
                  '& .project-title': { color: 'secondary.main' },
                  '& .project-arrow': { color: 'secondary.main', transform: 'translate(2px, -2px)' },
                },
              }}
            >
              <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                  <GitHubIcon sx={{ fontSize: 28, color: 'secondary.main' }} />
                  <OpenInNewIcon className="project-arrow" sx={{ fontSize: 18, color: 'text.secondary', opacity: 0.5, transition: 'all 0.2s ease' }} />
                </Box>
                <Typography variant="h6" className="project-title" sx={{ fontWeight: 700, lineHeight: 1.3, mb: 1.5, transition: 'color 0.2s' }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, flex: 1, mb: 3 }}>
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 'auto' }}>
                  {project.tags.map((tag) => (
                    <Typography key={tag} variant="caption" sx={{ color: 'text.secondary', fontWeight: 500, letterSpacing: '0.05em', fontSize: '0.75rem' }}>
                      {tag}
                    </Typography>
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

export default ProjectsPage;
