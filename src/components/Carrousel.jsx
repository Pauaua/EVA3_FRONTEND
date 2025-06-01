import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const Carrousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Navegación automática (opcional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        borderRadius: 2,
        boxShadow: 3,
      }}
      aria-label="Carrusel de productos"
    >
      {/* Contenedor de imágenes */}
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.5s ease",
          transform: `translateX(-${currentIndex * 100}%)`,
          height: isMobile ? "300px" : "500px",
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              minWidth: "100%",
              position: "relative",
            }}
          >
            <img
              src={item.image}
              alt={item.altText || `Imagen ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              loading="lazy" // Optimización
            />
            {/* Texto descriptivo (opcional) */}
            <Typography
              variant="h5"
              sx={{
                position: "absolute",
                bottom: 20,
                left: 20,
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: 1,
                borderRadius: 1,
              }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Botones de navegación */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: 10,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
        }}
        aria-label="Anterior"
      >
        <KeyboardArrowLeft fontSize="large" />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
        }}
        aria-label="Siguiente"
      >
        <KeyboardArrowRight fontSize="large" />
      </IconButton>

      {/* Indicadores de posición */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: 20,
          width: "100%",
          gap: 1,
        }}
      >
        {items.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor:
                currentIndex === index ? "primary.main" : "grey.400",
              cursor: "pointer",
            }}
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </Box>
    </Box>
  );
};

// Validación de props
Carrousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      altText: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default Carrousel;