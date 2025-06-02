const API_BASE = 'https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1/';
const TOKEN = 'ipss.get';
const cache = {};

/**
 * Realiza una petición GET autenticada y cachea la respuesta.
 * Devuelve solo el contenido de la propiedad 'data' del backend.
 */
export const fetchWithAuth = async (endpoint) => {
  if (cache[endpoint]) return cache[endpoint];

  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error al obtener datos: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log(`Respuesta de ${endpoint}:`, result);

    // Devuelve solo la propiedad 'data' para que el componente reciba el array esperado
    cache[endpoint] = result.data;
    return result.data;
  } catch (error) {
    console.error(`Error en fetchWithAuth para ${endpoint}:`, error);
    throw error;
  }
};

export const fetchProducts = async () => {
  const data = await fetchWithAuth('/products-services/');
  // Si la respuesta es { productos: [...] }
  if (data && Array.isArray(data.productos)) {
    return data.productos;
  }
  // Si la respuesta es un array directo
  if (Array.isArray(data)) {
    return data;
  }
  // Si no hay productos
  return [];
};

// Endpoints específicos
export const fetchAboutUs = () => fetchWithAuth('/about-us/');
export const fetchFaqs = () => fetchWithAuth('/faq/');
