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
    solutions: [
      { imageUrl: "/fatal/series75/1.jpg" },
      { imageUrl: "/fatal/series75/2.jpg" },
    ],
    order: 1,
  },
  {
    name: "Series 79",
    seriesNumber: 79,
    solutions: [
      { imageUrl: "/fatal/series79/1.jpg" },
      { imageUrl: "/fatal/series79/2.jpg" },
    ],
    order: 2,
  },
  {
    name: "Series 81",
    seriesNumber: 81,
    solutions: [
      { imageUrl: "/fatal/series81/1.jpg" },
      { imageUrl: "/fatal/series81/2.jpg" },
    ],
    order: 3,
  },
  {
    name: "Series 85",
    seriesNumber: 85,
    solutions: [
      { imageUrl: "/fatal/series85/1.jpg" },
      { imageUrl: "/fatal/series85/2.jpg" },
    ],
    order: 4,
  },
  {
    name: "Series 88",
    seriesNumber: 88,
    solutions: [{ imageUrl: "/fatal/series88/1.jpg" }],
    order: 5,
  },
  {
    name: "Series 93",
    seriesNumber: 93,
    solutions: [
      { imageUrl: "/fatal/series93/1.jpg" },
      { imageUrl: "/fatal/series93/2.jpg" },
      { imageUrl: "/fatal/series93/3.jpg" },
    ],
    order: 6,
  },
  {
    name: "Series X",
    seriesNumber: 99,
    solutions: [
      { imageUrl: "/fatal/seriesX/1.jpg" },
      { imageUrl: "/fatal/seriesX/2.jpg" },
      { imageUrl: "/fatal/seriesX/3.jpg" },
      { imageUrl: "/fatal/seriesX/4.jpg" },
    ],
    order: 7,
  },
];

export default fatalSeries;
