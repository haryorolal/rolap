import React from 'react'
import "./Header.css"
import illustrationImage from "../../assets/illustration.png"

const Header = () => {
  return (
    <div className='gpt3__header section__padding'>
      {/* left content */}
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'> Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src='people.png' alt='people' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>        
      </div>
      {/* right image */}
      <div className='gpt3__header-image'>
          <img src={illustrationImage} alt='illustrations' />
      </div>
    </div>
  )
}

export default Header