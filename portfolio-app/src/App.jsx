import AboutMe from './AboutMe.jsx';
import './App.css'
import ContactMe from './ContactMe.jsx';
import Footer from './Footer.jsx';
import MainScreen from "./MainScreen"
import Projects from './Project.jsx';
import Skillset from './Skillset.jsx';
import SpringCarousel from './spring-carousel.jsx';

function App() {

  return (
    <>
      <MainScreen />
      <AboutMe />
      <Projects />
      <Skillset />
      <SpringCarousel />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App
