import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import bgImage from "/Img/.oth.jpg";

const ServiceSection = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, // optional: animation duration in milliseconds
          once: false      // optional: animate only once when scrolling
        });
      }, []);

    return(
        <section id='Service' className="Service" style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        
      }}>
            <div className="foru">
                <h1 data-aos="fade-left" data-aos-delay="200">WHAT I WILL DO FOR YOU</h1>
                <div className="lin1" data-aos="fade-right" data-aos-delay="400"></div>
                <h2 data-aos="fade-left" data-aos-delay="200">OUR SERVICES</h2>
                <div className="lin2" data-aos="fade-right" data-aos-delay="400"></div>
            </div>
            <div className="both">

            <div className="front"  data-aos="fade-right"><h2>Frontened</h2>
            <p>Skilled in HTML, CSS, JavaScript, Tailwind CSS, and React – crafting visually appealing and highly functional web interfaces.</p>
            <p> I bring designs to life with code — transforming ideas into smooth, pixel-perfect frontend experiences.</p>
            </div>
            <div className="back"  data-aos="fade-left"><h2>Backened</h2>
                <p> Skilled in building RESTful APIs, managing databases with MySQL, and implementing secure and efficient backend logic using Node.js.</p>
                <p>Backend Developer focused on API development, database integration, and server-side logic using Node.js and Express.</p>
                </div>

            </div>
                <div className="fulst">            </div>

         </section>
    );



};
export default ServiceSection;