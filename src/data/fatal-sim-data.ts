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
    name: "Series 79",
    seriesNumber: 79,
    solutions: [{ imageUrl: "/fatal-sim/series79/1.jpg" }],
    order: 1,
  },
  {
    name: "Series 83",
    seriesNumber: 83,
    solutions: [{ imageUrl: "/fatal-sim/series83/1.jpg" }],
    order: 2,
  },
  {
    name: "Series 86",
    seriesNumber: 86,
    solutions: [{ imageUrl: "/fatal-sim/series86/1.jpg" }],
    order: 3,
  },
  {
    name: "Series 88",
    seriesNumber: 88,
    solutions: [{ imageUrl: "/fatal-sim/series88/1.jpg" }],
    order: 4,
  },
  {
    name: "Series 92",
    seriesNumber: 92,
    solutions: [{ imageUrl: "/fatal-sim/series92/1.jpg" }],
    order: 5,
  },
  {
    name: "Series 94",
    seriesNumber: 94,
    solutions: [{ imageUrl: "/fatal-sim/series94/1.jpg" }],
    order: 6,
  },
  {
    name: "Series X",
    seriesNumber: 99,
    solutions: [{ imageUrl: "/fatal-sim/seriesX/1.jpg" }],
    order: 7,
  },
];

export default fatalSimSeries;
