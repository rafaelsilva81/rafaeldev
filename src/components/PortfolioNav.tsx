import React, { useState } from "react";
import { useAtom } from "jotai";
import {
  colorsAtom,
  contentAtom,
  preferredLanguageAtom,
  selectedAtom,
} from "../lib/atoms";
import { motion } from "framer-motion";
import { Menu } from "@headlessui/react";
import { faBars, faX as faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type NavigationPage = "home" | "about" | "contact" | "projects";

const PortfolioNav = () => {
  const [lang, setLang] = useAtom(preferredLanguageAtom);
  const navigation: NavigationPage[] = ["home", "about", "contact", "projects"];
  const navigationPt = ["início", "sobre", "contato", "projetos"];
  const [colors] = useAtom(colorsAtom);
  const [selected] = useAtom(selectedAtom);
  const [content, setContent] = useAtom(contentAtom);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* menu for larger screen */}
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ delay: 0.9, duration: 0.3 }}
        className="items-baseline justify-center hidden gap-16 uppercase md:flex"
      >
        {navigation.map((item: NavigationPage) =>
          item === content ? (
            <ActiveItem
              key={item + "-active-lg"}
              current={
                lang === "en" ? item : navigationPt[navigation.indexOf(item)]
              }
            />
          ) : (
            <span
              key={item + "-lg"}
              className="text-2xl text-black cursor-pointer dark:text-white hover:font-semibold"
              onClick={() => setContent(item)}
            >
              {lang === "en" ? item : navigationPt[navigation.indexOf(item)]}
            </span>
          )
        )}
      </motion.div>

      {/*  menu for mobile */}
      <div className="flex flex-row items-center gap-2 uppercase md:hidden">
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex flex-row items-center justify-center w-8 h-8 gap-2 p-2 rounded-lg"
                style={{ background: colors[selected] }}
              >
                <FontAwesomeIcon
                  icon={isMenuOpen ? faClose : faBars}
                  className="w-3 h-3"
                  color={"#f8f8f8"}
                />
              </Menu.Button>
              {isMenuOpen && (
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu.Items static className="flex gap-2">
                    {navigation.map((item: NavigationPage) =>
                      item === content ? (
                        <Menu.Item key={item}>
                          <ActiveItem
                            current={
                              lang === "en"
                                ? item
                                : navigationPt[navigation.indexOf(item)]
                            }
                          />
                        </Menu.Item>
                      ) : (
                        <Menu.Item key={item}>
                          <span
                            className="text-sm text-black cursor-pointer dark:text-white hover:font-semibold"
                            onClick={() => setContent(item)}
                          >
                            {lang === "en"
                              ? item
                              : navigationPt[navigation.indexOf(item)]}
                          </span>
                        </Menu.Item>
                      )
                    )}
                  </Menu.Items>
                </motion.div>
              )}
            </>
          )}
        </Menu>
      </div>
    </>
  );
};

const ActiveItem = ({ current }: { current: string }) => {
  const [colors] = useAtom(colorsAtom);
  const [selected] = useAtom(selectedAtom);
  return (
    <>
      <div className="flex text-sm cursor-pointer md:text-2xl">
        <span
          className="font-semibold"
          style={{
            color: colors[selected],
          }}
        >
          {"<"}
        </span>
        <div className="flex flex-col text-dark dark:text-light">
          <span className="font-bold">{current}</span>
        </div>
        <span
          className="font-semibold text-red-600"
          style={{
            color: colors[selected],
          }}
        >
          {"/>"}
        </span>
      </div>
    </>
  );
};

export default PortfolioNav;
