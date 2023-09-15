import PortfolioPic from "../../assets/portfolio.png";
import Budget from "../../assets/budgeting.png";
import Climate from "../../assets/climate.jpg";
import Ecommerce from "../../assets/ecommerce.png";
import md from "../../assets/markdown.png";
import maze from "../../assets/maze.png";
import sukoshi from "../../assets/sukoshi.jpg";
export const projectsData = [
  {
    id: 1,
    image: Ecommerce,
    title: "E-commerce Web App [IN PROGRESS]",
    category: "Web Apps",
    link: "https://github.com/vjwuGT/ecommercepage",
  },
  {
    id: 2,
    image: PortfolioPic,
    title: "Portfolio Website",
    category: "Web Apps",
    link: "https://github.com/vjwuGT/personal-site",
  },
  {
    id: 3,
    // screenshot in assets
    image: Budget,
    title: "Budgeting Web App",
    category: "Web Apps",
    link: "https://github.com/vjwuGT/budgetingApp",
  },
  {
    id: 4,
    image: md,
    title: "Markdown Parser",
    category: "Scripts and Programs",
    link: "https://github.com/vjwuGT/markdown-parser",
  },
  {
    id: 5,
    image: maze,
    title: "Stack and Queue Maze Solver",
    category: "Scripts and Programs",
    link: "https://github.com/vjwuGT/maze-solver/tree/main",
  },
  {
    id: 6,
    image: sukoshi,
    title: "Restaurant Review - Sukoshi",
    category: "Videos",
    link: "https://www.youtube.com/watch?v=Tz09QiXR8h0",
  },
  {
    id: 7,
    image: Climate,
    title: "Climate Change Video",
    category: "Videos",
    link: "https://www.youtube.com/watch?v=gqaG0F7Es-w&feature=youtu.be",
  },
];

export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "Web Apps",
  },
  {
    name: "Scripts and Programs",
  },
  {
    name: "Videos",
  },
];
