
import React from 'react';
import './Contact.css';
import { motion } from "framer-motion";
import Swal from 'sweetalert2';

const Contact = () => {

   // Wem3forms and swal

   const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);

      
      const name = formData.get('name');
      const email = formData.get('email');
      const number = formData.get('number');
      const subject = formData.get('subject');
      const message = formData.get('message');

      if (!name || !email || !number || !subject || !message) {
         Swal.fire({
            title: 'Error!',
            text: 'Please fill in all fields',
            icon: 'error',
            background: '#080808',
            color: '#fff',
            confirmButtonColor: 'transparent',
            customClass: {
               confirmButton: 'custom-confirm-button',
            },
            iconColor: 'red',
         });
         return; 
      }

      formData.append("access_key", "80fd320b-646d-4133-bb62-d53c010089f7");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
         },
         body: json
      }).then((res) => res.json());

      if (res.success) {
         Swal.fire({
            title: 'Success!',
            text: 'Message sent successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
            background: '#080808',
            color: '#fff',
            confirmButtonColor: 'transparent',
            customClass: {
               confirmButton: 'custom-confirm-button',
            },
            iconColor: '#00ffee',
         });
      }
   };

   // End of Wem3forms and swal

   return (
      <section className="contact" id='contact'>
         <h2 className="heading">Contact <span>Me</span></h2>

         <form onSubmit={onSubmit} >
            <div className="input-group">
               <div className="input-box">
                  <motion.input
                     initial={{ opacity: 0, scale: 0.5 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.4,
                     }}
                     type="text" placeholder='Full Name' name="name" />
                  <motion.input
                     initial={{ opacity: 0, scale: 0.5 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.6,
                     }}
                     type="email" placeholder='Email' name="email" />
               </div>
               <div className="input-box">
                  <motion.input
                     initial={{ opacity: 0, scale: 0.5 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.8,
                     }}
                     type="tel" placeholder='Phone Number' name="number" />
                  <motion.input
                     initial={{ opacity: 0, scale: 0.5 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 1,
                     }}
                     type="text" placeholder='Subject' name="subject" />
               </div>
            </div>

            <div className="input-group-2">
               <motion.textarea
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                     type: "spring",
                     stiffness: 100,
                     damping: 10,
                     delay: 1.2,
                  }}
                  name="message" cols={30} rows={10} placeholder='Your Message'></motion.textarea>
               <motion.input
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                     type: "spring",
                     delay: 0.1,
                     duration: 0.1,
                  }}
                  type="submit" value={"Send Message"} className='btn' />
            </div>
         </form>
      </section>
   );
};

export default Contact;
