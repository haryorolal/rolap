import React from 'react'
import "./Footer.css"
import gpt3Logo from "../../assets/GPT-3.png"

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='Logo'/>
          <p>The heart of GPT-3 is here, Embrace it.</p>
        </div>
        
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Get In Touch</h4>
          <p>We are Excited to have you talk with us</p>
          <p>8493-3849-384</p>
          <p>info@payme.net</p>
        </div>

      </div>
      <div className='gpt3__footer-copyright'>
        <p>c, 2021 GPT-3. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer