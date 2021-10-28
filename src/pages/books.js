import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProjectSection from "../components/ProjectSection";
import { projObjSix } from "../components/ProjectSection/Data";
import Footer from "../components/Footer";
import ProjNavbar from "../components/ProjNav";

const Books = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ProjNavbar toggle={toggle} />
      <ProjectSection {...projObjSix} />
      <Footer />
    </>
  );
};

export default Books;
