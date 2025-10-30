interface SBCTemplate {
  name: string;
  imageUrl: string;
}

interface SBCGroup {
  name: string;
  imageUrl: string;
  templatesCount: number;
  templates: SBCTemplate[];
  order: number;
}

const sbcGroups: SBCGroup[] = [
  {
    name: "Tomas Rosicky",
    imageUrl: "/sbc/tomas-rosicky/tomas-rosicky.png",
    templatesCount: 6,
    templates: [
      { name: "Czech Republic", imageUrl: "/sbc/tomas-rosicky/1.jpg" },
      { name: "Sparta Praha", imageUrl: "/sbc/tomas-rosicky/2.jpg" },
      { name: "Borussia Dortmund", imageUrl: "/sbc/tomas-rosicky/3.jpg" },
      { name: "Arsenal", imageUrl: "/sbc/tomas-rosicky/4.jpg" },
      { name: "Bundesliga 2002", imageUrl: "/sbc/tomas-rosicky/5.jpg" },
      { name: "Rosicky's Hybrid", imageUrl: "/sbc/tomas-rosicky/6.jpg" },
    ],
    order: 1,
  },
];

export default sbcGroups;
