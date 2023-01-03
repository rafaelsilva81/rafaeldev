import { useAtom } from "jotai";
import React from "react";
import { preferredLanguageAtom } from "../../lib/atoms";
import BoldText from "../common/BoldText";

const AboutContent = () => {
  const [lang] = useAtom(preferredLanguageAtom);

  if (lang === "en") {
    return (
      <>
        {/* Header */}
        <span className="text-3xl font-bold uppercase md:text-5xl">
          About me
        </span>

        {/* Paragraph (text) */}
        <span className="text-xl font-semibold text-justify md:text-xl">
          {`
          My passion for tech started when I was little, 
          I was always interested in game development, but this shifted
          to web development when I was 15. I started learning HTML, CSS and JS,
          and I was hooked.`}
        </span>

        <span className="text-xl font-semibold text-justify md:text-xl">
          {` 
            I started to learn more and more, and in the recent years I've been learning 
            about modern web development, using the latest technologies such as
          `}
          <BoldText>
            React, NextJS, NodeJS, TypeScript, REST, MongoDB, Git, Firebase,
            TailwindCSS
          </BoldText>{" "}
          and more!
        </span>

        <span className="text-xl font-semibold text-justify md:text-xl">
          {`English is my second language, so I'm available for international remote work, and I'm also open to collaborate on freelance projects `}
        </span>
      </>
    );
  } else {
    return (
      <>
        {/* Header */}
        <span className="text-3xl font-bold uppercase md:text-5xl">
          Sobre mim
        </span>

        {/* Paragraph (text) */}
        <span className="text-xl font-semibold text-justify md:text-xl">
          {`
            Minha paixão por tecnologia começou quando eu era pequeno,
            eu sempre fui interessado em desenvolvimento de jogos, mas isso mudou
            para desenvolvimento web quando eu tinha 15 anos. Comecei a aprender HTML, CSS, JS e PHP
            e eu fiquei apaixonado por essas tecnologias.`}
        </span>

        <span className="text-xl font-semibold text-justify md:text-xl">
          {` 
            Eu comecei a aprender mais e mais, e nos últimos anos eu tenho aprendido
            sobre desenvolvimento web moderno, usando as tecnologias mais recentes como
            `}
          <BoldText>
            React, NextJS, NodeJS, TypeScript, REST, MongoDB, Git, Firebase,
            TailwindCSS
          </BoldText>{" "}
          e mais!
        </span>

        <span className="text-xl font-semibold text-justify md:text-xl">
          {`Inglês é minha segunda língua, então estou disponível para trabalho remoto internacional, e também estou aberto para colaborar em projetos freelance.`}
        </span>
      </>
    );
  }
};

export default AboutContent;
