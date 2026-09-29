import { useAtom } from "jotai";
import { preferredLanguageAtom } from "../../lib/atoms";
import BoldText from "../common/BoldText";

const AboutContent = () => {
  const [lang] = useAtom(preferredLanguageAtom);
  const isPortuguese = lang === "pt";

  return (
    <>
      <h1 className="section-heading">{isPortuguese ? "Sobre mim" : "About me"}</h1>
      <p className="body-copy">
        {isPortuguese
          ? "Sou formado em Ciência da Computação e minha paixão por tecnologia começou na infância, com o desenvolvimento de jogos. Aos 15 anos, descobri o desenvolvimento web e comecei a aprender HTML, CSS, JavaScript e PHP."
          : "I hold a degree in Computer Science, and my passion for technology started in childhood with game development. At 15, I discovered web development and began learning HTML, CSS, JavaScript, and PHP."}
      </p>
      <p className="body-copy">
        {isPortuguese
          ? "Desde então, continuo aprofundando meus conhecimentos em desenvolvimento web moderno, trabalhando com "
          : "Since then, I have continued to deepen my knowledge of modern web development, working with "}
        <BoldText>
          React, Next.js, Node.js, TypeScript, REST, MongoDB, Git, Firebase
          {isPortuguese ? " e " : ", and "}Tailwind CSS
        </BoldText>
        .
      </p>
      <p className="body-copy">
        {isPortuguese
          ? "Inglês é minha segunda língua. Estou disponível para trabalho remoto internacional e aberto a colaborar em projetos freelance."
          : "English is my second language. I am available for international remote work and open to collaborating on freelance projects."}
      </p>
    </>
  );
};

export default AboutContent;
