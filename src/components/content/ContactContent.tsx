import {
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useAtom } from "jotai";
import { preferredLanguageAtom } from "../../lib/atoms";
import BoldText from "../common/BoldText";
import ContactElement from "../common/ContactElement";

const ContactContent = () => {
  const [lang] = useAtom(preferredLanguageAtom);
  const isPortuguese = lang === "pt";

  return (
    <>
      <h1 className="section-heading">
        {isPortuguese ? "Entre em contato." : "Get in touch."}
      </h1>
      <p className="body-copy">
        {isPortuguese
          ? "Entre em contato pelos links abaixo para conversar sobre um projeto, uma colaboração, uma oportunidade ou apenas para dizer "
          : "Get in touch using the links below to talk about a project, a collaboration, an opportunity, or just to say "}
        <BoldText>{isPortuguese ? "oi!" : "hi!"}</BoldText>
      </p>
      <div className="contact-links">
        <ContactElement
          icon={faLinkedinIn}
          link="https://www.linkedin.com/in/rafaelgaldinosilva81/"
          name="/rafaelgaldinosilva81"
        />
        <ContactElement
          icon={faGithub}
          link="https://github.com/rafaelsilva81"
          name="/rafaelsilva81"
        />

        <ContactElement
          icon={faEnvelope}
          link="mailto:rafaelgaldinosilva81@gmail.com"
          name="rafaelgaldinosilva81@gmail.com"
        />
      </div>
    </>
  );
};

export default ContactContent;
