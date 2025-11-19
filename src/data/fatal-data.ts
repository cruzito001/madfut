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
      { imageUrl: "/fatal/74-1.jpg" },
      { imageUrl: "/fatal/74-2.jpg" },
    ],
    order: 1,
  },
  {
    name: "Series 75",
    seriesNumber: 75,
    solutions: [
      { imageUrl: "/fatal/75-1.jpg" },
      { imageUrl: "/fatal/75-2.jpg" },
    ],
    order: 2,
  },
  {
    name: "Series 77",
    seriesNumber: 77,
    solutions: [{ imageUrl: "/fatal/77-1.jpg" }],
    order: 3,
  },
  {
    name: "Series 82",
    seriesNumber: 82,
    solutions: [
      { imageUrl: "/fatal/82-1.jpg" },
      { imageUrl: "/fatal/82-2.jpg" },
    ],
    order: 4,
  },
  {
    name: "Series 86",
    seriesNumber: 86,
    solutions: [{ imageUrl: "/fatal/86-1.jpg" }],
    order: 5,
  },
  {
    name: "Series 89",
    seriesNumber: 89,
    solutions: [
      { imageUrl: "/fatal/89-1.jpg" },
      { imageUrl: "/fatal/89-2.jpg" },
    ],
    order: 6,
  },
  {
    name: "Series X",
    seriesNumber: 99, // Using 99 for Series X to maintain sorting
    solutions: [{ imageUrl: "/fatal/X-1.jpg" }, { imageUrl: "/fatal/X-2.jpg" }],
    order: 7,
  },
];

export default fatalSeries;
