import { useEffect, useState } from 'react';
import { getProducts } from '../utils/api';
import { Grid, Card, CardMedia, Typography, CardContent } from '@mui/material';


const ServiceCard = ()=> {
  
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


export default ServiceCard;