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
  };
  return (
    <React.Fragment>
      <Header data={HeaderData}></Header>
      <Body data={BodyData}></Body>
    </React.Fragment>
  );
}

export default App;
