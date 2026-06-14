import './App.css'
import { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from './components/Navbar'
import Acceuil from './pages/Acceuil'
import Apropos from './pages/Apropos'
import Projet from './pages/Projet'
import Contact from './pages/Contact'
import Competence from './pages/Competence'

export const sections = [
  { path: "/",           id: "acceuil"    },
  { path: "/apropos",    id: "apropos"    },
  { path: "/competence", id: "competence" },
  { path: "/projet",     id: "projet"     },
  { path: "/contact",    id: "contact"    },
];

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const scrolledByNav = useRef(false);

  // Clic nav → scroll vers la section
  useEffect(() => {
    const section = sections.find((s) => s.path === location.pathname);
    if (section) {
      const el = document.getElementById(section.id);
      if (el) {
        scrolledByNav.current = true;
        el.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => { scrolledByNav.current = false; }, 800);
      }
    }
  }, [location.pathname]);

  // Scroll manuel → met à jour l'URL
  useEffect(() => {
    const observers = sections.map(({ id, path }) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !scrolledByNav.current) {
            navigate(path, { replace: true });
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, [navigate]);

  return (
    <>
      <Navbar />
      <main>
        <section id="acceuil">    <Acceuil />    </section>
        <section id="apropos">    <Apropos />    </section>
        <section id="projet">     <Projet />     </section>
        <section id="competence"> <Competence /> </section>
        <section id="contact">    <Contact />    </section>
      </main>
    </>
  );
}

export default App