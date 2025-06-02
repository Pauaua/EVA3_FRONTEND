import Carrousel from "./Carrousel";

const carrouselItems = [
  {
    image: "./banner1.png",
    altText: "Mantel bordado vintage",
    title: "Colección Otoño 2023",
  },
  {
    image: "./banner2.png",
    altText: "Vajilla de porcelana",
    title: "Edición Limitada",
  },
  {
    image: "./banner3.png",
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