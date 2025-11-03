interface FatalSolution {
  imageUrl: string;
}

interface FatalSeries {
  name: string;
  seriesNumber: number;
  solutions: FatalSolution[];
  order: number;
}

const fatalSeries: FatalSeries[] = [
  {
    name: "Series 76",
    seriesNumber: 76,
    solutions: [{ imageUrl: "/fatal/series76/1.jpg" }],
    order: 1,
  },
  {
    name: "Series 79",
    seriesNumber: 79,
    solutions: [{ imageUrl: "/fatal/series79/1.jpg" }],
    order: 2,
  },
  {
    name: "Series 82",
    seriesNumber: 82,
    solutions: [{ imageUrl: "/fatal/series82/1.jpg" }],
    order: 3,
  },
  {
    name: "Series 85",
    seriesNumber: 85,
    solutions: [{ imageUrl: "/fatal/series85/1.jpg" }],
    order: 4,
  },
  {
    name: "Series 88",
    seriesNumber: 88,
    solutions: [{ imageUrl: "/fatal/series88/1.jpg" }],
    order: 5,
  },
  {
    name: "Series 91",
    seriesNumber: 91,
    solutions: [{ imageUrl: "/fatal/series91/1.jpg" }],
    order: 6,
  },
  {
    name: "Series X",
    seriesNumber: 99, // Using 99 for Series X to maintain sorting
    solutions: [{ imageUrl: "/fatal/seriesX/1.jpg" }],
    order: 7,
  },
];

export default fatalSeries;
