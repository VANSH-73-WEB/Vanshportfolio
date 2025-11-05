import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bgImage from "/Img/.oth.jpg";
const Skill = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // optional: animation duration in milliseconds
      once: false, // optional: animate only once when scrolling
    });
  }, []);

  return (
    <section id="Skill" className="Skill"  style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            
          }}>
      <div className="skill" data-aos="fade-right">
        <h1>
          my <span className="skil">SKILL</span>
        </h1>
       
      </div>
<div className="flex">

      <div className="box1" data-aos="fade-right" data-aos-delay="200">
        <div className="html">
          <i className="fa-brands fa-html5"></i>
        </div>
      
        
      </div>


<div className="box1" data-aos="fade-right" data-aos-delay="300">
      <div className="css" >
        <i className="fa-brands fa-css3-alt"></i>
      </div>
       
      
      </div>


      <div className="box1" data-aos="fade-right" data-aos-delay="400">
      <div className="js" >
        <i className="fa-brands fa-square-js"></i>
      </div>
      
      
      </div>

<div className="box1" data-aos="fade-right" data-aos-delay="500">
      <div className="python" >
        <i className="fa-brands fa-python"></i>
      </div>
       
      
      </div>



<div className="box1" data-aos="fade-right" data-aos-delay="600">
      <div className="react" >
        <i className="fa-brands fa-react "></i>
      </div>
       
      
      </div>



<div className="box1" data-aos="fade-right" data-aos-delay="700">
      <div className="nodejs" >
        <i className="fa-brands fa-node"></i>
      </div>
       
      
      </div>


      
<div className="box1" data-aos="fade-right" data-aos-delay="700">
      <div className="nodejs" >
       <i className="fa-solid fa-c"></i>
      </div>
      
      
      </div>

      
      
<div className="box1" data-aos="fade-right" data-aos-delay="700">
      <div className="cplus" >
      
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
          
      </div>
      
      
      </div>
</div>


<div className="certificates" data-aos="fade-right" data-aos-delay="100">
  <h1>CERTIFICATIONS</h1>
  <ul className="cert-list">
    <li data-aos="fade-left" data-aos-delay="200">
      <strong>Backend Development and API Creation</strong>  <span>Coursera:-
      <a href="https://coursera.org/verify/OURNZKDCH9U0" target="_blank">View Certificate</a></span>
    </li>
    <li data-aos="fade-left" data-aos-delay="300">
      <strong>JavaScript</strong>   <span>GUVI:-
      <a href="https://www.guvi.in/share-certificate/197283854bX502dDHG" target="_blank">View Certificate</a></span>
    </li>
    <li data-aos="fade-left" data-aos-delay="400">
      <strong>Course on DevOps</strong><span> Tech Vision Techonologies:-
      <a href="https://res.cloudinary.com/dumxf8ky8/image/upload/v1757857484/DevOps_eyhzwl.jpg" target="_blank">View Certificate</a>
    </span>
    </li>
    <li data-aos="fade-left" data-aos-delay="500">
      <strong>Getting Started with Artificial Intelligence</strong> <span> IBM SkillsBuild:-
      <a href="https://www.credly.com/badges/d854bfa6-00fc-402b-a4f9-51590a7470dd/public_url" target="_blank">View Certificate</a>
    </span>
    </li>
  </ul>
</div>

    </section>
  );
};

export default Skill;
