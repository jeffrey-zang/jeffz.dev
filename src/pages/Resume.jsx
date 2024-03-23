import resumedata from "../data/resume.data";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="p-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Resume</h1>
        <Link to="/" className="underline">
          Back
        </Link>
      </div>

      {resumedata.map((exp, i) => {
        return (
          <div key={`resume-${i}`} className="flex">
            <div className="w-[15%]">
              {exp.start} - {exp.end}
            </div>
            <div>{exp.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Resume;
