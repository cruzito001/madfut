interface SBCTemplate {
  name: string;
  imageUrl: string;
}

interface SBCGroup {
  name: string;
  imageUrl: string;
  templatesCount: number;
  templates: SBCTemplate[];
  order: number;
}

const sbcGroups: SBCGroup[] = [
  {
    name: "POTM Haaland",
    imageUrl: "/sbc/haaland/haaland.png",
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
    order: 1,
  },
  {
    name: "Andrew Robertson",
    imageUrl: "/sbc/robertson/robertson.png",
    templatesCount: 0,
    templates: [],
    order: 2,
  },
  {
    name: "Ligue 1",
    imageUrl: "/sbc/ligue1/ligue1.png",
    templatesCount: 0,
    templates: [],
    order: 3,
  },
  {
    name: "Radja Nainggolan",
    imageUrl: "/sbc/nainggolan/nainggolan.png",
    templatesCount: 0,
    templates: [],
    order: 4,
  },
  {
    name: "Raúl",
    imageUrl: "/sbc/raul/raul.png",
    templatesCount: 0,
    templates: [],
    order: 5,
  },
  {
    name: "Rodri",
    imageUrl: "/sbc/rodri/rodri.png",
    templatesCount: 0,
    templates: [],
    order: 6,
  },
  {
    name: "Mats Hummels",
    imageUrl: "/sbc/hummels/hummels.png",
    templatesCount: 0,
    templates: [],
    order: 7,
  },
  {
    name: "El Shaarawy",
    imageUrl: "/sbc/shaarawy/shaarawy.png",
    templatesCount: 0,
    templates: [],
    order: 8,
  },
];

export default sbcGroups;
