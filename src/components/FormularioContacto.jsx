import React, {useEffect, useState} from 'react';
import { Box, Typography } from "@mui/material";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const API_URL_PRODUCT = 'https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1/products-services/'


function FormularioContacto(){
    const [dataProduct, setDataProduct] = useState([]); // Inicializa como un array vacío
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState('');
    const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });

    useEffect(() => {
        const traerDatos = async () => {
            try {
                const headers = {Authorization:'Bearer ipss.get'}
                //const proxy = 'https://cors-anywhere.herokuapp.com/'
                const responseAbout = await fetch(API_URL_PRODUCT,{headers})
                if (!responseAbout.ok) {
                    throw new Error('Error al cargar los datos, la API no está funcionando :(')
                }
                const dataAbout = await responseAbout.json()

                console.log(dataAbout)
                setDataProduct(dataAbout.data?.productos || []); // Asegúrate de que sea un array
            }
            catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        }
        traerDatos();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleProductChange = (e) => {
        const productId = e.target.value;
        const product = dataProduct.find((prod) => prod.id === productId);
        setSelectedProduct(product);
        setSelectedPrice(''); // Reset selected price when product changes
    };

    const handlePriceChange = (e) => {
        setSelectedPrice(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', { ...formData, selectedProduct, selectedPrice });
    };

    if(loading) return <div>Cargando...</div>
    if(error) return <div>Error: {error}</div>
    if (!Array.isArray(dataProduct)) return <div>Error: Los datos no son válidos</div>; // Verifica que sea un array

    return(
        <>
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
                    <Select value={selectedProduct?.id || ''} onChange={handleProductChange} required>
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
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    Enviar
                </Button>
            </Box>
        </>
    )
}
export default FormularioContacto;