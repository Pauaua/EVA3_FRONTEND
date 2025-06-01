// src/components/FaqSection.jsx
import { useEffect, useState } from 'react';
import { getFaqs } from '../utils/api';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PreguntasFrecuentesSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFaqs()
      .then(data => setFaqs(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Preguntas Frecuentes
      </Typography>
      {faqs.map((faq) => (
        <Accordion key={faq.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default PreguntasFrecuentesSection;