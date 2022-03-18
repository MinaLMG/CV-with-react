import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import personal from "./assets/me.jpg";
import Body from "./components/Body/Body";
function App() {
  const HeaderData = {
    photo: personal,
    name: "Mena Lateaf",
    description:
      "Google Software Engineer, Former Amazon Software Engineer, First place at IEEEXtreme and ICPC Finalist",
    contacts: {
      mail: "moabuaboud@gmail.com",
      phone: +962799548851,
      accomodation: "Amman, Jordan",
      linkedin: "inkedin.com/in/mohammad-abuaboud",
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
  };
  return (
    <React.Fragment>
      <Header data={HeaderData}></Header>
      <Body data={BodyData}></Body>
    </React.Fragment>
  );
}

export default App;
