import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
//add
const ServiceCard = ({ image, title, description, productName }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    // Redirige al formulario de contacto con el producto prellenado
    navigate("/contacto", { state: { producto: productName || title } });
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 2, boxShadow: 3 }}>
      {/* Imagen del producto */}
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ objectFit: "cover" }}
      />

      {/* Título y descripción */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      {/* Botón "Contáctanos" */}
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={handleContactClick}
          sx={{ marginLeft: "auto" }}
        >
          Contáctanos
        </Button>
      </CardActions>
    </Card>
  );
};

// Validación de props
ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  productName: PropTypes.string, 
};

export default ServiceCard;