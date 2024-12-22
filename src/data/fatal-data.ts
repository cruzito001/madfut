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
    name: "Series 78",
    seriesNumber: 78,
    solutions: [
      { imageUrl: "/fatal/series78/1.jpg" },
      { imageUrl: "/fatal/series78/2.jpg" },
    ],
    order: 2,
  },
  {
    name: "Series 82",
    seriesNumber: 82,
    solutions: [
      { imageUrl: "/fatal/series82/1.jpg" },
      { imageUrl: "/fatal/series82/2.jpg" },
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
    ],
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
    seriesNumber: 99,
    solutions: [
      { imageUrl: "/fatal/seriesX/1.jpg" },
      { imageUrl: "/fatal/seriesX/2.jpg" },
    ],
    order: 7,
  },
];

export default fatalSeries;
