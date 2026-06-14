import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import database from "../assets/database.jpg";
import backend  from "../assets/code.jpg";
import dev      from "../assets/dev.jpg";
import server   from "../assets/server.jpg";

const skills = [
  { num: "01.", name: "Frontend",        level: 90, tags: ["React", "Vue", "TailwindCSS", "Framer Motion"] },
  { num: "02.", name: "Backend",         level: 82, tags: ["Node.js", "Express", "Laravel", "REST API"]    },
  { num: "03.", name: "Base de données", level: 78, tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]      },
  { num: "04.", name: "DevOps",          level: 70, tags: ["Docker", "GitHub CI/CD", "Linux", "Nginx"]     },
];

const gridImages = [
  { src: dev,      icon: "ti-brand-react",  label: "Frontend",        sub: "React · Vue · UI" },
  { src: backend,  icon: "ti-server",       label: "Backend",         sub: "Node · Laravel"   },
  { src: database, icon: "ti-database",     label: "Base de données", sub: "SQL · NoSQL"      },
  { src: server,   icon: "ti-brand-docker", label: "DevOps",          sub: "Docker · CI/CD"   },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=JetBrains+Mono:wght@400;600&display=swap');

  .sk-section {
    min-height: 100vh;
    background: #0A0F1E;
    color: #fff;
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 900px) {
    .sk-section {
      height: 100vh;
      display: grid;
      grid-template-columns: 50% 1fr;
      overflow: hidden;
    }
  }

  /* ── LEFT ── */
  .sk-left {
    padding: 5rem 1.5rem 2.5rem;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
  @media (min-width: 900px) {
    .sk-left {
      height: 100vh;
      padding: 3.5rem 3.5rem 2.5rem;
      overflow: hidden;
    }
  }

  .sk-title {
    font-size: clamp(2rem, 8vw, 3.2rem);
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 1;
    margin: 0 0 0.5rem;
    flex-shrink: 0;
  }
  .sk-rule {
    width: 100px;
    height: 2px;
    background: #fff;
    margin-bottom: 1.8rem;
    border: none;
    flex-shrink: 0;
  }

  .sk-items {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    min-height: 0;
  }
  .sk-item {
    display: grid;
    grid-template-columns: 52px 1fr;
    align-items: start;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.07);
    flex-shrink: 0;
  }
  @media (min-width: 900px) {
    .sk-item {
      grid-template-columns: 68px 1fr;
      padding: 0.85rem 0;
    }
  }
  .sk-item:last-child { border-bottom: none; }

  .sk-num {
    font-size: 1.4rem;
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 1;
    padding-top: 2px;
    color: #fff;
  }
  @media (min-width: 900px) {
    .sk-num { font-size: 1.8rem; }
  }

  .sk-skill-name {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #fff;
    margin: 0 0 7px;
  }
  .sk-bar-wrap {
    background: rgba(255,255,255,0.1);
    height: 2px;
    border-radius: 2px;
    margin-bottom: 8px;
    overflow: hidden;
  }
  .sk-bar {
    height: 100%;
    background: #fff;
    border-radius: 2px;
    width: 0;
    transition: width 1.2s cubic-bezier(0.16,1,0.3,1);
  }
  .sk-bar.animate { width: var(--w); }

  .sk-tags { display: flex; flex-wrap: wrap; gap: 4px; }
  .sk-tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    color: rgba(255,255,255,0.38);
    background: rgba(255,255,255,0.05);
    padding: 2px 7px;
    border-radius: 3px;
    letter-spacing: 0.04em;
  }

  .sk-page {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: rgba(255,255,255,0.18);
    letter-spacing: 0.12em;
    margin-top: 1.2rem;
    flex-shrink: 0;
  }

  /* ── RIGHT — grille images ── */
  .sk-right {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 160px 160px;
    gap: 10px;
    padding: 1rem 1.5rem 2rem;
    box-sizing: border-box;
  }
  @media (min-width: 900px) {
    .sk-right {
      height: 90vh;
      grid-template-rows: 1fr 1fr;
      gap: 20px;
      padding: 20px;
    }
  }

  .sk-img {
    overflow: hidden;
    position: relative;
    border-radius: 8px;
  }
  @media (min-width: 900px) {
    .sk-img { border-radius: 2px; }
  }

  .sk-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) contrast(1.15) brightness(0.82);
    display: block;
    transition: filter 0.5s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1);
  }
  .sk-img:hover img {
    filter: grayscale(0%) contrast(1.05) brightness(1);
    transform: scale(1.05);
  }
  .sk-img::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 55%, transparent 100%);
    z-index: 1;
    pointer-events: none;
    transition: opacity 0.4s;
  }
  .sk-img:hover::before { opacity: 0.55; }

  .sk-img-tag {
    position: absolute;
    top: 8px; left: 8px;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 5px;
    background: rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 3px 9px;
    border-radius: 4px;
    opacity: 0;
    transform: translateY(-5px);
    transition: opacity 0.3s, transform 0.3s;
  }
  .sk-img:hover .sk-img-tag { opacity: 1; transform: translateY(0); }
  .sk-img-tag i { font-size: 12px; color: #fff; }
  .sk-img-tag span {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    color: rgba(255,255,255,0.75);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .sk-img-label {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    z-index: 2;
    padding: 0.5rem 0.75rem;
    pointer-events: none;
  }
  .sk-img-label-name {
    font-size: 0.6rem;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    line-height: 1;
    margin: 0 0 2px;
  }
  .sk-img-label-sub {
    font-family: 'JetBrains Mono', monospace;
    font-size: 8px;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.06em;
    margin: 0;
  }
`;

function Competences() {
  const barsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          barsRef.current.forEach((bar) => { if (bar) bar.classList.add("animate"); });
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{styles}</style>
      <section id="competences" className="sk-section" ref={sectionRef}>

        {/* LEFT */}
        <div className="sk-left">
          <div>
            <motion.h2
              className="sk-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Mes<br />Compétences
            </motion.h2>
            <hr className="sk-rule" />
          </div>

          <div className="sk-items">
            {skills.map((sk, i) => (
              <motion.div
                key={sk.num}
                className="sk-item"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <span className="sk-num">{sk.num}</span>
                <div>
                  <p className="sk-skill-name">{sk.name}</p>
                  <div className="sk-bar-wrap">
                    <div
                      className="sk-bar"
                      style={{ "--w": `${sk.level}%` }}
                      ref={(el) => (barsRef.current[i] = el)}
                    />
                  </div>
                  <div className="sk-tags">
                    {sk.tags.map((t) => <span key={t} className="sk-tag">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="sk-page">Page | 05</p>
        </div>

        {/* RIGHT */}
        <div className="sk-right">
          {gridImages.map((img, i) => (
            <motion.div
              key={img.label}
              className="sk-img"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            >
              {img.src ? (
                <>
                  <img src={img.src} alt={img.label} />
                  <div className="sk-img-tag">
                    <i className={`ti ${img.icon}`} aria-hidden="true" />
                    <span>{img.label}</span>
                  </div>
                  <div className="sk-img-label">
                    <p className="sk-img-label-name">{img.label}</p>
                    <p className="sk-img-label-sub">{img.sub}</p>
                  </div>
                </>
              ) : (
                <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", background:"#2a2a2a" }}>
                  <i className={`ti ${img.icon}`} style={{ fontSize:"2rem", color:"rgba(255,255,255,0.12)" }} aria-hidden="true" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </section>
    </>
  );
}

export default Competences;