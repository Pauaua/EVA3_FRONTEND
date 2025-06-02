import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, useMediaQuery, useTheme } from '@mui/material';

function PopUp() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          m: isMobile ? 1 : 3,
        }
      }}
    >
      <DialogTitle color="purple"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: isMobile ? '1.2rem' : isTablet ? '1.5rem' : '1.7rem',
          pb: isMobile ? 1 : 2
        }}
      >
        ¡ACCEDE YA A NUESTRA EDICIÓN LIMITADA!
      </DialogTitle>
      <DialogContent sx={{ textAlign: 'center', px: isMobile ? 1 : 3 }}>
        <Box
          component="img"
          src="./popup-image.png" 
          alt="Edición limitada"
          sx={{
            width: '100%',
            maxHeight: isMobile ? 120 : 180,
            objectFit: 'cover',
            borderRadius: 2,
            mb: isMobile ? 1.5 : 2
          }}
        />
        <Typography
          variant="body1"
          sx={{
            mb: isMobile ? 1.5 : 2,
            fontSize: isMobile ? '1rem' : '1.1rem'
          }}
        >
          ¡No te pierdas la oportunidad de adquirir piezas únicas y exclusivas de nuestra colección especial!
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: isMobile ? 1 : 2 }}>
        <Button
          onClick={handleClose}
          color="secondary"
          sx={{
            fontSize: isMobile ? '0.95rem' : '1.05rem',
            px: isMobile ? 2 : 3,
            py: isMobile ? 1 : 1.5
          }}
        >
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PopUp;