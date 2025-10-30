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
    name: "Series 78",
    seriesNumber: 78,
    solutions: [{ imageUrl: "/fatal-sim/series78/1.png" }],
    order: 1,
  },
  {
    name: "Series 81",
    seriesNumber: 81,
    solutions: [{ imageUrl: "/fatal-sim/series81/1.png" }],
    order: 2,
  },
  {
    name: "Series 83",
    seriesNumber: 83,
    solutions: [{ imageUrl: "/fatal-sim/series83/1.png" }],
    order: 3,
  },
  {
    name: "Series 85",
    seriesNumber: 85,
    solutions: [{ imageUrl: "/fatal-sim/series85/1.png" }],
    order: 4,
  },
  {
    name: "Series 89",
    seriesNumber: 89,
    solutions: [{ imageUrl: "/fatal-sim/series89/1.png" }],
    order: 5,
  },
  {
    name: "Series 91",
    seriesNumber: 91,
    solutions: [{ imageUrl: "/fatal-sim/series91/1.png" }],
    order: 6,
  },
  {
    name: "Series X",
    seriesNumber: 99, // Using 99 for Series X to maintain sorting
    solutions: [{ imageUrl: "/fatal-sim/seriesX/1.png" }],
    order: 7,
  },
];

export default fatalSimSeries;
