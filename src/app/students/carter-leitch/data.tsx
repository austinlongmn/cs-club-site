import { HoverImage } from "./client-components";

export const me = {
  name: "Carter Leitch",
};

export const minorProjects = [
  {
    projNum: 1,
    name: "Blackjack",
    description: "Console-based C++ program for playing blackjack. Uses C++.",
    tech: "Tech 1",
  },
  {
    projNum: 2,
    name: "Political Triangle Quiz",
    description:
      "Quiz for mapping your political views. Uses C#, Windows Forms, and .NET.",
    tech: "Tech 2",
  },
];

export const majorProjects = [
  {
    projNum: 1,
    name: (
      <HoverImage
        text={"Cool Bible Verses"}
        imagePath={"/images/carter/coolbv.png"}
      />
    ),
    description:
      "Website for organizing your favorite Bible verses. Uses ASP.NET Core, C#, and a relational database.",
    tech: "Tech 1",
  },
  {
    projNum: 2,
    name: "Reimbursement Web App",
    description:
      "Web app for managing reimbursements. Uses Python, JustPy, and SQLite.",
    tech: "Tech 2",
  },
  {
    projNum: 3,
    name: (
      <HoverImage
        text={"System A&D Project"}
        imagePath={"/images/josiah/systemsphoto.png"}
      />
    ),
    description:
      "Analyzed and designed new reimbursement system for Five Oaks church. Used UML, ERD, and Agile principles.",
    tech: "Tech 3",
  },
  {
    projNum: 4,
    name: "Frog Bot",
    description: "Multi-purpose Discord bot. Uses Python and Discord.py.",
    tech: "Tech 4",
  },
  {
    projNum: 5,
    name: "CRM Database",
    description:
      "Senior Capstone project to augment DefineTheBox CRM to add new functionality. Used Dyanmics 365 and database design principles.",
    tech: "Tech 4",
  },
];
