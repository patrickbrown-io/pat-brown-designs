import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProjectSection from "../components/ProjectSection";
import { projObjFive } from "../components/ProjectSection/Data";
import Footer from "../components/Footer";
import ProjNavbar from "../components/ProjNav";

const Budget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ProjNavbar toggle={toggle} />
      <ProjectSection {...projObjFive} />
      <Footer />
    </>
  );
};

export default Budget;
