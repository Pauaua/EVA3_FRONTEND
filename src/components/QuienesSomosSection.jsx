import React, { useEffect, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { fetchAboutUs } from '../utils/api';

/**
 * Muestra la sección "Quiénes Somos" con imagen centrada y texto desde la API.
 */
function QuienesSomosSection() {
    const [aboutText, setAboutText] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const aboutImage = "./aboutus.png"; 

    useEffect(() => {
        fetchAboutUs()
            .then(data => {
                setAboutText(typeof data === 'string' ? data : data.descripcion || JSON.stringify(data));
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h1" color="purple" sx={{ fontWeight: 'bold', my: 2, py: 4, textAlign: 'center' }}>
                Quiénes Somos
            </Typography>
            <img
                src={aboutImage}
                alt="Quiénes Somos"
                style={{
                    width: 220,
                    height: 220,
                    objectFit: 'cover',
                    borderRadius: '50%',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                    display: 'block',
                    margin: '0 auto'
                }}
            />
            <Typography
                variant="h4"
                sx={{
                    mt: 6,
                    mb: 4,
                    textAlign: 'center',
                    fontStyle: 'italic',
                    fontWeight: 400
                }}
            >
                {aboutText || 'No hay descripción disponible.'}
            </Typography>
        </Box>
    );
}

export default QuienesSomosSection;