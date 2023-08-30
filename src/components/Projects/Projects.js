import React from "react";
import "./Projects.css";
import villas from "../../images/villas.png";
import houses from "../../images/houses.png";
import villas2 from "../../images/villas2.png";
import background from "../../images/background.png";

function Projects() {
  return (
    <section className="projects">
      <div className="projects__heading">
        <h2 className="project__title">Latest projects</h2>
        <div className="project__category">
          <div className="project__category-buttons">
            <button className="project-category-button" type="button">
              All
            </button>
            <button className="project-category-button" type="button">
              Building
            </button>
            <button className="project-category-button" type="button">
              Interior
            </button>
          </div>
          <button className="project-category-button_italic" type="button">
            View all projects
          </button>
        </div>
      </div>
      <div className="projects__items">
        <div className="projects__item">
          <img src={houses} className="projects__item-image" alt="villas" />
          <h2 className="projects__item-name">Villas</h2>
        </div>
        <div className="projects__item-container">
          <img
            src={background}
            className="projects__item-image"
            alt="background"
          />
          <h2 className="projects__item-title">Dubai</h2>
          <p className="projects__item-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            molestie integer aliquam consectetur. Faucibus vitae dui massa
            tellus magna sit.
          </p>
          <button className="projects__item-button" type="button">
            See project
          </button>
        </div>

        <div className="projects__item">
          <img src={villas} className="projects__item-image" alt="villas" />
          <h2 className="projects__item-name">Villas</h2>
        </div>
        <div className="projects__item">
          <img src={villas2} className="projects__item-image" alt="villas" />
          <h2 className="projects__item-name">Villas</h2>
        </div>
      </div>
    </section>
  );
}

export default Projects;
