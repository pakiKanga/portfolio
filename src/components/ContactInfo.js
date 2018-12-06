import React, { Component } from 'react';
import './../css/contact.css'

class ContactInfo extends Component {
  render() {
    return (
      <ul className="contact-container">
        <li>
          <a href="https://www.linkedin.com/in/shaikhspeare/">
            <i class="fab fa-linkedin contact-icon"></i>
          </a>
            </li>
        <li>
          <a href="mailto:ali.shaikh@sydney.edu.au">
            <i class="fas fa-envelope contact-icon"></i>
            </a>
        </li>
        <li>
          <a href="https://github.com/pakiKanga/portfolio">
          <i class="fab fa-github contact-icon"></i>
          </a>
        </li>

      </ul>
    );
  }
}

export default ContactInfo;
