import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { useAtom } from "jotai";
import { preferredLanguageAtom } from "../../lib/atoms";
import BoldText from "../common/BoldText";
import ContactElement from "../common/ContactElement";

const HomeContent = () => {
  const [lang] = useAtom(preferredLanguageAtom);
  const isPortuguese = lang === "pt";

  return (
    <>
      <h1 className="section-heading">Rafael Galdino da Silva,</h1>
      <p className="body-copy">
        <BoldText>
          {isPortuguese ? "Cientista da Computação" : "Computer Scientist"}
        </BoldText>
        {isPortuguese
          ? " e desenvolvedor web fullstack, apaixonado por tecnologia."
          : " and fullstack web developer with a passion for technology."}
      </p>
      <p className="body-copy">
        {isPortuguese
          ? "Sou do Brasil e me interesso por todo tipo de tecnologia, com foco em desenvolvimento web moderno. Uso meus conhecimentos para construir soluções de software elegantes com as tecnologias mais recentes."
          : "Based in Brazil, I am interested in all kinds of technology, with a focus on modern web development. I use my knowledge to build thoughtful software solutions with the latest technologies."}
      </p>
      <div className="contact-links">
        <ContactElement
          icon={faLinkedinIn}
          link="https://www.linkedin.com/in/rafaelgaldinosilva81/"
          name="/rafaelgaldinosilva81"
        />
        <ContactElement
          icon={faGithub}
          link="https://www.github.com/rafaelsilva81/"
          name="/rafaelsilva81"
        />
        <ContactElement
          icon={faFile}
          link={isPortuguese ? "/curriculo.pdf" : "/resume.pdf"}
          name={isPortuguese ? "currículo" : "curriculum vitae"}
        />
      </div>
    </>
  );
};

export default HomeContent;
