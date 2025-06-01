// src/components/ApiErrorHandler.jsx
import { useEffect } from 'react';
import { Typography, Button } from '@mui/material';

const ApiErrorHandler = ({ error, onRetry }) => {
  useEffect(() => {
    // Opcional: Loggear errores a un servicio como Sentry
    console.error('API Error:', error);
  }, [error]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography color="error" variant="h6">
        Error al cargar datos
      </Typography>
      <Typography paragraph>{error.message}</Typography>
      <Button variant="contained" onClick={onRetry}>
        Reintentar
      </Button>
    </div>
  );
};

export default ApiErrorHandler;