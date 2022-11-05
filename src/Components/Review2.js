import React from 'react'
import './review2.css'
import { Header } from './Header'
import display from '../imgs/ooto Meetings 1.svg'
import displaymini from '../imgs/event 1.svg'

export const Review2 = (props) => {
    return (
        <div className="Container">
            <div className="background"></div>
            <Header noOuters={true} />
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
            <div className='Container3'>
                <div className='aguulagch'>
                    <h1 className="bigText2">Your Hub For Teamwork</h1>
                    <h3 className="smolText2">
                        Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.
                    </h3>
                    <h3 className='smolText3'>Learn More ...</h3>
                    <img src={display} className='display' />
                    <img src={displaymini} className='displaymini' />
                </div>
            </div>
            <div className='Container4'></div>
        </div>

    )
}
