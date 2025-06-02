import React from 'react';

/**
 * Botón fijo en la esquina inferior derecha para contacto directo por WhatsApp.
 */
function WhatsAppButton() {
  const phoneNumber = '56912345678'; // Cambia por tu número real
  const message = '¡Hola! Quiero más información, por favor.';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '60px',
        height: '60px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
        zIndex: 1000,
        fontSize: '32px',
        transition: 'box-shadow 0.2s',
      }}
      aria-label="Chatea por WhatsApp"
      title="Chatea por WhatsApp"
    >
      <span role="img" aria-label="WhatsApp">💬</span>
    </a>
  );
}

export default WhatsAppButton;