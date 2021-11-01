import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HomeSection from "../components/Welcome";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import ContactBar from "../components/ContactBar";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // contactOpen, contactToggle;
  const [contactOpen, setContactOpen] = useState(false);

  const contactToggle = () => {
    setContactOpen(!contactOpen);
  };

  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} contactToggle={contactToggle} />
      <Navbar toggle={toggle} contactToggle={contactToggle} />
      <ContactBar contactOpen={contactOpen} contactToggle={contactToggle} />
      <HomeSection />
      <InfoSection {...homeObjOne} />
      <Projects />
      <InfoSection {...homeObjTwo} />
      <Footer />
    </>
  );
};

export default Home;
