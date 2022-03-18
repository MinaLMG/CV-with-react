import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import personal from "./assets/man.jpg";
import Body from "./components/Body/Body";
function App() {
  const HeaderData = {
    photo: personal,
    name: "Mohammad AbuAboud",
    description:
      "Google Software Engineer, Former Amazon Software Engineer, First place at IEEEXtreme and ICPC Finalist",
    contacts: {
      mail: "moabuaboud@gmail.com",
      phone: +962799548851,
      accomodation: "Amman, Jordan",
      linkedin: "linkedin.com/in/mohammad-abuaboud",
      github: "github.com/hiasat",
    },
  };
  const BodyData = {
    "work-experience": {
      1: {
        experience: "Software Engineer III",
        company: "Google",
        date: "09/2021-Present",
        city: "Munich, Germany",
        action: "Achievements/Tasks",
        actions: {
          1: "Working in ChromeOs Commercial Enterprise Team",
          2: "Team Lead for Enterprise Printing",
        },
      },
      2: {
        experience: "Software Development Engineer (SDE 1)",
        company: "Amazon",
        date: "09/2020 - 08/2020",
        city: "Amman, Jordan",
        action: "Tasks",
        actions: {
          1: "Working with the team responsible for transportation and operations system for package delivery operating in MENA region.",
        },
      },
      3: {
        experience: "Software Engineer I,Site Reliability Engineering Intern",
        company: "Google",
        date: "06/2019 - 09/2019",
        city: "Dublin, Ireland",
        action: "Tasks",
        actions: {
          1: "Worked with Google Cloud persistent disks team.",
          2: "Created an internal debugging tool and a monitoring tool written in C++ which is used to prevent future outages and provide debugging information.",
        },
        contact: "Thomas Manning - thomasmanning@google.com",
      },
    },
    projects: {
      1: {
        name: "LogicRush.com (2017 - 2020)",
        tasks: {
          1: "An initiative to expand and encourage math and problem-solving logic in the Arab community. The website has over 2000+ users.",
          2: "Co-founder and full-stack developer working with a team of 4 people who creates, manages the website, and hosts contests",
          3: "Technologies used: Java Spring, Angular, MySQL database.",
        },
      },
      2: {
        name: "Meemstr.com (2020)",
        tasks: {
          1: "Created a cross-platform mobile app and website for educational purposes.",
          2: "The application includes an AI model that suggests funny content to users based on their behavior such as swipes and preferences using the collaborative filtering approach.",
          3: "A full social experience is added for users through chat, followings, likes, comments, news-feed, and profile.",
          4: "Technologies used: Java Spring, Flutter, Neo4j database, Cassandra database, Sockets, Firebase Notifications, Angular.",
          5: "Documentation Link: https://drive.google.com/drive/folders/1ExAoDyGkhq6v48-hJDuLHzLuuuC-iYU?usp=sharing",
        },
      },
      3: {
        name: "MawhoubAcademy.com (Freelance Project) (2020)",
        tasks: {
          1: "Developed a complete online educational platform for students in Algeria.",
          2: "Backend, Frontend development and CI / CD Pipeline",
        },
      },
      4: {
        name: "Liquid Automation (Open Source) (2013 - 2014)",
        tasks: {
          1: "Lead developer of LiquidBot for Runescape, a third-party software that utilizes reverse engineering of the game obfuscated code and automates user's input.",
        },
      },
    },
    skills: {
      1: "c++",
      2: "css",
      3: "javascript",
      4: "SQL",
      5: "spring boot",
      7: "python",
      8: "java",
      9: "Algorithms and data structures",
      10: "Databases",
      11: "flutter",
      12: "neo4j",
      13: "cassandra",
    },
    achievements: {
      1: {
        title: "Appreciation Award from King Abdullah II of Jordan",
        description:
          "Received an appreciation award from King Abdulla || of Jordan at Al Husainiyah Palace in 2019 for outstanding performance in international programming competitions",
      },
      2: {
        title:
          "First Place Worldwide at IEEEXtreme 14.0 Programming Competition 2020 (Team: Aurora)",
        description:
          "24-hour contest where teams compete to solve a set of programming problems. 4000+ teams participated. We have also ranked 4th in IEEExtreme 13.0 and IEEExtreme 12.0",
      },
      3: {
        title:
          "First place at Arab and Africa Collegiate Programming Contest 2019 (Team: Aurora)",
      },
      4: {
        title:
          "Arab and Africa Champion in International Collegiate Programming Competition (ICPC) held in China (Team: Aurora) (2018)",
      },
      5: {
        title: "Google HashCode 2018 (Rank 87th Worldwide, 1st in Jordan)",
      },
      6: {
        title:
          "Participated in International Olympiad in Informatics (2015,2016) in Kazakhstan and Russia",
      },
      7: { title: "MetaCTF Jordan's Capture the Flag 2019 (Rank: 1st)" },
    },
    education: {
      1: {
        title:
          "(BSc) Computer Science from Princess Sumaya University for technology (09/2016 - 08/2020)",
        description:
          "Earned full scholarship and graduated with GPA Excellent (86.6%)",
      },
    },
    volunteering: {
      1: {
        title:
          "Chief Judge and Problem setter of Jordan Olympiad in Informatics 2018",
      },
      2: {
        title: "Founder of Jordan-CP (jordan-cp.com)",
        description:
          "Created a platform that provides educational material on various topics. The website has 20+ contributors and is widely used in Jordan as practice material for competitive programming.",
      },
      3: {
        title:
          "Coach of Jordan's Delegation for International Olympiad in Informatics (IOI)",
        description:
          "Responsible to coach top 15 students from the national Olympiad In 2019 to prepare them for the international Olympiad, two Jordanians achieved silver and bronze medals in IOI",
      },
      4: {
        title: "Competitive programming trainer",
        description:
          "Taught problem solving and data structures in a training held at the University of Jordan. 100+ people attended the training and the videos are available at SolverTobe youtube channel.",
      },
    },
  };
  return (
    <React.Fragment>
      <Header data={HeaderData}></Header>
      <Body data={BodyData}></Body>
    </React.Fragment>
  );
}

export default App;
