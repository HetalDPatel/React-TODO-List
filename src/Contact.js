/*"StAuth10244: I Hetal P1tel, 000821900 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."*/
/*Ref Contact-Content:https://www.workflowmax.com/contact-us*/

import React, { Component } from 'react';
import contactImage from './contact.png';
import './Contact.css';

class Contact extends Component {
    render() {
        return <div>
            <div className="contact_image">
               <img className="cImage"src={contactImage} alt="contact"/>
            </div>
            <h1>Get in touch</h1>
            <p>If you would like to get in touch with our team, please select the appropriate form below.

             We will follow up with you in a jiffy!
            </p>
            <div className="contactButton">
                <button className="button" >I HAVE A QUESTION</button>
                <button className="button" >I'M AN EXISTING CUSTOMER</button>
             </div>
            </div>
    }
}

export { Contact };