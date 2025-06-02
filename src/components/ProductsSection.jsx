import { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, Typography, CardContent } from '@mui/material';
import { fetchProducts } from '../utils/api';
const API_URL_PRODUCT = 'https://682d141c4fae18894754cf18.mockapi.io/products';


const ProductsSection = () => {
    const [dataProduct, setDataProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [productsRes] = await Promise.all([
                    fetch(API_URL_PRODUCT)
                ]);
                if (!productsRes.ok) throw new Error('Error al obtener los productos');
                const products = await productsRes.json();
                setDataProduct(products);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <Typography>Cargando productos...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Grid container spacing={3}>
            {dataProduct.map((prod) => (
                <Grid item xs={12} sm={6} md={4} key={prod.id}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image={prod.imgs || 'https://via.placeholder.com/200'}  
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