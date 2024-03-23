import resumedata from "../data/resume.data";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="p-8 md:p-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Resume</h1>
        <Link to="/" className="underline">
          Back
        </Link>
      </div>

      {resumedata.map((exp, i) => {
        return (
          <div key={`resume-${i}`} className="flex flex-col md:flex-row mb-4">
            <div className="min-w-[10rem]">
              {exp.start} - {exp.end}
            </div>
            <div>
              <strong>{exp.title}</strong>, {exp.company}
              <p>
                {exp.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Resume;
