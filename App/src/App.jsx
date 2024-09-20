import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/Home";
import Github from "../components/Github";
import LinkedIn from "../components/LinkedIn";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Github" element={<Github />} />
        <Route path="/LinkedIn" element={<LinkedIn />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;
