import React,{useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import bgImage from "/Img/.oth.jpg";



const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
    });
  }, []);
  return(
   
    <section id="Project" className='Project'  style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        
      }}>

      <div className="project"  data-aos="flip-left" data-aos-delay="200" >
        <h1>
          MY <span className="proj">PROJECT</span>
        </h1>
      </div>

      <div className="projbox">

        <div className="lms">
            <a href="https://github.com/VANSH-73-WEB/Wavvy_music-_app.git" className="proj-item" target="_blank" rel="noreferrer">
          <img src="/Img/Screenshot 2025-01-20 143426.png" alt="" data-aos="flip-down" data-aos-delay="200" />
          
            <div className="overlay">
      <h3>Logistics Management System</h3>
      <p>View Project</p>
    </div>
  </a>

          
        </div>
        <div className="music">
            <a href="https://your-music-link.com" className="proj-item" target="_blank" rel="noreferrer">
          <img src="/Img/Screenshot 2025-06-06 202018.png" alt="" data-aos="flip-down" data-aos-delay="200" />
           <div className="overlay">
      <h3>Wavvy Music App</h3>
      <p>View Project</p>
    </div>
  </a>
        </div>


      </div>



    </section>
    

  );
} ;
export default Project;