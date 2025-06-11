import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
// import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import FromTop from "./components/FromTop";

function App() {
  return (
    <div className="App">
      <FromTop />{" "}
      {/* Every time the route changes (e.g., from /about to /contact), the window will automatically scroll to the top. */}
      <header>
        <NavigationBar />
      </header>
      <Routes>
        {/* Home page: All sections */}
        <Route path="/" element={<HomePage />} />

        {/* Individual pages */}
        {/* <Route path="/home" element={<Header />} /> */}
        <Route path="/about" element={<AboutSection />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
