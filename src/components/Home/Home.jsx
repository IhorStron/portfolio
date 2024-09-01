import React from 'react';
import './Home.css';
import Avatar from "../Home/avatar.jpg";
import { motion } from "framer-motion";





const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
         <motion.h1
         initial={{ opacity: 0, y: -100 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 1,
         }}
         >Hi, It's <span>Ihor</span></motion.h1>
         <h3 className="text-animation">I'm a <motion.span
         initial={{ opacity: 0, x: 100 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{
            type: "tween",
           duration: 2,
           delay: 2,
         }}
         >Frontend Developer</motion.span></h3>
         <p>I am beginning my journey in web development. While I don't yet have commercial experience, I am actively creating websites for myself to enhance my skills and learn new technologies.

My interest in web development has led me to study modern front-end techniques. I have completed several projects that showcase my knowledge and my desire to grow in this field.

I am always ready for new challenges and open to opportunities to work on real projects. If you're looking for a young and motivated developer who is eager to grow professionally, feel free to reach out!</p>

         <div className="social-icons">
            <a href="https://github.com/IhorStron" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class='bx bxl-github' ></i></a>
            <a href="https://t.me/IhorStron" target="_blank" rel="noopener noreferrer" aria-label="Telegram" ><i class='bx bxl-telegram'></i></a>
            <a href="https://www.instagram.com/bbombaigor/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class='bx bxl-instagram' ></i></a>
         </div>

         <div className="btn-group">
            <motion.a
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
               type: "spring",
               delay: 0.1,
               duration: 0.2,
            }}
             href="#contact" className="btn">Hire</motion.a>
            <motion.a 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
               type: "spring",
               delay: 0.1,
               duration: 0.2,
            }}
            href="#contact" className='btn'>Contact</motion.a>
         </div>
      </div>
      <div className="home-img">
         <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{
             type: "tween",
             duration: 0.2,
             damping: 10,
             
          }}
          src={Avatar} alt="" />
      </div>
    </section>
  )
}

export default Home