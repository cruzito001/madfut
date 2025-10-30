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
  {
    name: "Francesco Totti",
    imageUrl: "/sbc/francesco-totti/francesco-totti.png",
    templatesCount: 6,
    templates: [
      { name: "Italy", imageUrl: "/sbc/francesco-totti/1.jpg" },
      { name: "Roma", imageUrl: "/sbc/francesco-totti/2.jpg" },
      { name: "Seria A Champion", imageUrl: "/sbc/francesco-totti/3.jpg" },
      { name: "Euro 2000", imageUrl: "/sbc/francesco-totti/4.jpg" },
      { name: "World Cup 2006", imageUrl: "/sbc/francesco-totti/5.jpg" },
      { name: "Totti's Hybrid", imageUrl: "/sbc/francesco-totti/6.jpg" },
    ],
    order: 2,
  },
  {
    name: "Marcelo",
    imageUrl: "/sbc/marcelo/marcelo.png",
    templatesCount: 7,
    templates: [
      { name: "Brazil", imageUrl: "/sbc/marcelo/1.jpg" },
      { name: "Real Madrid", imageUrl: "/sbc/marcelo/2.jpg" },
      { name: "6x La Liga Champion", imageUrl: "/sbc/marcelo/3.jpg" },
      { name: "2x Copa del Rey Winner", imageUrl: "/sbc/marcelo/4.jpg" },
      { name: "5x UCL Winner", imageUrl: "/sbc/marcelo/5.jpg" },
      { name: "2013 Confederations Cup", imageUrl: "/sbc/marcelo/6.jpg" },
      { name: "Marcelo's Hybrid", imageUrl: "/sbc/marcelo/7.jpg" },
    ],
    order: 3,
  },
  {
    name: "Kylian Mbappé",
    imageUrl: "/sbc/kylian-mbappe/kylian-mbappe.png",
    templatesCount: 6,
    templates: [
      { name: "France", imageUrl: "/sbc/kylian-mbappe/1.jpg" },
      { name: "Real Sociedad", imageUrl: "/sbc/kylian-mbappe/2.jpg" },
      { name: "Espanyol", imageUrl: "/sbc/kylian-mbappe/3.jpg" },
      { name: "Levante", imageUrl: "/sbc/kylian-mbappe/4.jpg" },
      { name: "Atlético Madrid", imageUrl: "/sbc/kylian-mbappe/5.jpg" },
      { name: "La Liga", imageUrl: "/sbc/kylian-mbappe/6.jpg" },
    ],
    order: 4,
  },
  {
    name: "Christian Pulisic",
    imageUrl: "/sbc/christian-pulisic/christian-pulisic.png",
    templatesCount: 5,
    templates: [
      { name: "USA", imageUrl: "/sbc/christian-pulisic/1.jpg" },
      { name: "Bologna", imageUrl: "/sbc/christian-pulisic/2.jpg" },
      { name: "Udinese", imageUrl: "/sbc/christian-pulisic/3.jpg" },
      { name: "Napoli", imageUrl: "/sbc/christian-pulisic/4.jpg" },
      { name: "Serie A", imageUrl: "/sbc/christian-pulisic/5.jpg" },
    ],
    order: 5,
  },
  {
    name: "Harry Kane",
    imageUrl: "/sbc/harry-kane/harry-kane.png",
    templatesCount: 6,
    templates: [
      { name: "England", imageUrl: "/sbc/harry-kane/1.jpg" },
      { name: "Hamburg", imageUrl: "/sbc/harry-kane/2.jpg" },
      { name: "Hoffenheim", imageUrl: "/sbc/harry-kane/3.jpg" },
      { name: "Werder Bremen", imageUrl: "/sbc/harry-kane/4.jpg" },
      { name: "Chelsea", imageUrl: "/sbc/harry-kane/5.jpg" },
      { name: "Bundesliga", imageUrl: "/sbc/harry-kane/6.jpg" },
    ],
    order: 6,
  },
  {
    name: "Erling Haaland",
    imageUrl: "/sbc/erling-haaland/erling-haaland.png",
    templatesCount: 6,
    templates: [
      { name: "Norway", imageUrl: "/sbc/erling-haaland/1.jpg" },
      { name: "Man United", imageUrl: "/sbc/erling-haaland/2.jpg" },
      { name: "Arsenal", imageUrl: "/sbc/erling-haaland/3.jpg" },
      { name: "Burnley", imageUrl: "/sbc/erling-haaland/4.jpg" },
      { name: "Napoli", imageUrl: "/sbc/erling-haaland/5.jpg" },
      { name: "Premier League", imageUrl: "/sbc/erling-haaland/6.jpg" },
    ],
    order: 7,
  },
];

export default sbcGroups;
