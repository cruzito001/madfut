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
      { imageUrl: "/fatal/series77/1.webp" },
      { imageUrl: "/fatal/series77/2.webp" },
      { imageUrl: "/fatal/series77/3.webp" },
    ],
    order: 1,
  },
  {
    name: "Series 81",
    seriesNumber: 81,
    solutions: [
      { imageUrl: "/fatal/series81/1.webp" },
      { imageUrl: "/fatal/series81/2.webp" },
      { imageUrl: "/fatal/series81/3.webp" },
    ],
    order: 2,
  },
  {
    name: "Series 85",
    seriesNumber: 85,
    solutions: [
      { imageUrl: "/fatal/series85/1.webp" },
      { imageUrl: "/fatal/series85/2.webp" },
      { imageUrl: "/fatal/series85/3.webp" },
    ],
    order: 3,
  },
  {
    name: "Series 87",
    seriesNumber: 87,
    solutions: [
      { imageUrl: "/fatal/series87/1.webp" },
      { imageUrl: "/fatal/series87/2.webp" },
      { imageUrl: "/fatal/series87/3.webp" },
    ],
    order: 4,
  },
  {
    name: "Series 90",
    seriesNumber: 90,
    solutions: [
      { imageUrl: "/fatal/series90/1.webp" },
      { imageUrl: "/fatal/series90/2.webp" },
      { imageUrl: "/fatal/series90/3.webp" },
    ],
    order: 5,
  },
  {
    name: "Series 93",
    seriesNumber: 93,
    solutions: [
      { imageUrl: "/fatal/series93/1.webp" },
      { imageUrl: "/fatal/series93/2.webp" },
      { imageUrl: "/fatal/series93/3.webp" },
    ],
    order: 6,
  },
  {
    name: "Series X",
    seriesNumber: 99,
    solutions: [
      { imageUrl: "/fatal/seriesX/1.webp" },
      { imageUrl: "/fatal/seriesX/2.webp" },
      { imageUrl: "/fatal/seriesX/3.webp" },
    ],
    order: 7,
  },
];

export default fatalSeries;
