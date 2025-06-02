import { useEffect, useState } from 'react';
import { fetchFaqs } from '../utils/api';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/**
 * Muestra preguntas frecuentes desde la API en formato acordeón.
 */
const PreguntasFrecuentesSection = () => {
    const [dataFaq, setDataFaq] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchFaqs()
            .then(data => {
                if (Array.isArray(data)) {
                    setDataFaq(data);
                } else if (Array.isArray(data.faqs)) {
                    setDataFaq(data.faqs);
                } else if (Array.isArray(data.preguntas)) {
                    setDataFaq(data.preguntas);
                } else {
                    setDataFaq([]);
                }
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <Typography>Cargando preguntas frecuentes...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;
    if (!dataFaq.length) return <Typography>No hay preguntas frecuentes disponibles.</Typography>;

    return (
        <div>
            <Typography variant="h2" color="purple" gutterBottom>
                Preguntas Frecuentes
            </Typography>
            {dataFaq.map((faq, idx) => (
                <Accordion key={idx}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{faq.titulo || faq.pregunta || faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{faq.respuesta || faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default PreguntasFrecuentesSection;