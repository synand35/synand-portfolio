import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, ExternalLink, X, ChevronLeft, ChevronRight, Grid2x2 } from "lucide-react";
import { useState } from "react";

// ── Remplace avec tes vraies images ──
import home   from "../assets/bandePassante/home.png";
import stats  from "../assets/bandePassante/donnee.png";
import alerts from "../assets/bandePassante/periode.png";
import config from "../assets/bandePassante/home.png";
import report from "../assets/bandePassante/historique bande.png";

import devops1 from "../assets/devops.jpg";
import devops2 from "../assets/devops.jpg";
import devops3 from "../assets/devops.jpg";
import devops4 from "../assets/devops.jpg";
import devops5 from "../assets/devops.jpg";

const projects = [
  {
    cover: home,
    name: "Network Monitoring Tool",
    description: "Outil de surveillance réseau en temps réel avec visualisation des données de bande passante et alertes automatiques.",
    tags: ["React", "Node.js", "WebSocket"],
    repo: "https://github.com/synand35/network-monitoring",
    demo: "https://synand.dev",
    gallery: [home, stats, alerts, config, report],
  },
  {
    cover: devops1,
    name: "Portfolio Personnel",
    description: "Portfolio moderne Full Stack avec animations Framer Motion, responsive design et déploiement CI/CD.",
    tags: ["React", "Vite", "TailwindCSS"],
    repo: "https://github.com/synand35/synand-portfolio",
    demo: "https://synand.dev",
    gallery: [devops1, devops2, devops3, devops4, devops5],
  },
  {
    cover: devops1,
    name: "DevOps Pipeline",
    description: "Pipeline CI/CD automatisé avec Docker, GitHub Actions et déploiement Nginx sur serveur Linux.",
    tags: ["Docker", "GitHub CI/CD", "Nginx"],
    repo: "https://github.com/synand35/devops-pipeline",
    demo: null,
    gallery: [devops1, devops2, devops3, devops4, devops5],
  },
  {
    cover: devops1,
    name: "API REST Laravel",
    description: "API RESTful sécurisée avec authentification JWT, gestion des rôles et documentation Swagger.",
    tags: ["Laravel", "PostgreSQL", "JWT"],
    repo: "https://github.com/synand35/laravel-api",
    demo: null,
    gallery: [devops1, devops2, devops3, devops4, devops5],
  },
];

// ── LIGHTBOX ──────────────────────────────────────────────────
function Lightbox({ project, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = () => setCurrent((i) => (i - 1 + project.gallery.length) % project.gallery.length);
  const next = () => setCurrent((i) => (i + 1) % project.gallery.length);
  const handleBackdrop = (e) => { if (e.target === e.currentTarget) onClose(); };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdrop}
      >
        {/* Header */}
        <div className="w-full max-w-5xl flex items-center justify-between mb-4 px-1">
          <div>
            <p className="text-white font-bold text-lg">{project.name}</p>
            <p className="text-gray-400 text-sm font-mono">
              {current + 1} / {project.gallery.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
          >
            <X size={18} className="text-white" />
          </button>
        </div>

        {/* Image principale */}
        <div className="relative w-full max-w-5xl flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-0 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-blue-500/40 flex items-center justify-center transition -translate-x-2 md:-translate-x-6"
          >
            <ChevronLeft size={22} className="text-white" />
          </button>

          <motion.img
            key={current}
            src={project.gallery[current]}
            alt={`${project.name} - ${current + 1}`}
            className="max-h-[60vh] w-full object-contain rounded-xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
          />

          <button
            onClick={next}
            className="absolute right-0 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-blue-500/40 flex items-center justify-center transition translate-x-2 md:translate-x-6"
          >
            <ChevronRight size={22} className="text-white" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 md:gap-3 mt-5 overflow-x-auto max-w-5xl w-full justify-center px-2">
          {project.gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`flex-shrink-0 w-14 h-14 md:w-20 md:h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                i === current
                  ? "border-blue-500 scale-105"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <img src={img} alt={`thumb-${i}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── PAGE PROJETS ──────────────────────────────────────────────
function Projet() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="min-h-screen bg-[#0A0F1E] text-white py-20 md:py-24 overflow-hidden">

      {lightbox && (
        <Lightbox
          project={lightbox.project}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}

      {/* TITRE */}
      <motion.div
        className="text-center mb-14 md:mb-20 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-blue-500 uppercase">
          Portfolio
        </p>
        <h2 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-black">
          Mes Projets
        </h2>
        <div className="w-20 md:w-28 h-[2px] bg-white mx-auto mt-5 md:mt-6" />
      </motion.div>

      {/* GRILLE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Ligne bleue top au hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              {/* IMAGE COVER */}
              <div
                className="relative h-48 sm:h-56 overflow-hidden cursor-pointer"
                onClick={() => setLightbox({ project, index: 0 })}
              >
                <img
                  src={project.cover}
                  alt={project.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/30 to-transparent" />

                {/* Icône loupe */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-500/80 backdrop-blur-sm flex items-center justify-center">
                    <Grid2x2 size={20} className="text-white" />
                  </div>
                </div>

                {/* Tags */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-blue-500/20 border border-blue-500/30 text-blue-300 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* MINI GALERIE 4 photos */}
              <div className="grid grid-cols-4 gap-1 px-3 pt-3">
                {project.gallery.slice(1, 5).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox({ project, index: i + 1 })}
                    className="relative h-14 rounded-lg overflow-hidden opacity-60 hover:opacity-100 transition-all duration-200 hover:scale-105"
                  >
                    <img
                      src={img}
                      alt={`${project.name} ${i + 2}`}
                      className="w-full h-full object-cover"
                    />
                    {i === 3 && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">+5</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* CONTENU */}
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-6 line-clamp-2">
                  {project.description}
                </p>

                {/* BOUTONS */}
                <div className="mt-5 flex items-center gap-3 flex-wrap">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white hover:bg-blue-500/10 hover:border-blue-500/40 hover:text-blue-400 transition-all duration-200"
                  >
                    <GitBranch size={15} />
                    Code
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-sm font-semibold text-white hover:bg-blue-700 transition-all duration-200"
                    >
                      <ExternalLink size={15} />
                      Demo
                    </a>
                  )}

                  <button
                    onClick={() => setLightbox({ project, index: 0 })}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200 ml-auto"
                  >
                    <Grid2x2 size={15} />
                    Galerie
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SIGNATURE */}
      <motion.div
        className="flex justify-end mt-16 md:mt-20 px-6 md:px-10 text-white/30 font-mono text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Synand
      </motion.div>

    </section>
  );
}

export default Projet;