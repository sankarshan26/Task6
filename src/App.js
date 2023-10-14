import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import shared_data from "./Data/portfolio_shared_data";
import data from "./Data/res_primaryLanguage";

function App(){

    return (
      <div>
        <Header sharedData={shared_data.basic_info} />
        
        <About
          resumeBasicInfo={data.basic_info}
          sharedBasicInfo={shared_data.basic_info}
        />
        <br/>
        <br/>
        <br/>
        <Skills
          sharedSkills={shared_data.skills}
          resumeBasicInfo={data.basic_info}
        />
        <Projects
          resumeProjects={data.projects}
          resumeBasicInfo={data.basic_info}
        />
        <Experience
          resumeExperience={data.experience}
          resumeBasicInfo={data.basic_info}
        />
        <Footer sharedBasicInfo={shared_data.basic_info} />
      </div>
    );
}

export default App;
