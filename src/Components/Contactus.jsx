import  { useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yexjnnn",   
        "template_retrnmr",  
        form.current,
        "VDrJPdd4bF9jmkSbU"   
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          e.target.reset(); 
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message, please try again.");
        }
        
      );
      
  };

  return (
    <section id="Contactus" className="Contactus" >
      <div className="headi" data-aos="fade-right" data-aos-delay="200">
        <h1>CONTACT US</h1>
      </div>


      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group" data-aos="fade-right" data-aos-delay="200">
          <input type="text" name="user_name" placeholder="Enter your name" required />
        </div>

        <div className="form-group" data-aos="fade-left" data-aos-delay="200">
          <input type="email" name="user_email" placeholder="Enter your email" required />
        </div>

        <div className="form-group" data-aos="fade-right" data-aos-delay="200">
          <input type="number" name="user_number" placeholder="Enter your phone number" required />
        </div>

        <div className="form-group" data-aos="fade-left" data-aos-delay="200">
          <input type="text" name="user_address" placeholder="Enter your address" required />
        </div>

        <div className="form-group" data-aos="fade-right" data-aos-delay="200">
          <textarea name="message" placeholder="Write your message..." required></textarea>
        </div>

        <button type="submit" className="btncon" data-aos="flip-right" data-aos-delay="200">
          Send
        </button>
      </form>

      <marquee className="marq" direction="left">Thanks For Visiting!</marquee>
       {/* <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover
      /> */}
    </section>
  );
  
};

export default Contactus;
