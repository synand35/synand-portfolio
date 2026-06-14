import { useEffect, useRef } from "react";
import hero from "../assets/1521H-F.jpg";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&family=JetBrains+Mono:wght@400;600&display=swap');

  .ap-section {
    background: #0A0F1E;
    color: #fff;
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
    padding: 5rem 0 6rem;
    position: relative;
    overflow: hidden;
  }
  .ap-section::before {
    content: '';
    position: absolute;
    top: -200px;
    right: -200px;
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(59,111,255,0.12) 0%, transparent 70%);
    pointer-events: none;
  }
  .ap-section::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -150px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(102,144,255,0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  .ap-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.25rem;
    position: relative;
    z-index: 1;
  }
  @media (min-width: 640px) {
    .ap-container { padding: 0 2rem; }
  }

  .ap-header {
    margin-bottom: 3rem;
  }
  @media (min-width: 900px) {
    .ap-header { margin-bottom: 5rem; }
  }

  .ap-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: #3B6FFF;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
  .ap-eyebrow::before {
    content: '';
    display: block;
    width: 24px;
    height: 1px;
    background: #3B6FFF;
  }
  .ap-title {
    margin-top: 1rem;
    font-size: clamp(2rem, 6vw, 5rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #fff;
  }
  .ap-title span { color: #3B6FFF; }

  /* ── Main grid ── */
  .ap-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: start;
  }
  @media (min-width: 900px) {
    .ap-grid {
      grid-template-columns: 42% 1fr;
      gap: 5rem;
    }
  }

  /* ── Photo ── */
  .ap-photo-wrap {
    position: relative;
    margin-bottom: 2rem;
  }
  @media (min-width: 900px) {
    .ap-photo-wrap { margin-bottom: 0; }
  }

  .ap-photo-frame {
    position: relative;
    border-radius: 14px;
    overflow: hidden;
    aspect-ratio: 4/3;
  }
  @media (min-width: 900px) {
    .ap-photo-frame {
      aspect-ratio: 3/4;
      border-radius: 20px;
    }
  }

  .ap-photo-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    filter: grayscale(15%) contrast(1.05);
    transition: filter 0.5s ease;
  }
  .ap-photo-frame:hover img {
    filter: grayscale(0%) contrast(1.05);
  }

  .ap-scan {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #3B6FFF, transparent);
    animation: scan 3s linear infinite;
    opacity: 0.7;
  }
  @keyframes scan {
    0%   { top: 0%; opacity: 0.7; }
    50%  { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }

  .ap-corner {
    position: absolute;
    width: 28px;
    height: 28px;
    border-color: #3B6FFF;
    border-style: solid;
    opacity: 0.8;
  }
  .ap-corner-tl { top: 12px; left: 12px; border-width: 2px 0 0 2px; }
  .ap-corner-tr { top: 12px; right: 12px; border-width: 2px 2px 0 0; }
  .ap-corner-bl { bottom: 12px; left: 12px; border-width: 0 0 2px 2px; }
  .ap-corner-br { bottom: 12px; right: 12px; border-width: 0 2px 2px 0; }

  .ap-badge {
    position: absolute;
    bottom: -14px;
    right: 12px;
    background: #3B6FFF;
    color: #fff;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    font-weight: 600;
    padding: 0.6rem 1rem;
    border-radius: 10px;
    line-height: 1.5;
    box-shadow: 0 8px 32px rgba(59,111,255,0.4);
  }
  @media (min-width: 900px) {
    .ap-badge {
      bottom: -18px;
      right: -18px;
      font-size: 0.7rem;
    }
  }

  .ap-badge-dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #4ade80;
    border-radius: 50%;
    margin-right: 6px;
    animation: blink 1.4s ease-in-out infinite;
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.2; }
  }

  /* ── Text block ── */
  .ap-mono-tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: #3B6FFF;
    opacity: 0.7;
  }
  .ap-name {
    margin-top: 1.25rem;
    font-size: clamp(1.6rem, 5vw, 3rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1.05;
    color: #fff;
  }
  .ap-name-accent {
    display: block;
    color: #3B6FFF;
  }
  .ap-role-pill {
    margin-top: 1.25rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(59,111,255,0.12);
    border: 1px solid rgba(59,111,255,0.3);
    color: #6690FF;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.45rem 1rem;
    border-radius: 999px;
    letter-spacing: 0.02em;
    flex-wrap: wrap;
  }
  .ap-role-pill svg { width: 14px; height: 14px; opacity: 0.8; }

  .ap-desc {
    margin-top: 1.5rem;
    color: #cbd5e1;
    font-size: 1rem;
    line-height: 1.8;
    font-weight: 300;
  }
  @media (min-width: 900px) {
    .ap-desc { font-size: 1.1rem; margin-top: 2rem; }
  }
  .ap-desc strong { color: #fff; font-weight: 600; }

  .ap-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.07);
  }
  @media (min-width: 900px) {
    .ap-stats { gap: 2rem; margin-top: 2.5rem; padding-top: 2.5rem; }
  }

  .ap-stat-num {
    font-size: 1.6rem;
    font-weight: 900;
    color: #fff;
    letter-spacing: -0.04em;
    line-height: 1;
  }
  @media (min-width: 900px) {
    .ap-stat-num { font-size: 2rem; }
  }
  .ap-stat-num span { color: #3B6FFF; }
  .ap-stat-label {
    font-size: 0.7rem;
    color: #8892A4;
    margin-top: 0.25rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  /* ── Cards ── */
  .ap-cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 3rem;
  }
  @media (min-width: 600px) {
    .ap-cards { grid-template-columns: repeat(2, 1fr); }
  }
  @media (min-width: 900px) {
    .ap-cards {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
      margin-top: 5rem;
    }
  }

  .ap-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 16px;
    padding: 1.5rem;
    position: relative;
    transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
    overflow: hidden;
  }
  @media (min-width: 900px) {
    .ap-card { padding: 2rem; }
  }
  .ap-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #3B6FFF, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .ap-card:hover {
    transform: translateY(-6px);
    border-color: rgba(59,111,255,0.35);
    background: rgba(59,111,255,0.06);
  }
  .ap-card:hover::before { opacity: 1; }

  .ap-card-icon {
    width: 40px;
    height: 40px;
    background: rgba(59,111,255,0.15);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25rem;
    color: #3B6FFF;
  }
  .ap-card-icon svg { width: 20px; height: 20px; }
  .ap-card-title {
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.75rem;
    letter-spacing: -0.01em;
  }
  .ap-card-text {
    font-size: 0.88rem;
    color: #8892A4;
    line-height: 1.7;
  }

  .ap-watermark {
    position: absolute;
    top: 3rem;
    right: -1rem;
    font-size: clamp(6rem, 18vw, 18rem);
    font-weight: 900;
    color: rgba(59,111,255,0.03);
    line-height: 1;
    user-select: none;
    pointer-events: none;
    letter-spacing: -0.06em;
  }
`;

function Apropos() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".ap-reveal").forEach((el, i) => {
              el.style.transitionDelay = `${i * 80}ms`;
              el.classList.add("ap-visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{styles}</style>
      <style>{`
        .ap-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .ap-reveal.ap-visible {
          opacity: 1;
          transform: none;
        }
      `}</style>

      <section id="about" className="ap-section" ref={sectionRef}>

        <div className="ap-container">

          {/* Header */}
          <div className="ap-header ap-reveal">
            <p className="ap-eyebrow">À Propos</p>
            <h2 className="ap-title">
              Qui <span>suis-je</span> ?
            </h2>
          </div>

          {/* Main grid */}
          <div className="ap-grid">

            {/* Photo */}
            <div className="ap-photo-wrap ap-reveal">
              <div className="ap-photo-frame">
                <img src={hero} alt="Herilanto Synand Mario ANDONIAINA" />
                <div className="ap-scan" />
                <div className="ap-corner ap-corner-tl" />
                <div className="ap-corner ap-corner-tr" />
                <div className="ap-corner ap-corner-bl" />
                <div className="ap-corner ap-corner-br" />
              </div>
              <div className="ap-badge">
                <span className="ap-badge-dot" />
                Disponible — Open to work
              </div>
            </div>

            {/* Text */}
            <div className="ap-text">
              <p className="ap-mono-tag ap-reveal">&lt;about_me&gt;</p>

              <h3 className="ap-name ap-reveal">
                Herilanto Synand Mario
                <span className="ap-name-accent">ANDONIAINA</span>
              </h3>

              <div className="ap-reveal">
                <span className="ap-role-pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-3"/>
                    <path d="M15 3h-6v4h6V3z"/>
                  </svg>
                  Full Stack Developer · DevOps Junior
                </span>
              </div>

              <p className="ap-desc ap-reveal">
                Je conçois des applications web <strong>modernes, performantes
                et évolutives</strong> en combinant développement Full Stack
                et pratiques DevOps. Passionné par les nouvelles technologies,
                je transforme des idées en solutions concrètes et fiables.
              </p>

              <p className="ap-desc ap-reveal" style={{ marginTop: "1rem" }}>
                Mon objectif : livrer des <strong>produits numériques
                de qualité</strong> tout en continuant à approfondir
                mon expertise technique.
              </p>

              <div className="ap-stats ap-reveal">
                <div>
                  <div className="ap-stat-num">2<span>+</span></div>
                  <div className="ap-stat-label">ans d'expérience</div>
                </div>
                <div>
                  <div className="ap-stat-num">10<span>+</span></div>
                  <div className="ap-stat-label">projets livrés</div>
                </div>
                <div>
                  <div className="ap-stat-num">∞</div>
                  <div className="ap-stat-label">lignes de code</div>
                </div>
              </div>

              <p className="ap-mono-tag ap-reveal" style={{ marginTop: "2rem" }}>&lt;/about_me&gt;</p>
            </div>
          </div>

          {/* Cards */}
          <div className="ap-cards">
            <div className="ap-card ap-reveal">
              <div className="ap-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a9.96 9.96 0 016 10M12 2a9.96 9.96 0 00-6 10"/>
                  <path d="M2 12h20"/>
                </svg>
              </div>
              <h4 className="ap-card-title">Vision</h4>
              <p className="ap-card-text">
                Concevoir des solutions numériques modernes qui apportent
                une réelle valeur aux utilisateurs finaux.
              </p>
            </div>

            <div className="ap-card ap-reveal">
              <div className="ap-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h4 className="ap-card-title">Objectif</h4>
              <p className="ap-card-text">
                Développer des applications fiables, sécurisées et évolutives
                répondant aux besoins réels des entreprises.
              </p>
            </div>

            <div className="ap-card ap-reveal">
              <div className="ap-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <h4 className="ap-card-title">DevOps Mindset</h4>
              <p className="ap-card-text">
                Automatiser, optimiser et améliorer continuellement
                les processus de développement et de déploiement.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Apropos;