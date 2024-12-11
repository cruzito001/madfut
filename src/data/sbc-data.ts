// Definición de tipos
interface SBCTemplate {
  name: string;
  imageUrl: string;
}

interface SBCGroup {
  name: string;
  imageUrl: string;
  templatesCount: number;
  templates: SBCTemplate[];
  order: number; // Nuevo campo para indicar el orden/antigüedad
}

// Datos iniciales
const sbcGroups: SBCGroup[] = [
  {
    name: "POTM Erling Haaland",
    imageUrl: "/images/sbc/potm-haaland.jpg",
    templatesCount: 8,
    templates: [
      {
        name: "Norway",
        imageUrl: "/images/sbc/haaland/norway.jpg",
      },
      {
        name: "Molde",
        imageUrl: "/images/sbc/haaland/molde.jpg",
      },
      {
        name: "RB Salzburg",
        imageUrl: "/images/sbc/haaland/rb-salzburg.jpg",
      },
      {
        name: "Borussia Dortmund",
        imageUrl: "/images/sbc/haaland/borussia-dortmund.jpg",
      },
      {
        name: "Manchester City",
        imageUrl: "/images/sbc/haaland/manchester-city.jpg",
      },
      {
        name: "Record Breaker",
        imageUrl: "/images/sbc/haaland/record-breaker.jpg",
      },
      {
        name: "Mega Start",
        imageUrl: "/images/sbc/haaland/mega-start.jpg",
      },
      {
        name: "Haaland Hybrid",
        imageUrl: "/images/sbc/haaland/haaland-hybrid.jpg",
      },
    ],
    order: 1, // El más antiguo
  },
  {
    name: "Andrew Robertson",
    imageUrl: "/images/sbc/andrew-robertson.jpg",
    templatesCount: 0,
    templates: [],
    order: 2,
  },
  {
    name: "Ligue 1",
    imageUrl: "/images/sbc/ligue-1.jpg",
    templatesCount: 0,
    templates: [],
    order: 3,
  },
  {
    name: "Radja Nainggolan",
    imageUrl: "/images/sbc/radja-nainggolan.jpg",
    templatesCount: 0,
    templates: [],
    order: 4,
  },
  {
    name: "Raúl",
    imageUrl: "/images/sbc/raul.jpg",
    templatesCount: 0,
    templates: [],
    order: 5,
  },
  {
    name: "Rodri",
    imageUrl: "/images/sbc/rodri.jpg",
    templatesCount: 0,
    templates: [],
    order: 6,
  },
  {
    name: "Mats Hummels",
    imageUrl: "/images/sbc/mats-hummels.jpg",
    templatesCount: 0,
    templates: [],
    order: 7,
  },
  {
    name: "Stephan El Shaarawy",
    imageUrl: "/images/sbc/stephan-el-shaarawy.jpg",
    templatesCount: 0,
    templates: [],
    order: 8, // El más reciente
  },
];

export default sbcGroups;
