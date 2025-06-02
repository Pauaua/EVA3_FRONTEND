import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { fetchProducts } from '../utils/api';
import { useLocation } from 'react-router-dom';

/**
 * Formulario de contacto con validación y selección automática de producto.
 * Muestra feedback visual al enviar.
 */
function FormularioContacto() {
    const [dataProduct, setDataProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState('');
    const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });

    const location = useLocation();

    useEffect(() => {
        fetchProducts()
            .then(productos => {
                setDataProduct(productos);
                if (location.state && location.state.productId) {
                    const prod = productos.find(p => p.id === location.state.productId);
                    if (prod) setSelectedProduct(prod);
                }
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [location.state]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleProductChange = (e) => {
        const productId = e.target.value;
        const product = dataProduct.find((prod) => prod.id === productId);
        setSelectedProduct(product);
        setSelectedPrice('');
    };

    const handlePriceChange = (e) => {
        setSelectedPrice(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.nombre || !formData.correo || !formData.mensaje) {
            setSubmitStatus({ type: 'error', msg: 'Completa todos los campos obligatorios.' });
            return;
        }
        setSubmitStatus({ type: 'loading', msg: 'Enviando...' });
        setTimeout(() => {
            setSubmitStatus({ type: 'success', msg: '¡Mensaje enviado con éxito!' });
        }, 1200);
    };

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error.message || error.toString()}</div>;
    if (!Array.isArray(dataProduct)) return <div>Error: Los datos no son válidos</div>;

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ padding: 2, maxWidth: 500, margin: '0 auto' }}>
            <Typography variant="h4" gutterBottom>
                Formulario de Contacto
            </Typography>
            <TextField
                fullWidth
                label="Nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Correo"
                name="correo"
                type="email"
                value={formData.correo}
                onChange={handleInputChange}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                margin="normal"
                multiline
                rows={4}
                required
            />
            <FormControl fullWidth margin="normal">
                <InputLabel>Producto</InputLabel>
                <Select
                    value={selectedProduct?.id || ''}
                    onChange={handleProductChange}
                    required
                >
                    {dataProduct.map((prod) => (
                        <MenuItem key={prod.id} value={prod.id}>
                            {prod.nombre}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {selectedProduct?.precios ? (
                <FormControl fullWidth margin="normal">
                    <InputLabel>Precio</InputLabel>
                    <Select value={selectedPrice} onChange={handlePriceChange} required>
                        {selectedProduct.precios.map((precio, index) => (
                            <MenuItem key={index} value={precio.precio}>
                                {precio.Nombre} - ${precio.precio}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            ) : (
                selectedProduct?.precio && (
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Precio: ${selectedProduct.precio}
                    </Typography>
                )
            )}
            {submitStatus && (
                <Typography color={submitStatus.type === 'error' ? 'error' : 'primary'} sx={{ mt: 2 }}>
                    {submitStatus.msg}
                </Typography>
            )}
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Enviar
            </Button>
        </Box>
    );
}

export default FormularioContacto;