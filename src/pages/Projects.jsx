import projects from "../data/projects.data";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="p-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Projects</h1>
        <Link to="/" className="underline">
          Back
        </Link>
      </div>

      {projects.map((value, i) => {
        return (
          <div className="flex gap-8" key={`project-${i}`}>
            <div>{value[0]}</div>
            <div>
              {value[1].map((project, j) => {
                return (
                  <div key={`project-${i}-${j}`} className="mb-4">
                    <a
                      href={project.href}
                      className="font-bold underline"
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
