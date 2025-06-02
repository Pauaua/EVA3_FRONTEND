const API_BASE = 'https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1';
const TOKEN = 'ipss.get';
const cache = {};

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

    const data = await response.json();
    console.log(`Respuesta de ${endpoint}:`, data); // <-- Para depuración
    cache[endpoint] = data;
    return data;
  } catch (error) {
    console.error(`Error en fetchWithAuth para ${endpoint}:`, error);
    throw error;
  }
};

// Endpoints específicos
export const fetchProducts = () => fetchWithAuth('/products-services/');
export const fetchAboutUs = () => fetchWithAuth('/about-us/');
export const fetchFaqs = () => fetchWithAuth('/faq/');
