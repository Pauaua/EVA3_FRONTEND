import React, {useEffect, useState} from 'react';

const API_URL_ABOUTUS = 'https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1/about-us/';
import { Box, Typography } from "@mui/material";

function QuienesSomosSection(){
    const [aboutText, setAboutText] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [response] = await Promise.all([
                    fetch(API_URL_ABOUTUS)
                ]);
                if (!response.ok) throw new Error('Error al obtener la información');
                const result = await response.json();
                setAboutText(result.data || '');
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if(loading) return <div>Cargando...</div>
    if(error) return <div>Error: {error}</div>
    
    //print data
    console.log(aboutText);

    return(
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
    )
}
export default QuienesSomosSection;