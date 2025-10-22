import NavBar from "./components/Navigation/NavBar.tsx";
import About from "./components/About/About.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Portfolio from "./components/Portfolio/Portfolio.tsx";
import Contact from "./components/Contact/Contact.tsx";

export function App() {

  return (
    <div className="container mx-auto">
        <NavBar/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
    </div>
  )
}
