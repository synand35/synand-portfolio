import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;600&display=swap');

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    font-family: 'Inter', sans-serif;
    transition: background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease;
  }
  .nav.scrolled {
    background: rgba(10, 15, 30, 0.85);
    border-bottom: 1px solid rgba(59, 111, 255, 0.12);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }
  .nav.top {
    background: transparent;
    border-bottom: 1px solid transparent;
  }
  .nav-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    cursor: pointer;
    background: none;
    border: none;
  }
  .nav-logo-bracket {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1rem;
    color: #3B6FFF;
    font-weight: 600;
    line-height: 1;
  }
  .nav-logo-name {
    font-size: 0.85rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.02em;
    line-height: 1;
  }
  .nav-logo-role {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.6rem;
    color: rgba(59,111,255,0.7);
    letter-spacing: 0.1em;
    line-height: 1;
    margin-top: 2px;
  }
  .nav-links {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .nav-link {
    position: relative;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 600;
    color: rgba(255,255,255,0.55);
    letter-spacing: 0.04em;
    padding: 0.45rem 0.85rem;
    border-radius: 8px;
    transition: color 0.2s ease, background 0.2s ease;
    cursor: pointer;
    background: none;
    border: none;
    font-family: 'Inter', sans-serif;
  }
  .nav-link:hover {
    color: #fff;
    background: rgba(255,255,255,0.05);
  }
  .nav-link.active {
    color: #fff;
  }
  .nav-link.active::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    background: #3B6FFF;
    border-radius: 50%;
  }
  .nav-cta {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    font-size: 0.78rem;
    font-weight: 700;
    color: #fff;
    background: #3B6FFF;
    padding: 0.45rem 1.1rem;
    border-radius: 8px;
    letter-spacing: 0.03em;
    margin-left: 0.5rem;
    transition: background 0.2s ease, transform 0.15s ease;
    cursor: pointer;
    border: none;
    font-family: 'Inter', sans-serif;
  }
  .nav-cta:hover {
    background: #2d5fe0;
    transform: translateY(-1px);
  }
  .nav-cta svg { width: 13px; height: 13px; }
  .nav-burger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
  }
  .nav-burger span {
    display: block;
    width: 22px;
    height: 2px;
    background: #fff;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  .nav-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .nav-burger.open span:nth-child(2) { opacity: 0; }
  .nav-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  .nav-mobile {
    display: none;
    flex-direction: column;
    padding: 1rem 2rem 1.5rem;
    background: rgba(10, 15, 30, 0.97);
    border-top: 1px solid rgba(59,111,255,0.1);
    gap: 0.25rem;
  }
  .nav-mobile.open { display: flex; }
  .nav-mobile .nav-link {
    padding: 0.7rem 0.5rem;
    font-size: 0.9rem;
    border-radius: 6px;
  }
  .nav-mobile .nav-cta {
    margin-left: 0;
    margin-top: 0.5rem;
    justify-content: center;
    padding: 0.7rem 1rem;
    border-radius: 8px;
  }
  @media (max-width: 768px) {
    .nav-links, .nav-desktop-cta { display: none; }
    .nav-burger { display: flex; }
  }
`;

// ✅ Mapping label → id de section dans le DOM
const links = [
  { to: "/",           id: "acceuil",    label: "Accueil"     },
  { to: "/apropos",    id: "apropos",    label: "À propos"    },
  { to: "/projet",     id: "projet",     label: "Projets"     },
  { to: "/competence", id: "competence", label: "Compétences" },
];

// ✅ Fonction utilitaire pour scroller vers une section
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile au changement de route
  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      <style>{styles}</style>
      <nav className={`nav ${scrolled ? "scrolled" : "top"}`}>
        <div className="nav-inner">

          {/* Logo → scroll vers le haut */}
          <button className="nav-logo" onClick={() => scrollToSection("acceuil")}>
            <span className="nav-logo-bracket">{"{ }"}</span>
            <div>
              <p className="nav-logo-name">ANDONIAINA</p>
              <p className="nav-logo-role">Full Stack · DevOps</p>
            </div>
          </button>

          {/* Desktop links */}
          <ul className="nav-links">
            {links.map(({ to, id, label }) => (
              <li key={to}>
                <button
                  className={`nav-link${location.pathname === to ? " active" : ""}`}
                  onClick={() => scrollToSection(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Contact */}
          <div className="nav-desktop-cta" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <a
              href="/cv.pdf"
              download="CV_Andoniaina.pdf"
              className="nav-cta"
              aria-label="Télécharger mon CV"
            >
              Télécharger mon CV
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" />
              </svg>
            </a>
            <button className="nav-cta" onClick={() => scrollToSection("contact")}>
              Contact
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className={`nav-burger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`nav-mobile${menuOpen ? " open" : ""}`}>
          {links.map(({ to, id, label }) => (
            <button
              key={to}
              className={`nav-link${location.pathname === to ? " active" : ""}`}
              onClick={() => { scrollToSection(id); setMenuOpen(false); }}
            >
              {label}
            </button>
          ))}
          <a
            href="/cv.pdf"
            download="CV_Andoniaina.pdf"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
            aria-label="Télécharger mon CV"
          >
            Télécharger mon CV
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" />
            </svg>
          </a>
          <button className="nav-cta" onClick={() => { scrollToSection("contact"); setMenuOpen(false); }}>
            Contact
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;