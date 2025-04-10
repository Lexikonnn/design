import { useState } from "react";
import "./styles.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false); // zavřít menu po kliknutí
  };

  return (
    <header>
      <div className="logo" onClick={() => handleScrollTo("top")}>ARTE</div>

      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
      </div>

      <nav className={menuOpen ? "nav open" : "nav"}>
        <ul>
          <li><a onClick={() => handleScrollTo("top")}>Home</a></li>
          <li><a onClick={() => handleScrollTo("about")}>About</a></li>
          <li><a onClick={() => handleScrollTo("contact")}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;