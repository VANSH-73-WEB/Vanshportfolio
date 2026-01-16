import React,{useEffect} from 'react';
import bgImage from "/Img/.oth.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const AboutSection = () => {

  
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
  });
  AOS.refresh();
}, []);


  return (
    <section id="about" className="about"  style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        
      }}>
      <div className="photo-about" data-aos="fade-left" data-aos-delay="100">
        <img src="/Img/vanshparashar3.jpg" alt="About Vansh" />
        <div className="info-about">
          
        </div>
      </div>

      <div className="about-content" data-aos="fade-right" data-aos-delay="10">
        <span>Let me introduce myself</span>
        <h2>About me</h2>
        <h3>A story of good</h3>
        <p>  I'm a passionate and self-motivated web developer currently exploring the MERN (MongoDB, Express.js, React, Node.js) stack. I enjoy building responsive, user-friendly websites and web applications. 
          My journey in tech includes hands-on experience with HTML, CSS, JavaScript, Python, and MySQL, along with projects that solve real-world problems — like a music app, portfolio website, and employee management systems.

            I’m always eager to learn new technologies, contribute to innovative projects, and grow as a full-stack developer. Looking forward to connecting with other tech enthusiasts and professionals!
        </p>
        <div className="btn">
          <a href="#" className="btn">Read More!</a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
