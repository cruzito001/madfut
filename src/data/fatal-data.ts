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
    name: "Series 79",
    seriesNumber: 79,
    solutions: [
      { imageUrl: "/fatal/series79/1.jpg" },
      { imageUrl: "/fatal/series79/2.jpg" },
    ],
    order: 1,
  },
  {
    name: "Series 83",
    seriesNumber: 83,
    solutions: [
      { imageUrl: "/fatal/series83/1.jpg" },
      { imageUrl: "/fatal/series83/2.jpg" },
    ],
    order: 2,
  },
  {
    name: "Series 86",
    seriesNumber: 86,
    solutions: [{ imageUrl: "/fatal/series86/1.jpg" }],
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
    name: "Series 91",
    seriesNumber: 91,
    solutions: [
      { imageUrl: "/fatal/series91/1.jpg" },
      { imageUrl: "/fatal/series91/2.jpg" },
    ],
    order: 5,
  },
  {
    name: "Series 94",
    seriesNumber: 94,
    solutions: [
      { imageUrl: "/fatal/series94/1.jpg" },
      { imageUrl: "/fatal/series94/2.jpg" },
    ],
    order: 6,
  },
  {
    name: "Series X",
    seriesNumber: 99,
    solutions: [
      { imageUrl: "/fatal/seriesX/1.jpg" },
      { imageUrl: "/fatal/seriesX/2.jpg" },
    ],
    order: 7,
  },
];

export default fatalSeries;
