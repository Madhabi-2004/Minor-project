import React from 'react';
import contpic from '../../asset/contact.jpg'
import './Contact.css'
import Right from './Right'
import Left from './Left';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
export default function Contact() {
    const rightSection = {
        img: contpic
        // title: 'Dynamic Right Section',
        // content: 'This is some dynamic content for the right section.',
    };
    const leftsection = {
        content: 'Ready to level up your next vacation? Reach out to an Fora travel advisor. You can browse our destinations and travel guides to find a Fora Advisor with the right expertise. Or,reach out directly via our booking page'
      }
    return (
        <div>
            <h1 className='head'>CONTACT US</h1>
            <div className="App">
                <div className="container">
                    <Left content={leftsection.content}/>
                    <Right img={rightSection.img} />
                </div>
                <div className="container">
                    <Left content={leftsection.content}/>
                    <Right img={rightSection.img} />
                </div>
            </div>
        </div>
    );
}
