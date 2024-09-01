import React from 'react'
import './Portfolio.css';
import portfolio1 from "../Portfolio/photoPortfolio/portfolio1.jpg";
import portfolio2 from "../Portfolio/photoPortfolio/portfolio2.jpg";
import portfolio3 from "../Portfolio/photoPortfolio/portfolio3.jpg";
import portfolio4 from "../Portfolio/photoPortfolio/portfolio4.jpg";
import portfolio5 from "../Portfolio/photoPortfolio/portfolio5.jpg";
import portfolio6 from "../Portfolio/photoPortfolio/portfolio6.jpg";
import { motion } from "framer-motion";






const Portfolio = () => {
  return (
    <section className="portfolio" id='projects'>
      <h2 className="heading">Latest <span>Projects</span></h2>

      <div className="portfolio-container">
         <motion.div
         initial={{opacity: 0, scale: 0.5}}
         whileInView={{opacity: 1, scale: 1}}
         transition={{
           type: "spring",
           stiffness: 100,
           damping: 10,
           delay: 0.4,
        }}
          className="portfolio-box">
            <img src={portfolio1} alt="" />
            <div className="portfolio-layer">
               <h4>Web Design</h4>
               <p>HTML/CSS/JS</p>
               <div className="portfolio-icons">
               <a href="https://ihorstron.github.io/Buisness-Website/?" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class='bx bx-link-external'></i></a>
               <a href="https://github.com/IhorStron/Buisness-Website" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class='bx bxl-github'></i></a>
               </div>
            </div>
         </motion.div>

         <motion.div
         initial={{opacity: 0, scale: 0.5}}
         whileInView={{opacity: 1, scale: 1}}
         transition={{
           type: "spring",
           stiffness: 100,
           damping: 10,
           delay: 0.7,
        }}
          className="portfolio-box">
            <img src={portfolio2} alt="" />
            <div className="portfolio-layer">
               <h4>Web Design</h4>
               <p>React/Vite/Tailwind</p>
               <div className="portfolio-icons">
               <a href="https://coffee-shop-ihor.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class='bx bx-link-external'></i></a>
               <a href="https://github.com/IhorStron/CodersCoffee" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class='bx bxl-github'></i></a>
               </div>
            </div>
         </motion.div>

         <motion.div
         initial={{opacity: 0, scale: 0.5}}
         whileInView={{opacity: 1, scale: 1}}
         transition={{
           type: "spring",
           stiffness: 100,
           damping: 10,
           delay: 1,
        }}
          className="portfolio-box">
            <img src={portfolio3} alt="" />
            <div className="portfolio-layer">
               <h4>Web Design</h4>
               <p>HTML/CSS/JS</p>
               <div className="portfolio-icons">
               <a href="https://ihorstron.github.io/copyPayPal-website/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class='bx bx-link-external'></i></a>
               <a href="https://github.com/IhorStron/copyPayPal-website" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class='bx bxl-github'></i></a>
               </div>
            </div>
         </motion.div>

         <motion.div
         initial={{opacity: 0, scale: 0.5}}
         whileInView={{opacity: 1, scale: 1}}
         transition={{
           type: "spring",
           stiffness: 100,
           damping: 10,
           delay: 1.3,
        }}
          className="portfolio-box">
            <img src={portfolio4} alt="" />
            <div className="portfolio-layer">
               <h4>Web Design</h4>
               <p>HTML/CSS/JS</p>
               <div className="portfolio-icons">
               <a href="https://ihorstron.github.io/architecture-website/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class='bx bx-link-external'></i></a>
               <a href="https://github.com/IhorStron/architecture-website" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class='bx bxl-github'></i></a>
               </div>
            </div>
         </motion.div>

         <motion.div
         initial={{opacity: 0, scale: 0.5}}
         whileInView={{opacity: 1, scale: 1}}
         transition={{
           type: "spring",
           stiffness: 100,
           damping: 10,
           delay: 1.6,
        }}
          className="portfolio-box">
            <img src={portfolio5} alt="" />
            <div className="portfolio-layer">
               <h4>Web Design</h4>
               <p>HTML/CSS/JS</p>
               <div className="portfolio-icons">
               <a href="https://ihorstron.github.io/website-CreativeDesign//" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class='bx bx-link-external'></i></a>
               <a href="https://github.com/IhorStron/website-CreativeDesign" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class='bx bxl-github'></i></a>
               </div>
            </div>
         </motion.div>

         <motion.div
         initial={{opacity: 0, scale: 0.5}}
         whileInView={{opacity: 1, scale: 1}}
         transition={{
           type: "spring",
           stiffness: 100,
           damping: 10,
           delay: 1.9,
        }}
          className="portfolio-box">
            <img src={portfolio6} alt="" />
            <div className="portfolio-layer">
               <h4>Web Design</h4>
               <p>HTML/CSS/JS</p>
               <div className="portfolio-icons">
               <a href="https://ihorstron.github.io/siteForHeadphone/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class='bx bx-link-external'></i></a>
               <a href="https://github.com/IhorStron/siteForHeadphone" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class='bx bxl-github'></i></a>
               </div>
            </div>
         </motion.div>
      </div>
    </section>
  )
}

export default Portfolio