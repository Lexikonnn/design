import { useEffect } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Radial from "./components/Radial";
import Title from "./components/title/Title";
import "./index.css";

function App() {
  useEffect(() => {
    // Scroll-based animace sekcí
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
            entry.target.classList.remove("section-hidden");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    sections.forEach(section => {
      section.classList.add("section-hidden");
      observer.observe(section);
    });

    // Parallax efekt pro .home-container
    const handleScroll = () => {
      const home = document.querySelector(".home-container");
      if (home) {
        const scroll = window.scrollY;
        home.style.transform = `translateY(${scroll * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      <Radial />
      <section className="home-container">
        <Title />
      </section>
      <section id="about" className="about-container">
        <About />
      </section>
      <section id="contact" className="contact-section">
        <Contact />
      </section>
    </div>
  );
}

export default App;