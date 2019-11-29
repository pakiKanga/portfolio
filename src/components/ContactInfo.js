import React, { Component } from 'react';
import './../css/contact.css'

class ContactInfo extends Component {
  render() {
    return (
      <div className="contact-container">
          
          <div className="interest-container">
            <span className="interest-message">Need something? Get in touch.</span>
          </div>
          <ul className="contact-list">
          <li>
            <a href="https://www.linkedin.com/in/shaikhspeare/">
              <i class="fab fa-linkedin contact-icon white"></i>
            </a>
              </li>
          <li>
            <a href="mailto:ali.shaikh@sydney.edu.au">
              <i class="fas fa-envelope contact-icon white"></i>
              </a>
          </li>

         </ul>
      </div>
  
    );
  }
}

export default ContactInfo;
