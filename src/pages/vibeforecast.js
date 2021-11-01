import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProjectSection from "../components/ProjectSection";
import { projObjFour } from "../components/ProjectSection/Data";
import Footer from "../components/Footer";
import ProjNavbar from "../components/ProjNav";
import ScrollToTop from "../components/ScrollToTop";

const VibeFore = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ProjNavbar toggle={toggle} />
      <ProjectSection {...projObjFour} />
      <Footer />
    </>
  );
};

export default VibeFore;
