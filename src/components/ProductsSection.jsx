// src/components/ProductsSection.jsx
import { useEffect, useState } from 'react';
import { getProducts } from '../utils/api';
import { Grid, Card, CardMedia, Typography, CardContent } from '@mui/material';

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Typography>Cargando productos...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={product.image_url}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography>{product.description}</Typography>
              <Typography variant="body2" color="text.secondary">
                Precio: ${product.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsSection;