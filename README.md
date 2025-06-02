# Antigüedades Sthandier

Antigüedades Sthandier es una SPA (Single Page Application) desarrollada en React que permite a los usuarios explorar productos y servicios de antigüedades, conocer la historia de la empresa, resolver dudas frecuentes y contactar directamente al equipo, todo de manera responsiva y accesible.

## Objetivo

Brindar una experiencia digital moderna y eficiente para conectar a los clientes con piezas antiguas europeas, destacando la historia y exclusividad de cada objeto.

## Estructura del proyecto

- `/src/components`: Componentes reutilizables (Navbar, Footer, ProductsSection, QuienesSomosSection, PreguntasFrecuentes, FormularioContacto, WhatsAppButton, PopUp, etc).
- `/src/pages`: Páginas principales de la SPA (HomePage, ProductsPage, QuienesSomosPage, PreguntasFrecuentesPage, ContactoPage).
- `/src/utils`: Utilidades para consumo de API.
- `/public`: Imágenes y recursos estáticos.
- `/src/App.jsx`: Configuración de rutas y layout principal.

## Requisitos previos

- Node.js >= 18.x
- npm >= 9.x

## Instalación

```bash
npm install
npm run dev
```

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
VITE_API_BASE=https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1/
VITE_API_TOKEN=ipss.get
```

## Uso de componentes

- **Navbar**: Navegación principal, responsiva y con rutas SPA.
- **ProductsSection**: Muestra productos desde la API, cards responsivas, feedback visual y navegación al contacto.
- **QuienesSomosSection**: Muestra información de la empresa desde la API.
- **PreguntasFrecuentes**: Acordeón con preguntas frecuentes desde la API.
- **FormularioContacto**: Formulario validado, selecciona producto desde card, feedback de envío.
- **WhatsAppButton**: Botón fijo para contacto directo por WhatsApp.
- **PopUp**: Ejemplo de popup informativo reutilizable.
- **apiErrorHandler**: Muestra errores de API y permite reintentar.

## Navegación y funcionalidades

- Navegación SPA sin recarga de página.
- Selección de producto desde la card para contacto rápido.
- Feedback visual en carga, errores y envío de formularios.
- Diseño responsivo (desktop, tablet, móvil).
- Accesibilidad: uso de roles, aria-labels y contraste adecuado.

## Ejemplo de uso

```jsx
import ProductsSection from './components/ProductsSection';

function ProductsPage() {
  return <ProductsSection />;
}
```
## Accesibilidad y buenas prácticas

El proyecto sigue buenas prácticas de accesibilidad (uso de roles, aria-labels, contraste adecuado) y de desarrollo (código modular, documentación y manejo de errores).

## Capturas de pantalla

![Home](./public/screenshot-homepage1.png)
![Home](./public/screenshot-homepage2.png)
![Home](./public/screenshot-homepage3.png)

![Productos](./public/screenshot-productos1.png)

## Créditos

- [React](https://react.dev/)
- [Material UI](https://mui.com/)
- API proporcionada por CIISA

## Uso IA

Utilización de IA para arreglar y perfeccionar componentes, además de generación de documentación. 


## Licencia

MIT

## Referencias

- [Documentación oficial de React](https://react.dev/)
- [Guía de Material UI](https://mui.com/)