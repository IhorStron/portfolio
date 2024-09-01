import React from 'react'
import './Education.css';
import { motion } from "framer-motion";


const Education = () => {
   return (
      <section className="education" id='education'>
         <h2 className="heading">Education</h2>

         <div className="timeline-items">

            <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
               }}
               className="timeline-item">
               <div className="timeline-dot"></div>
               <div className="timeline-date">2020</div>
               <div className="timeline-content">
                  <h3>Hight School</h3>
                  <p>I obtained a complete general secondary education at Chervonohrad Specialized School No. 8 of the Chervonohrad City Council in the Lviv Region.</p>
               </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.5,
               }}
               className="timeline-item">
               <div className="timeline-dot"></div>
               <div className="timeline-date">2020</div>
               <div className="timeline-content">
                  <h3>University</h3>
                  <p>Enrolled at the National Forestry University of Ukraine, majoring in Information Systems and Technologies.</p>
               </div>

            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.6,
               }}
               className="timeline-item">
               <div className="timeline-dot"></div>
               <div className="timeline-date">2023</div>
               <div className="timeline-content">
                  <h3>Completed courses</h3>
                  <p>Completed courses at the company 'Cursor Education'. <br />FRONT-END BASIC - 2-MONTH COURSE
                     <br />FRONT-END ADVANCED - 3-MONTH COURSE
                  </p>
               </div>

            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.7,
               }}
               className="timeline-item">
               <div className="timeline-dot"></div>
               <div className="timeline-date">2024</div>
               <div className="timeline-content">
                  <h3>Job</h3>
                  <p>Graduated from the university with a bachelor's degree in information systems and technologies. Currently, I am focusing on self-development and am open to opportunities.</p>
               </div>

            </motion.div>
         </div>
      </section>
   )
}

export default Education