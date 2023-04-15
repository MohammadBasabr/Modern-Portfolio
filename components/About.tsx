import { motion } from "framer-motion";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto
    items-center"
    >
      <h3
        className="sm:absolute top-24 mt-5 md:mt-0 uppercase tracking-[20px] text-gray-500
          text-2xl"
      >
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="./Mohammad.jpg"
        className="md:mb-0 flex-shrink-0 w-44 h-44
              rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]"
      />
      <div className="space-y-5 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          here is a{" "}
          <span className="underline decoration-[#f7ab0a]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, nulla
          vitae. Adipisci amet dolor, facere atque modi ab magni illo sint
          fugiat laboriosam assumenda, consequatur cum, quisquam molestiae iusto
          necessitatibus!
        </p>
      </div>
    </motion.div>
  );
}

export default About;
