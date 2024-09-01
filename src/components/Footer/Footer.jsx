import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
      <a href="https://github.com/IhorStron" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class='bx bxl-github' ></i></a>
            <a href="https://t.me/IhorStron" target="_blank" rel="noopener noreferrer" aria-label="Telegram" ><i class='bx bxl-telegram'></i></a>
            <a href="https://www.instagram.com/bbombaigor/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class='bx bxl-instagram' ></i></a>
         </div>

         <ul className="list">
            <li>
               <a href="#home">About me</a>
            </li>

            <li>
               <a href="#education">Education</a>
            </li>

            <li>
               <a href="#projects">Projects</a>
            </li>
         </ul>
    </footer>
  )
}

export default Footer