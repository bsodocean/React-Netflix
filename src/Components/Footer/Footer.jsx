import React from 'react'
import './footer.css'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FaYoutube }   from   'react-icons/fa' 


const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <FaFacebookF className="footer-icon"/>
            <BsInstagram className="footer-icon"/>
            <FaYoutube className="footer-icon"/>
        </div>
    </footer>
  )
}

export default Footer