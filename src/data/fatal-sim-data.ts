interface FatalSimSolution {
  imageUrl: string;
}

interface FatalSimSeries {
  name: string;
  seriesNumber: number;
  solutions: FatalSimSolution[];
  order: number;
}

const fatalSimSeries: FatalSimSeries[] = [
  {
    name: "Series 82",
    seriesNumber: 82,
    solutions: [
      { imageUrl: "/fatal-sim/series82/1.webp" },
      { imageUrl: "/fatal-sim/series82/2.webp" },
    ],
    order: 1,
  },
  {
    name: "Series 84",
    seriesNumber: 84,
    solutions: [
      { imageUrl: "/fatal-sim/series84/1.webp" },
      { imageUrl: "/fatal-sim/series84/2.webp" },
    ],
    order: 2,
  },
  {
    name: "Series 86",
    seriesNumber: 86,
    solutions: [
      { imageUrl: "/fatal-sim/series86/1.webp" },
      { imageUrl: "/fatal-sim/series86/2.webp" },
    ],
    order: 3,
  },
  {
    name: "Series 89",
    seriesNumber: 89,
    solutions: [
      { imageUrl: "/fatal-sim/series89/1.webp" },
      { imageUrl: "/fatal-sim/series89/2.webp" },
      { imageUrl: "/fatal-sim/series89/3.webp" },
    ],
    order: 4,
  },
  {
    name: "Series 91",
    seriesNumber: 91,
    solutions: [
      { imageUrl: "/fatal-sim/series91/1.webp" },
      { imageUrl: "/fatal-sim/series91/2.webp" },
    ],
    order: 5,
  },
  {
    name: "Series 94",
    seriesNumber: 94,
    solutions: [
      { imageUrl: "/fatal-sim/series94/1.webp" },
      { imageUrl: "/fatal-sim/series94/2.webp" },
    ],
    order: 6,
  },
  {
    name: "Series X",
    seriesNumber: 99,
    solutions: [
      { imageUrl: "/fatal-sim/seriesX/1.webp" },
      { imageUrl: "/fatal-sim/seriesX/2.webp" },
      { imageUrl: "/fatal-sim/seriesX/3.webp" },
    ],
    order: 7,
  },
];

export default fatalSimSeries;
