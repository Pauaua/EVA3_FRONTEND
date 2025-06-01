import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";

const FormularioContacto = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    producto: location.state?.producto || "", // Prellena el campo si viene de ServiceCard
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Aquí iría la lógica para enviar los datos al servidor
    navigate("/"); // Redirige a la página principal después de enviar
  };

  return (
    <Box sx={{ maxWidth: 500, margin: "auto", p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Contáctanos
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Producto de interés"
          name="producto"
          value={formData.producto}
          onChange={handleChange}
          margin="normal"
          disabled // Opcional: dejar como solo lectura
        />
        <TextField
          fullWidth
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Mensaje"
          name="mensaje"
          multiline
          rows={4}
          value={formData.mensaje}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default FormularioContacto;