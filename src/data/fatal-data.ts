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
    name: "Series 74",
    seriesNumber: 74,
    solutions: [
      { imageUrl: "/fatal/series74/1.jpg" },
      { imageUrl: "/fatal/series74/2.jpg" },
    ],
    order: 1,
  },
  {
    name: "Series 77",
    seriesNumber: 77,
    solutions: [
      { imageUrl: "/fatal/series77/1.jpg" },
      { imageUrl: "/fatal/series77/2.jpg" },
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
    name: "Series 84",
    seriesNumber: 84,
    solutions: [
      { imageUrl: "/fatal/series84/1.jpg" },
      { imageUrl: "/fatal/series84/2.jpg" },
    ],
    order: 4,
  },
  {
    name: "Series 87",
    seriesNumber: 87,
    solutions: [
      { imageUrl: "/fatal/series87/1.jpg" },
      { imageUrl: "/fatal/series87/2.jpg" },
      { imageUrl: "/fatal/series87/3.jpg" },
    ],
    order: 5,
  },
  {
    name: "Series 90",
    seriesNumber: 90,
    solutions: [
      { imageUrl: "/fatal/series90/1.jpg" },
      { imageUrl: "/fatal/series90/2.jpg" },
    ],
    order: 6,
  },
  {
    name: "Series X",
    seriesNumber: 99, // Using 99 for Series X to maintain sorting
    solutions: [
      { imageUrl: "/fatal/seriesX/1.jpg" },
      { imageUrl: "/fatal/seriesX/2.jpg" },
    ],
    order: 7,
  },
];

export default fatalSeries;
