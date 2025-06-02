import React, { useEffect, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { fetchAboutUs } from '../utils/api';

function QuienesSomosSection() {
    const [aboutText, setAboutText] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAboutUs()
            .then(data => {
                // Si la API devuelve un objeto, ajusta aquí según la estructura real
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
        <>
            <Box sx={{ padding: 2 }}>
                <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Quiénes Somos
                </Typography>
            </Box>
            <Box sx={{ padding: 2 }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    {aboutText || 'No hay descripción disponible.'}
                </Typography>
            </Box>
        </>
    );
}

export default QuienesSomosSection;