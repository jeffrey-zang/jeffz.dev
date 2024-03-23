import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default App;
