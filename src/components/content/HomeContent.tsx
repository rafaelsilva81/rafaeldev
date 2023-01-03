import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React from "react";
import { contentAtom, preferredLanguageAtom } from "../../lib/atoms";
import BoldText from "../common/BoldText";

const HomeContent = () => {
  const [, setPage] = useAtom(contentAtom);
  const [lang] = useAtom(preferredLanguageAtom);

  if (lang === "en") {
    return (
      <>
        {/* Header */}
        <span className="text-3xl font-bold uppercase md:text-5xl">
          Rafael Galdino da Silva,
        </span>

        {/* Paragraph (text) */}
        <span className="text-xl font-semibold text-justify md:text-xl">
          <BoldText>Fullstack Web Developer</BoldText>, Computer Science
          undergraduate, Tech enthusiast and more.
        </span>

        <span className="text-xl font-semibold text-justify md:text-xl">
          Based in Brazil and interested in all sorts of tech, my main focus is
          modern web development. <br /> I use my knowledge to build software
          solutons using the latest technologies.
        </span>

        <span className="text-xl font-semibold text-justify md:text-xl">
          {`I'm currently looking for an Trainee or Junior position, if you are
          interested, please `}
          <BoldText>
            <button
              className="transition ease-in-out hover:opacity-80"
              onClick={() => setPage("contact")}
            >
              {" "}
              contact me!{" "}
            </button>
          </BoldText>
        </span>

        <span className="text-xl font-semibold text-justify md:text-xl">
          <BoldText>
            <a
              className="p-2 transition ease-in-out rounded-md hover:opacity-80 bg-neutral-900 dark:bg-neutral-100"
              href="/resume.pdf"
              download
              target="_blank"
              rel="noreferrer"
            >
              Download my CV
            </a>
          </BoldText>
        </span>
      </>
    );
  } else {
    return (
      <>
        {/* Header */}
        <span className="text-3xl font-bold uppercase md:text-5xl">
          Rafael Galdino da Silva,
        </span>

        {/* Paragraph (text) */}
        <span className="text-xl font-semibold text-justify md:text-xl">
          <BoldText>Desenvolvedor Web Fullstack</BoldText>, Estudante de Ciência
          da Computação, Entusiasta em tecnologia e mais.
        </span>

        <span className="text-xl font-semibold text-justify md:text-xl">
          Sou interessado em todo tipo de tecnologia, mas meu foco principal é
          desenvolvimento web moderno. <br /> Eu uso meus conhecimentos para
          construir soluções de software elegantes usando as tecnologias mais
          recentes.
        </span>

        <span className="text-xl font-semibold text-justify md:text-xl">
          {`Atualmente estou procurando por uma posição de Trainee ou Júnior, se você estiver interessado, por favor `}
          <BoldText>
            <button
              className="transition ease-in-out hover:opacity-80"
              onClick={() => setPage("contact")}
            >
              {" "}
              entre em contato!{" "}
            </button>
          </BoldText>
        </span>

        <span className="text-xl font-semibold text-justify md:text-xl">
          <BoldText>
            <a
              className="p-2 transition ease-in-out rounded-md hover:opacity-80 bg-neutral-900 dark:bg-neutral-100"
              href="/curriculo.pdf"
              download
              target="_blank"
              rel="noreferrer"
            >
              Baixe meu CV
            </a>
          </BoldText>
        </span>
      </>
    );
  }
};
export default HomeContent;
