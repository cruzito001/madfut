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
    name: "Series 78",
    seriesNumber: 78,
    solutions: [
      { imageUrl: "/fatal-sim/series78/1.jpg" },
      { imageUrl: "/fatal-sim/series78/2.jpg" },
    ],
    order: 1,
  },
  {
    name: "Series 82",
    seriesNumber: 82,
    solutions: [
      { imageUrl: "/fatal-sim/series82/1.jpg" },
      { imageUrl: "/fatal-sim/series82/2.jpg" },
    ],
    order: 2,
  },
  {
    name: "Series 85",
    seriesNumber: 85,
    solutions: [
      { imageUrl: "/fatal-sim/series85/1.jpg" },
      { imageUrl: "/fatal-sim/series85/2.jpg" },
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
    name: "Series 90",
    seriesNumber: 90,
    solutions: [
      { imageUrl: "/fatal-sim/series90/1.jpg" },
      { imageUrl: "/fatal-sim/series90/2.jpg" },
    ],
    order: 5,
  },
  {
    name: "Series 93",
    seriesNumber: 93,
    solutions: [
      { imageUrl: "/fatal-sim/series93/1.jpg" },
      { imageUrl: "/fatal-sim/series93/2.jpg" },
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
