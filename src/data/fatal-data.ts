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
    name: "Series 77",
    seriesNumber: 77,
    solutions: [
      { imageUrl: "/fatal/series77/1.jpg" },
      { imageUrl: "/fatal/series77/2.jpg" },
    ],
    order: 1,
  },
  {
    name: "Series 82",
    seriesNumber: 82,
    solutions: [
      { imageUrl: "/fatal/series82/1.jpg" },
      { imageUrl: "/fatal/series82/2.jpg" },
      { imageUrl: "/fatal/series82/3.jpg" },
    ],
    order: 2,
  },
  {
    name: "Series 85",
    seriesNumber: 85,
    solutions: [
      { imageUrl: "/fatal/series85/1.jpg" },
      { imageUrl: "/fatal/series85/2.jpg" },
    ],
    order: 3,
  },
  {
    name: "Series 89",
    seriesNumber: 89,
    solutions: [
      { imageUrl: "/fatal/series89/1.jpg" },
      { imageUrl: "/fatal/series89/2.jpg" },
    ],
    order: 4,
  },
  {
    name: "Series 92",
    seriesNumber: 92,
    solutions: [
      { imageUrl: "/fatal/series92/1.jpg" },
      { imageUrl: "/fatal/series92/2.jpg" },
    ],
    order: 5,
  },
  {
    name: "Series 95",
    seriesNumber: 95,
    solutions: [
      { imageUrl: "/fatal/series95/1.jpg" },
      { imageUrl: "/fatal/series95/2.jpg" },
      { imageUrl: "/fatal/series95/3.jpg" },
    ],
    order: 6,
  },
  {
    name: "Series X",
    seriesNumber: 99, // Using 99 for Series X to maintain sorting
    solutions: [
      { imageUrl: "/fatal/seriesX/1.jpg" },
      { imageUrl: "/fatal/seriesX/2.jpg" },
      { imageUrl: "/fatal/seriesX/3.jpg" },
    ],
    order: 7,
  },
];

export default fatalSeries;
