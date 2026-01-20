import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bgImage from "/Img/.oth.jpg";
import "./Carousel.css";

const projects = [
  {
    img: "/Img/Screenshot 2025-06-06 202018.png",
    title: "Wavvy Music App",
    link: "https://github.com/VANSH-73-WEB/Wavvy_music-_app.git",
  },
  {
    img: "/Img/E-commerce.png",
    title: "E-commerce",
    link: "https://github.com/VANSH-73-WEB/AURELIOSTORE.git",
  },
  {
    img: "/Img/BlogBuzz.png",
    title: "BlogBuzz",
    link: "https://github.com/VANSH-73-WEB/BloggBuzz.git",
  },
];

const Project = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const next = () =>
    setCurrent((prev) => (prev + 1) % projects.length);

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );

  return (
    <section
      id="Project"
      className="Project"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="project" data-aos="flip-left">
        <h1>
          MY <span className="proj">PROJECT</span>
        </h1>
      </div>

      {/* ===== Carousel ===== */}
      <div className="carousel">

        {/* Indicators */}
        <div className="carousel-indicators">
          {projects.map((_, i) => (
            <button
              key={i}
              className={i === current ? "active" : ""}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>

        {/* Slides */}
       <div className="carousel-inner coverflow">
  {projects.map((project, i) => {
    let position = "side";

    if (i === current) position = "center";
    else if (
      i === (current - 1 + projects.length) % projects.length
    )
      position = "left";
    else if (
      i === (current + 1) % projects.length
    )
      position = "right";

    return (
      <div
        key={i}
        className={`carousel-item ${position}`}
      >
        <a
          href={project.link}
          className="proj-item"
          target="_blank"
          rel="noreferrer"
        >
          <img src={project.img} alt={project.title} />
          <div className="overlay">
            <h3>{project.title}</h3>
            <p>View Project</p>
          </div>
        </a>
      </div>
    );
  })}
</div>


        {/* Controls */}
        <button className="carousel-control prev" onClick={prev}>
          ❮
        </button>
        <button className="carousel-control next" onClick={next}>
          ❯
        </button>
      </div>
    </section>
  );
};

export default Project;
