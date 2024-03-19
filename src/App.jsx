import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default App;
