import Navbar from './Components/Navbar';
import HomeSection from './Components/HomeSection';
import AboutSection from './Components/AboutSection';
import ServiceSection from './Components/ServiceSection';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Contactus from './Components/Contactus';
import './index.css';



function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ServiceSection />
      <Skill />
      <Project />
      <Contactus />
    </>
  );
}

export default App;
