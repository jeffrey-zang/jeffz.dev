const projectsData = [
  "2024",
  {
    name: "jeffz.dev",
    href: "https://jeffz.dev",
    about: "this website",
  },
  {
    name: "Navitas",
    href: "https://devpost.com/software/navitas",
    about:
      "chemistry-software-hardware project for uOttaHack 6 that generates energy from thin air",
  },
  {
    name: "eclipseexpos.org",
    href: "https://eclipseexpos.org/",
    about: "website for Eclipse2024, the world's largest youth-led event",
  },
  {
    name: "pitchplat.app",
    href: "https://pitchplat.app/",
    about: "website for Plat, my Flowboat startup",
  },
  {
    name: "solcoa.tech",
    href: "https://www.solcoa.tech/",
    about: "website for Solcoa Technologies",
  },
  "2023",
  {
    name: "hoomanrezanezhad.com",
    href: "https://www.hoomanrezanezhad.com/",
    about: "Hooman's personal website",
  },
  {
    name: "realign.pages.dev",
    href: "https://realign.pages.dev/",
    about: "ReAlign's marketing site",
  },
  {
    name: "platinumpark",
    href: "https://github.com/jeffrey-zang/platinumpark",
    about: "app to help people park their cars",
  },
  {
    name: "motus.",
    href: "https://github.com/jeffrey-zang/motus",
    about:
      "project for Hack the North 2023, wheelchair controlled by your eyes",
  },
  {
    name: "clockhacks.dev",
    href: "https://github.com/ClockHacks/clockhacks.dev",
    about: "website for ClockHacks 2",
  },
  {
    name: "attend.tedxcolumbialakeyouth.com",
    href: "https://attend.tedxcolumbialakeyouth.com/",
    about: "application portal for TEDxColumbia Lake Youth",
  },
  {
    name: "lhss-cs-attendance.vercel.app",
    href: "https://github.com/LHSS-CS-Club/CS-Club-Attendance-Dashboard",
    about: "attendance dashboard for Laurel Heights CS Club",
  },
  {
    name: "tedxcolumbialakeyouth.com",
    href: "https://github.com/jeffrey-zang/tedxcolumbialakeyouth.com",
    about: "landing page for TEDxColumbia Lake Youth",
  },
  {
    name: "hackthe6ix.com",
    href: "https://hackthe6ix.com/",
    about: "landing page for Hack the 6ix 2023",
  },
  {
    name: "dash.hackthe6ix.com",
    href: "https://github.com/hack-the-6ix/dash.hackthe6ix.com",
    about: "Hack the 6ix 2023 hacker dashboard",
  },
  {
    name: "memento-flashcards.netlify.app",
    href: "https://github.com/Yourself1011/memento",
    about: "app that ai-generates flashcards",
  },
  {
    name: "dash.rythmhacks.ca",
    href: "https://github.com/RythmHacks/dash.rythmhacks.ca",
    about: "RythmHacks hacker dashboard",
  },
  {
    name: "links.rythmhacks.ca",
    href: "https://github.com/RythmHacks/links.rythmhacks.ca",
    about: "links page for RythmHacks",
  },
  {
    name: "rythmhacks.ca",
    href: "https://github.com/RythmHacks/rythmhacks.ca",
    about: "landing page for RythmHacks",
  },
  {
    name: "lhss-evc.netlify.app",
    href: "https://github.com/LHSSEVC/evc-website",
    about: "website for Laurel Heights EVC",
  },
  {
    name: "trivia-scoreboard.netlify.app",
    href: "https://github.com/jeffrey-zang/trivia-scoreboard",
    about: "scoreboard site for Laurel Heights Trivia Club",
  },
  "2022",
  {
    name: "Sands of Typing",
    href: "https://github.com/jeffrey-zang/sands-of-typing",
    about: "a typing test built in the command line with Python",
  },
  {
    name: "Hackathon Idea Generator",
    href: "https://github.com/jeffrey-zang/hackathon-idea-generator",
    about: "NextJS website that uses ChatGPT to generate hackathon ideas",
  },
  {
    name: "clockhacks.ca",
    href: "https://github.com/ClockHacks/clockhacks.ca",
    about: "website for ClockHacks",
  },
  {
    name: "CharityChimp",
    href: "https://github.com/jeffrey-zang/charitychimp",
    about:
      "social network for charities, won Best Use of Deso at Give Back Hacks",
  },
  {
    name: "cultivate",
    href: "https://github.com/lifeng-yin/cultivate",
    about:
      "a home for urban farmers, won Best Accessibility Hack at HarvestHacks",
  },
  {
    name: "MyRecipePal",
    href: "https://github.com/jeffrey-zang/MyRecipePal",
    about: "recipe generating website, submission for Hack the North 2022",
  },
  {
    name: "happymatheducation.com",
    href: "https://github.com/happymatheducation/happymatheducation.com",
    about: "website for Happy Math Education",
  },
  {
    name: "simpleread.netlify.app",
    href: "https://github.com/lifeng-yin/simpleread",
    about: "app for reviewing books",
  },
  {
    name: "jeffrey-zang.github.io",
    href: "https://github.com/jeffrey-zang/jeffrey-zang.github.io",
    about: "personal portfolio",
  },
  {
    name: "Meleti",
    href: "https://github.com/Yourself1011/meleti",
    about: "discord bot to assist with studying and increase productivity",
  },
  "2021",
  {
    name: "Farmout Bot",
    href: "https://github.com/Yourself1011/farmoutbot",
    about: "discord bot about being a farmer",
  },
  {
    name: "galactijump",
    href: "https://github.com/jeffrey-zang/galactijump",
    about: "low poly space game made in Unity",
  },
];

let projects = [];

function parseProjects() {
  let currentYear = -1;

  for (let project in projectsData) {
    if (typeof projectsData[project] == "string") {
      projects.push([projectsData[project], []]);
      currentYear += 1;
    } else {
      projects[currentYear][1].push(projectsData[project]);
    }
  }
}

parseProjects();

export default projects;
