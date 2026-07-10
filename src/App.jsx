import './App.css';
import { NavBar } from "./components/NavBar.jsx";
import { Banner } from "./components/Banner.jsx";
import { Skills } from "./components/Skills.jsx";
import { Experience } from "./components/Experience.jsx";
import { Projects } from "./components/Projects.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { ScrollProgress } from "./components/ScrollProgress.jsx";
import { CustomCursor } from "./components/CustomCursor.jsx";

function App() {
  return (
    <div className="App">
      <ScrollProgress />
      <CustomCursor />
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
