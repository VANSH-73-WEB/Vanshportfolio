import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
      setVisible(scrollTop > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circumference = 2 * Math.PI * 20;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <button
      className={`scroll-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      type="button"
    >
      <svg width="46" height="46" viewBox="0 0 46 46">
        <circle
          cx="23"
          cy="23"
          r="20"
          fill="none"
          stroke="rgba(0,127,115,0.25)"
          strokeWidth="3"
        />
        <circle
          cx="23"
          cy="23"
          r="20"
          fill="none"
          stroke="#00bfa6"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 23 23)"
        />
      </svg>
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ScrollTop;
