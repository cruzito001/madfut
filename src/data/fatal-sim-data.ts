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
    name: "Series 82",
    seriesNumber: 82,
    solutions: [{ imageUrl: "/fatal-sim/series82/1.jpg" }],
    order: 2,
  },
  {
    name: "Series 84",
    seriesNumber: 84,
    solutions: [{ imageUrl: "/fatal-sim/series84/1.jpg" }],
    order: 3,
  },
  {
    name: "Series 87",
    seriesNumber: 87,
    solutions: [{ imageUrl: "/fatal-sim/series87/1.jpg" }],
    order: 4,
  },
  {
    name: "Series 90",
    seriesNumber: 90,
    solutions: [{ imageUrl: "/fatal-sim/series90/1.jpg" }],
    order: 5,
  },
  {
    name: "Series 92",
    seriesNumber: 92,
    solutions: [{ imageUrl: "/fatal-sim/series92/1.jpg" }],
    order: 6,
  },
  {
    name: "Series X",
    seriesNumber: 99, // Using 99 for Series X to maintain sorting
    solutions: [{ imageUrl: "/fatal-sim/seriesX/1.jpg" }],
    order: 7,
  },
];

export default fatalSimSeries;
