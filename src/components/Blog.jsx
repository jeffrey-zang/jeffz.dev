import { Link } from "react-router-dom";

const Blog = ({ name, content }) => {
  return (
    <div className="p-8 md:p-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">{name}</h1>
        <Link to="/blog">Back</Link>
      </div>
      {content}
    </div>
  );
};

export default Blog;
