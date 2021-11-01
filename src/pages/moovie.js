import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProjectSection from "../components/ProjectSection";
import { projObjOne } from "../components/ProjectSection/Data";
import Footer from "../components/Footer";
import ProjNavbar from "../components/ProjNav";
import ScrollToTop from "../components/ScrollToTop";

const Moovie = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ProjNavbar toggle={toggle} />
      <ProjectSection {...projObjOne} />
      <Footer />
    </>
  );
};

export default Moovie;
