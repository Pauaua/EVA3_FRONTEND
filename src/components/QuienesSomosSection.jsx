// src/components/AboutSection.jsx
import { useEffect, useState } from 'react';
import { getAboutUs } from '../utils/api';
import { Typography, Box } from '@mui/material';

const QuienesSomosSection = () => {
  const [about, setAbout] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAboutUs()
      .then(data => setAbout(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <Typography color="error">{error}</Typography>;
  if (!about) return <Typography>Cargando...</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        {about.title}
      </Typography>
      <Typography paragraph>
        {about.description}
      </Typography>
      <Typography variant="h6">
        Horario: {about.schedule}
      </Typography>
    </Box>
  );
};

export default QuienesSomosSection;