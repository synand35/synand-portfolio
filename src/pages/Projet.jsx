import { motion } from "framer-motion";

import person1 from "../assets/1521H-F.jpg";
import person2 from "../assets/bandePassante/home.png";
import person3 from "../assets/devops.jpg";
import person4 from "../assets/devops.jpg";

const members = [
  {
    image: person2,
    name: "Network Monitoring Tool",
    description:
      "Outil de surveillance réseau en temps réel avec visualisation des données de bande passante et alertes automatiques."
  },
  {
    image: person2,
    name: "Alfredo Torres",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor."
  },
  {
    image: person3,
    name: "Adora Montminy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor."
  },
  {
    image: person4,
    name: "Daniel Gallego",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor."
  }
];

function Team() {
  return (
    <section className="min-h-screen bg-[#0A0F1E] text-white py-24 overflow-hidden">

      {/* TITRE */}
      <motion.div
        className="text-center mb-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-mono text-sm tracking-[0.3em] text-blue-500 uppercase">
          Portfolio
        </p>

        <h2 className="mt-4 text-5xl md:text-7xl font-black">
          Meet My Team
        </h2>

        <div className="w-28 h-[2px] bg-white mx-auto mt-6"></div>
      </motion.div>

      {/* MEMBRES */}
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-12">

          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15
              }}
              whileHover={{
                y: -10
              }}
              className="text-center"
            >
              {/* IMAGE */}
              <div className="overflow-hidden mx-auto w-[250px] h-[320px]">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    grayscale
                  "
                  whileHover={{
                    scale: 1.08
                  }}
                  transition={{
                    duration: 0.4
                  }}
                />
              </div>

              {/* NOM */}
              <h3 className="mt-8 text-xl font-bold">
                {member.name}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-4 text-gray-400 leading-7 max-w-[260px] mx-auto">
                {member.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>

      {/* PAGE */}
      <motion.div
        className="
          flex
          justify-end
          mt-20
          px-10
          text-white
          font-semibold
        "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
       Synand
      </motion.div>

    </section>
  );
}

export default Team;