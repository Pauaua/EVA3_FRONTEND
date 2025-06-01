import ServiceCard from "./ServiceCard";

const ProductsSection = () => {
  const products = [
    {
      image: "https://via.placeholder.com/300",
      title: "Mantel Bordado Vintage",
      description: "Mantel antiguo en perfecto estado, ideal para decoración.",
      productName: "Mantel Bordado",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Vajilla de Porcelana",
      description: "Juego de vajilla años 60, coleccionable.",
      productName: "Vajilla de Porcelana", // Agregado para mantener consistencia
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Juego de Té Antiguo",
      description: "Juego de té de cerámica, perfecto para coleccionistas.",
      productName: "Vajilla de Porcelana", // Agregado para mantener consistencia
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product, index) => (
        <ServiceCard
          key={index}
          image={product.image}
          title={product.title}
          description={product.description}
          productName={product.productName}
        />
      ))}
    </div>
  );
};

export default ProductsSection;