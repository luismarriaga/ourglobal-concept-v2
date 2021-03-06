import React from "react";
import { ProjectItem } from "./ProjectItem";
import ProjectContext from "../../context/Project";
import "./Project.css"

export function ProjectList() {

  const projectContext = React.useContext(ProjectContext);

  return (
    <React.Fragment>   
        <strong> 
            <p className= 'project-title'>  PROYECTOS </p>
        </strong>
        <br />
        <br />
        <div className="list-project">
          {projectContext.state.projects.map((item, i) => (
              <>
              <ProjectItem key={i} project={item} /> 
              <br/>
              </>
          ))}
        </div>

    </React.Fragment>
  );
}