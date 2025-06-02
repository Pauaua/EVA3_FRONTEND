import { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, Typography, CardContent, Skeleton } from '@mui/material';
import { fetchProducts } from '../utils/api';
import { useNavigate } from 'react-router-dom';

/**
 * Muestra una grilla de productos y servicios obtenidos desde la API.
 * Al hacer click en una card, redirige al formulario de contacto con el producto seleccionado.
 */
const ProductsSection = () => {
    const [dataProduct, setDataProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts()
            .then(productos => {
                setDataProduct(productos);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return (
        <Grid container spacing={3} columns={{ xs: 1, sm: 3, md: 6 }}>
            {[...Array(6)].map((_, i) => (
                <Grid key={i} sx={{ gridColumn: 'span 1' }}>
                    <Skeleton variant="rectangular" width="100%" height={200} />
                    <Skeleton width="60%" />
                    <Skeleton width="80%" />
                </Grid>
            ))}
        </Grid>
    );
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <>
            <Typography variant="h1" color="purple" sx={{ fontWeight: 'bold', mb: 4, mt: 4, py: 8 }}>
                Productos y Servicios
            </Typography>
            <Grid container spacing={3} columns={{ xs: 1, sm: 3, md: 6 }}>
                {dataProduct.map((prod) => (
                    <Grid
                        key={prod.id || `${prod.nombre}-${Math.random()}`}
                        sx={{ gridColumn: 'span 1' }}
                    >
                        <Card
                            sx={{
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'scale(1.04)',
                                    boxShadow: '0 8px 32px rgba(80,0,120,0.18), 0 1.5px 8px rgba(80,0,120,0.10)'
                                }
                            }}
                            onClick={() => navigate('/contacto', { state: { productId: prod.id } })}
                            aria-label={`Ir al formulario de contacto para ${prod.nombre}`}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image={
                                    Array.isArray(prod.imgs) && prod.imgs.length > 0
                                        ? prod.imgs[0]
                                        : 'https://via.placeholder.com/200'
                                }
                                alt={prod.nombre}
                            />
                            <CardContent>
                                <Typography variant="h6">{prod.nombre}</Typography>
                                <Typography>{prod.descripcion}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Precio: ${prod.precio}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default ProductsSection;