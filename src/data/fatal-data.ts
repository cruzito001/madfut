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
    name: "Series 75",
    seriesNumber: 75,
    solutions: [{ imageUrl: "/fatal/series75/1.png" }],
    order: 1,
  },
  {
    name: "Series 79",
    seriesNumber: 79,
    solutions: [{ imageUrl: "/fatal/series79/1.png" }],
    order: 2,
  },
  {
    name: "Series 83",
    seriesNumber: 83,
    solutions: [{ imageUrl: "/fatal/series83/1.png" }],
    order: 3,
  },
  {
    name: "Series 86",
    seriesNumber: 86,
    solutions: [{ imageUrl: "/fatal/series86/1.png" }],
    order: 4,
  },
  {
    name: "Series 89",
    seriesNumber: 89,
    solutions: [{ imageUrl: "/fatal/series89/1.png" }],
    order: 5,
  },
  {
    name: "Series 92",
    seriesNumber: 92,
    solutions: [
      { imageUrl: "/fatal/series92/1.jpg" },
      { imageUrl: "/fatal/series92/2.jpg" },
    ],
    order: 6,
  },
  {
    name: "Series X",
    seriesNumber: 99, // Using 99 for Series X to maintain sorting
    solutions: [{ imageUrl: "/fatal/seriesX/1.png" }],
    order: 7,
  },
];

export default fatalSeries;
