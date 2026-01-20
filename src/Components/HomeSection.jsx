import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import bgImage from "/Img/potfilio.avif"; 




const roles = [
  "Web Designer",
  "Frontend Developer",
  "Backend Developer",
  "Full-stack Web Developer",
];

const HomeSection = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing Effect
  useEffect(() => {
    const current = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setText(current.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(current.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === current.length) {
        // pause before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  // Navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".nav1");
      if (navbar) {
        navbar.style.boxShadow =
          window.scrollY > 20 ? "0 4px 12px rgba(0,0,0,0.1)" : "none";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fade-in on scroll
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, appearOptions);
    faders.forEach((fader) => appearOnScroll.observe(fader));
    return () => appearOnScroll.disconnect();
  }, []);

  // AOS init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // set to true if you want animation only once
    });
  }, []);


   



  return (
     <section className="home" id="home"  style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        
      }}>
      <div className="home-content">
        <h1 data-aos="fade-right" data-aos-delay="10" >Hi! I'm Vansh Parashar</h1>



       <div className="change-text" data-aos="fade-left" data-aos-delay="100">
  <h3>
    And I'm &nbsp;<span className="word">{text}</span>
  </h3>
</div>



        
        <p data-aos="fade-right" data-aos-delay="200">
Creative and detail-oriented <strong>Full-Stack Developer (MERN)</strong> with a passion for designing digital products and managing projects from concept to deployment.
</p>

        
        <div className="info-box" data-aos="fade-left" data-aos-delay="300">
          <div className="email-info">
            <h5>Email :</h5>
            <span>parasharvansh719@gmail.com</span>
          </div>
          
        </div>

        <div className="btn" >
          <a href="Vansh_Parashar_s_Resume (1).pdf" className="btn" download>Download CV</a>
          <a href="#" className="btn"  >Hire Me Now!</a>
        </div>

        <div className="social-icons" >
          <a href="https://facebook.com/vansh.parashar.123" target="_blank" rel="noreferrer" >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://linkedin.com/in/vansh-parashar-5036a232b" target="_blank" rel="noreferrer" >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/VANSH-73-WEB" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://instagram.com/vanshparashar719" target="_blank" rel="noreferrer" >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <div className="photo"  >
          <img src="/Img/Vansh Parashar-img.jpg" alt="Vansh Parashar"  data-aos="fade-left" data-aos-delay="600" />
        </div>
      </div>
      

    </section>

  );
};

export default HomeSection;
