import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Blogs from "./pages/Blogs";

import Blog from "./components/Blog";
import blogs from "./data/blogs.data.jsx";

const App = () => {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="projects" element={<Projects />} />
      <Route path="resume" element={<Resume />} />
      <Route path="blog">
        <Route index element={<Blogs />} />
        {blogs.map((item, index) => {
          return (
            <Route
              path={item.href}
              element={<Blog name={item.name} content={item.content} />}
              key={`blog-${index}`}
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default App;
