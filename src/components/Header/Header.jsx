import React, { useState } from 'react';
import './Header.css';
import { motion } from "framer-motion";


const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
        className="logo">
        <a href="#home"><span>Ihor</span><span className="highlight">Strontsitskyi</span></a>
      </motion.div>
      <motion.nav

        className={`nav ${isOpen ? 'open' : ''}`}>
        <motion.a
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          href="#home" >Home</motion.a>
        <motion.a
          initial={{ opacity: 0, x: 210 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          href="#education">Education</motion.a>


        <motion.a
          initial={{ opacity: 0, x: 220 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          href="#projects">Projects</motion.a>


        <motion.a
          initial={{ opacity: 0, x: 230 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          href="#contact">Contact</motion.a>
      </motion.nav>
      <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>
    </header>
  );
};

export default Header;
