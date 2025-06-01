// src/pages/ApiTestPage.jsx
import { getProducts, getAboutUs, getFaqs } from '../utils/api';
import { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';

const ApiTestPage = () => {
  const [data, setData] = useState({ products: [], about: null, faqs: [] });

  useEffect(() => {
    Promise.all([getProducts(), getAboutUs(), getFaqs()])
      .then(([products, about, faqs]) => setData({ products, about, faqs }))
      .catch(console.error);
  }, []);

  return (
    <Box>
      <Typography variant="h4">Datos de API:</Typography>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Box>
  );
};

export default ApiTestPage;