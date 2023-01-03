import React from "react";
import BoldText from "../common/BoldText";
import ContactElement from "../common/ContactElement";
import {
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { preferredLanguageAtom } from "../../lib/atoms";
import { useAtom } from "jotai";

const ContactContent = () => {
  const [lang] = useAtom(preferredLanguageAtom);

  if (lang === "en") {
    return (
      <>
        {/* Header */}
        <span className="text-3xl font-bold uppercase md:text-5xl">
          Get in Touch.
        </span>

        {/* Paragraph (text) */}
        <span className="text-xl font-semibold text-justify md:text-xl">
          You can reach out to me clicking below to talk about a project,
          collaboration, position, or just to say <BoldText>hi!</BoldText>
        </span>

        {/* Social buttons */}
        <div className="flex flex-col mt-2">
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
            icon={faInstagram}
            link="https://www.instagram.com/rafaelsilva.81/"
            name="@rafaelsilva.81"
          />
          <ContactElement
            icon={faEnvelope}
            link="mailto:rafaelgaldinosilva81@gmail.com"
            name="rafaelgaldinosilva81@gmail.com"
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        {/* Header */}
        <span className="text-3xl font-bold uppercase md:text-5xl">
          Entre em contato.
        </span>

        {/* Paragraph (text) */}
        <span className="text-xl font-semibold text-justify md:text-xl">
          Você pode entrar em contato comigo clicando abaixo para falar sobre um
          projeto, colaboração, posição ou apenas para dar um{" "}
          <BoldText>oi!</BoldText>
        </span>

        {/* Social buttons */}
        <div className="flex flex-col mt-2">
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
            icon={faInstagram}
            link="https://www.instagram.com/rafaelsilva.81/"
            name="@rafaelsilva.81"
          />
          <ContactElement
            icon={faEnvelope}
            link="mailto:rafaelgaldinosilva81@gmail.com"
            name="rafaelgaldinosilva81@gmail.com"
          />
        </div>
      </>
    );
  }
};

export default ContactContent;
