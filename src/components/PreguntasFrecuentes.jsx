import { useEffect, useState } from 'react';
import { fetchFaqs } from '../utils/api';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const API_URL_FAQ = 'https://682d141c4fae18894754cf18.mockapi.io/preguntas';

const PreguntasFrecuentesSection = () => {
    const [dataFaq, setDataFaq] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
            const fetchData = async () => {
                try {
                    const [faqsRes] = await Promise.all([
                        fetch(API_URL_FAQ)
                    ]);
                    if (!faqsRes.ok) throw new Error('Error al obtener las preguntas');
                    const faqs = await faqsRes.json();
                    setDataFaq(faqs);
                    setLoading(false);
                } catch (err) {
                    setError(err.message);
                    setLoading(false);
                }
            };
            fetchData();
        }, []);

    if (loading) return <Typography>Cargando preguntas frecuentes...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;
    if(!dataFaq) return null
    console.log(dataFaq);

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Preguntas Frecuentes
            </Typography>
            {dataFaq.map((faq, idx) => (
                <Accordion key={idx}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{faq.pregunta}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{faq.respuesta}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default PreguntasFrecuentesSection;