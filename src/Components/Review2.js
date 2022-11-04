import React from 'react'
import './review2.css'
import imgBackground from '../imgs/brooke-cagle-cb4Dv50LN1Y-unsplash 1.svg'
import { Link } from 'react-router-dom'

export const Review2 = (props) => {
  return (
    <div className="Container">
      <img src={imgBackground} className="background"></img>
      <header>
        <div className="Logo"></div>
        <div className="contain">
          <Link to="/products">
            <h2 className="head">Products</h2>
          </Link>
          <Link to="/services">
            <h2 className="head">Services</h2>
          </Link>
          <Link to="/contact">
            <h2 className="head">Contact</h2>
          </Link>
          <Link to="/log">
            <h2 className="head">Log in</h2>
          </Link>
          <h2 className="headSpecial">Get Access</h2>
        </div>
      </header>
      <div className="Container2">
        <h1 className="bigText">Instant collaborations for remote teams</h1>
        <h3 className="smolText">
          All in one for your remote team chats, collaboration and track
          projects
        </h3>
        <div className="Imput">
          <input placeholder="Email" className="Email" />
          <button className="ButtonAccess">Get Early Access</button>
        </div>
      </div>
    </div>
  )
}
