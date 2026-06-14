import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import hero from "../assets/Mario.png";

function Acceuil() {
  const navigate = useNavigate();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback: navigate to the route so App effect will scroll when mounted
      navigate(`/${id}`);
    }
  };
  return (
    <section className="min-h-screen bg-[#0A0F1E] text-white overflow-hidden">

      {/* LAYOUT : colonne sur mobile, grille 40/60 sur desktop */}
      <div className="flex flex-col md:grid md:grid-cols-[40%_60%] min-h-screen">

        {/* PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full h-[45vh]md:h-screen"
          // style={{ height: "45vh" }}  // hauteur réduite sur mobile
        >
          <motion.img
            src={hero}
            alt="Herilanto Synand Mario ANDONIAINA"
            className="w-full h-full object-cover object-top md:object-center"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />

          {/* Dégradé en bas de la photo sur mobile pour transition douce */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0F1E] to-transparent md:hidden" />
        </motion.div>

        {/* TEXTE */}
        <div className="flex items-center py-8 md:py-0">
          <motion.div
            className="w-full px-6 md:px-20"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 }
              }
            }}
          >

            {/* TAG */}
            <motion.p
              className="font-mono text-xs md:text-sm tracking-[0.25em] md:tracking-[0.3em] text-blue-500 uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Portfolio • Full Stack • DevOps
            </motion.p>

            {/* NOM */}
            <motion.h1
              className="mt-4 md:mt-6 text-4xl md:text-7xl font-black leading-none tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Herilanto Synand Mario
              <span className="block text-blue-500">
                ANDONIAINA
              </span>
            </motion.h1>

            {/* ROLE */}
            <motion.div
              className="mt-4 md:mt-6 inline-flex px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs md:text-sm font-semibold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Full Stack Developer • DevOps Junior
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              className="mt-5 md:mt-8 text-base md:text-xl leading-7 md:leading-8 text-gray-300 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Je conçois des applications web modernes, performantes et évolutives
              en combinant développement Full Stack et pratiques DevOps.
            </motion.p>

            <motion.p
              className="mt-3 md:mt-4 text-sm md:text-base text-gray-400 leading-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Passionné par la technologie, je transforme des idées en solutions
              concrètes, fiables et utiles.
            </motion.p>

           <motion.div
              className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* ✅ Bouton 1 → scroll vers Projets */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("projet")}
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition text-sm md:text-base"
              >
                Voir mes projets
              </motion.button>

              {/* ✅ Bouton 2 → scroll vers Contact */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto px-6 py-3 border border-gray-600 rounded-lg hover:border-blue-500 hover:text-blue-400 transition text-sm md:text-base"
              >
                Me contacter
              </motion.button>
            </motion.div>


          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Acceuil;