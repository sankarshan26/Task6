import React, { Component } from "react";
import an from "../images/travel/p1.jpg"
import ad from "../images/Club/p1.jpg"
import pt from "../images/event/p1.jpg"
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }


  render() {

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var images = [an, ad, pt]
      var projects = this.props.resumeProjects.map(function (projects, index) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" >
                <div>
                  <img
                    src={images[index]}
                    alt="projectImages"
                    height="230"
                    style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
                  />
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                  <br />
                  <button style={{ "padding": "2px 15px", "margin-bottom": "1rem", "font-size": "16px", "background": "#2f7bed", "color": "white" 
                  , "border":"none","border-radius":"5px"}} onClick={() => {
                    window.open(projects.url, '_blank')
                  }}>View</button>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>PROJECTS</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>

        </div>
      </section>
    );
  }
}

export default Projects;


