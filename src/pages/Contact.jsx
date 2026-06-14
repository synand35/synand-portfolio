import { motion } from "framer-motion";
import { Phone, Globe, Mail, MapPin } from "lucide-react";
import building from "../assets/Synand.png";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0A0F1E] text-white overflow-hidden"
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-screen">
        
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden"
          // style={{ height: "45vh" }}
        >
          <img
            src={building}
            alt="Contact"
            className="w-full h-full object-cover object-center lg:object-top"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0F1E] to-transparent lg:hidden" />
        </motion.div>

        {/* CONTENU */}
        <div
          className="flex items-center py-10 lg:py-0"
          style={{ minHeight: "55vh" }}
        >
          <motion.div
            className="w-full px-6 sm:px-10 md:px-16 lg:px-20"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* TAG */}
            <p className="font-mono tracking-[0.3em] text-blue-500 uppercase text-xs sm:text-sm">
              Contact
            </p>

            {/* TITRE */}
            <h2 className="mt-3 md:mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none">
              My Contact
            </h2>

            <div className="w-20 sm:w-28 h-[2px] bg-white mt-4 md:mt-6" />

            {/* DESCRIPTION */}
            <p className="mt-6 md:mt-10 text-sm sm:text-base text-gray-300 leading-7 md:leading-8 max-w-xl">
              Je suis disponible pour collaborer sur des projets web modernes,
              des missions Full Stack ou DevOps. N'hésitez pas à me contacter
              pour discuter de vos idées ou opportunités professionnelles.
            </p>

            {/* CONTACTS */}
            <div className="mt-8 md:mt-12 space-y-5 md:space-y-8">
              
              {/* Téléphone */}
              <div className="flex items-center gap-3 md:gap-4 group">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition">
                  <Phone size={16} className="text-blue-500" />
                </div>

                <span className="text-sm md:text-base text-gray-200">
                  +261 34 48 580 49
                </span>
              </div>

              {/* Site web */}
              <div className="flex items-center gap-3 md:gap-4 group">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition">
                  <Globe size={16} className="text-blue-500" />
                </div>

                <a
                  href="https://www.synand.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm md:text-base text-gray-200 hover:text-blue-400 transition underline underline-offset-4 decoration-blue-500/30"
                >
                  www.synand.dev
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 md:gap-4 group">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition">
                  <Mail size={16} className="text-blue-500" />
                </div>

                <a
                  href="mailto:andoniainasynand@gmail.com"
                  className="text-sm md:text-base text-gray-200 hover:text-blue-400 transition break-all"
                >
                  andoniainasynand@gmail.com
                </a>
              </div>

              {/* Localisation */}
              <div className="flex items-center gap-3 md:gap-4 group">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition">
                  <MapPin size={16} className="text-blue-500" />
                </div>

                <span className="text-sm md:text-base text-gray-200">
                  Antananarivo, Madagascar
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="mailto:andoniainasynand@gmail.com"
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-sm transition"
            >
              <Mail size={16} />
              M'envoyer un email
            </a>

            <div className="pb-10 lg:pb-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;