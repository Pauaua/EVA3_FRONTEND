import Carrousel from "./Carrousel";

const carrouselItems = [
  {
    image: "https://via.placeholder.com/800x500?text=Producto+1",
    altText: "Mantel bordado vintage",
    title: "Colección Otoño 2023",
  },
  {
    image: "https://via.placeholder.com/800x500?text=Producto+2",
    altText: "Vajilla de porcelana",
    title: "Edición Limitada",
  },
];

function CarrouselSection() {
  return (
    <>
      <Carrousel items={carrouselItems} />
      {/* Otros componentes... */}
    </>
  );
}

export default CarrouselSection;