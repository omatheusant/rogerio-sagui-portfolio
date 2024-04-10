import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Filmografia
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Dona Beja"
            company="HBO"
            companyLink="https://www.hbo.com/"
            time="203"
            address="Diretor."
            work="Atualmente sou diretor da nova novela da HBO MAX, Dona Beja. A novela terá sua estreia em 2024 e conta com grandes atores brasileiros em seu elenco."
          />

          <Details
            position="Luz"
            company="Netflix"
            companyLink="https://www.netflix.com/br/"
            time="2023"
            address="Diretor."
            work="Fui diretor da nova série infanto-juvenil da Netflix chamada 'Luz' que terá sua estreia em 2024."
          />

          <Details
            position="Mar do Sertão"
            company="Globo"
            companyLink="https://www.globo.com/"
            time="2022-2023"
            address="Diretor."
            work="Dirigi a novela 'Mar do Sertão' que estreou na globo em 2023. Sendo bastante aclamada pelo público, a novela recebeu uma premiação Ouro no New York Festivals, um dos maiores festivais do mercado audiovisual do mundo."
          />

          <Details
            position="Rosa Tirana"
            company="Bra"
            companyLink="#"
            time="2021"
            address="Diretor e Roteirista."
            work="Sou diretor e roteirista do filme Rosa Tirana, uma criação independente que se destacou no cenário nacional e internacional. O filme foi reconhecido nas categorias de Melhor Filme, Melhor Roteiro, Melhor Direção, Melhor Atriz e Melhor Ator. "
          />

          <Details
            position="Cavaleiro Solitário"
            company="Bra"
            companyLink="#"
            time="2020"
            address="Diretor e Roteirista."
          />
          <Details
            position="Automedicação"
            company="Bra"
            companyLink="#"
            time="2020"
            address="Diretor e Roteirista."
          />
          <Details
            position="As Memórias de um Quilombo"
            company="Bra"
            companyLink="#"
            time="2019"
            address="Diretor e Roteirista."
          />
          <Details
            position="Affonso Manta"
            company="Bra"
            companyLink="#"
            time="2017"
            address="Diretor e Roteirista."
          />
          <Details
            position="Cangaço Negro"
            company="Bra"
            companyLink="#"
            time="2015"
            address="Diretor e Roteirista."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
