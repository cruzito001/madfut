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
    name: "Series 77",
    seriesNumber: 77,
    solutions: [
      { imageUrl: "/fatal-sim/series77/1.jpg" },
      { imageUrl: "/fatal-sim/series77/2.jpg" },
    ],
    order: 1,
  },
  {
    name: "Series 80",
    seriesNumber: 80,
    solutions: [
      { imageUrl: "/fatal-sim/series80/1.jpg" },
      { imageUrl: "/fatal-sim/series80/2.jpg" },
    ],
    order: 2,
  },
  {
    name: "Series 84",
    seriesNumber: 84,
    solutions: [
      { imageUrl: "/fatal-sim/series84/1.jpg" },
      { imageUrl: "/fatal-sim/series84/2.jpg" },
    ],
    order: 3,
  },
  {
    name: "Series 87",
    seriesNumber: 87,
    solutions: [
      { imageUrl: "/fatal-sim/series87/1.jpg" },
      { imageUrl: "/fatal-sim/series87/2.jpg" },
    ],
    order: 4,
  },
  {
    name: "Series 91",
    seriesNumber: 91,
    solutions: [
      { imageUrl: "/fatal-sim/series91/1.jpg" },
      { imageUrl: "/fatal-sim/series91/2.jpg" },
    ],
    order: 5,
  },
  {
    name: "Series 95",
    seriesNumber: 95,
    solutions: [
      { imageUrl: "/fatal-sim/series95/1.jpg" },
      { imageUrl: "/fatal-sim/series95/2.jpg" },
    ],
    order: 6,
  },
  {
    name: "Series X",
    seriesNumber: 99,
    solutions: [
      { imageUrl: "/fatal-sim/seriesX/1.jpg" },
      { imageUrl: "/fatal-sim/seriesX/2.jpg" },
    ],
    order: 7,
  },
];

export default fatalSimSeries;
