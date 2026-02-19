import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Skill from "./components/skill/Skill";


function App() {
  return (
    <div>
      <Header />
      <Home />
      <hr />
      <About />
      <hr />
      <Skill />
      <hr />
      <Projects />
      <hr />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
