import { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, Typography, CardContent } from '@mui/material';
import { fetchProducts } from '../utils/api';

const ProductsSection = () => {
    const [dataProduct, setDataProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) return <Typography>Cargando productos...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Grid container spacing={3} columns={{ xs: 1, sm: 3, md: 6 }}>
            {dataProduct.map((prod) => (
                <Grid
                    key={prod.id || `${prod.nombre}-${Math.random()}`}
                    sx={{
                        gridColumn: {
                            xs: 'span 1',
                            sm: 'span 1',
                            md: 'span 1',
                        }
                    }}
                >
                    <Card>
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
    );
};

export default ProductsSection;