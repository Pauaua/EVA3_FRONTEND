const API_BASE = 'https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1';
const TOKEN = 'ipss.get';
const cache = {};

export const fetchWithAuth = async (endpoint) => {
  if (cache[endpoint]) return cache[endpoint];

  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    }
  });
  
  if (!response.ok) throw new Error('Error al obtener datos');
  
  const data = await response.json();
  cache[endpoint] = data;
  return data;
};

// Endpoints específicos
export const getProducts = () => fetchWithAuth('/products-services/');
export const getAboutUs = () => fetchWithAuth('/about-us/');
export const getFaqs = () => fetchWithAuth('/faq/');

