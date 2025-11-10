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
    name: "Series 67",
    seriesNumber: 67,
    solutions: [{ imageUrl: "/fatal-sim/series67/1.jpg" }],
    order: 1,
  },
  {
    name: "Series 76",
    seriesNumber: 76,
    solutions: [{ imageUrl: "/fatal-sim/series76/1.jpg" }],
    order: 2,
  },
  {
    name: "Series 83",
    seriesNumber: 83,
    solutions: [
      { imageUrl: "/fatal-sim/series83/1.jpg" },
      { imageUrl: "/fatal-sim/series83/2.jpg" },
    ],
    order: 3,
  },
  {
    name: "Series 86",
    seriesNumber: 86,
    solutions: [{ imageUrl: "/fatal-sim/series86/1.jpg" }],
    order: 4,
  },
  {
    name: "Series 89",
    seriesNumber: 89,
    solutions: [
      { imageUrl: "/fatal-sim/series89/1.jpg" },
      { imageUrl: "/fatal-sim/series89/2.jpg" },
      { imageUrl: "/fatal-sim/series89/3.jpg" },
    ],
    order: 5,
  },
  {
    name: "Series 91",
    seriesNumber: 91,
    solutions: [
      { imageUrl: "/fatal-sim/series91/1.jpg" },
      { imageUrl: "/fatal-sim/series91/2.jpg" },
      { imageUrl: "/fatal-sim/series91/3.jpg" },
    ],
    order: 6,
  },
  {
    name: "Series X",
    seriesNumber: 99, // Using 99 for Series X to maintain sorting
    solutions: [
      { imageUrl: "/fatal-sim/seriesX/1.jpg" },
      { imageUrl: "/fatal-sim/seriesX/2.jpg" },
    ],
    order: 7,
  },
];

export default fatalSimSeries;
