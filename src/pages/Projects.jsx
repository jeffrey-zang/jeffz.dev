import projects from "../data/projects.data";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="p-8 md:p-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Projects</h1>
        <Link to="/">
          Back
        </Link>
      </div>

      {projects.map((item, i) => {
        return (
          <div className="flex gap-8" key={`project-${i}`}>
            <div>{item[0]}</div>
            <div>
              {item[1].map((project, j) => {
                return (
                  <div key={`project-${i}-${j}`} className="mb-4">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.name}
                    </a>{" "}
                    - <span>{project.about}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
