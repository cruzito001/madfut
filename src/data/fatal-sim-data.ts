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
    name: "Series 75",
    seriesNumber: 75,
    solutions: [
      { imageUrl: "/fatal-sim/75-1.jpg" },
      { imageUrl: "/fatal-sim/75-2.jpg" },
    ],
    order: 1,
  },
  {
    name: "Series 77",
    seriesNumber: 77,
    solutions: [{ imageUrl: "/fatal-sim/77-1.jpg" }],
    order: 2,
  },
  {
    name: "Series 81",
    seriesNumber: 81,
    solutions: [{ imageUrl: "/fatal-sim/81-1.jpg" }],
    order: 3,
  },
  {
    name: "Series 85",
    seriesNumber: 85,
    solutions: [{ imageUrl: "/fatal-sim/85-1.jpg" }],
    order: 4,
  },
  {
    name: "Series 88",
    seriesNumber: 88,
    solutions: [
      { imageUrl: "/fatal-sim/88-1.jpg" },
      { imageUrl: "/fatal-sim/88-2.jpg" },
    ],
    order: 5,
  },
  {
    name: "Series 92",
    seriesNumber: 92,
    solutions: [
      { imageUrl: "/fatal-sim/92-1.jpg" },
      { imageUrl: "/fatal-sim/92-2.jpg" },
    ],
    order: 6,
  },
  {
    name: "Series X",
    seriesNumber: 99, // Using 99 for Series X to maintain sorting
    solutions: [
      { imageUrl: "/fatal-sim/X-1.jpg" },
      { imageUrl: "/fatal-sim/X-2.jpg" },
    ],
    order: 7,
  },
];

export default fatalSimSeries;
