import { Link } from "react-router-dom";
import blogs from "../data/blogs.data.jsx";

const Blogs = () => {
  return (
    <div className="p-8 md:p-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Ok Blog</h1>
        <Link to="/">Back</Link>
        <p className="mt-4">Welcome to the Ok Blog.</p>
      </div>

      {blogs.map((blog, i) => {
        return (
          <div className="flex gap-8" key={`blog-${i}`}>
            <p>{blog.date}</p>
            <div className="mb-4 w-[400px]">
              <div className="flex justify-between">
                <h2>
                  <Link to={`${blog.href}`}>{blog.name}</Link>
                </h2>
              </div>{" "}
              <p>{blog.about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
