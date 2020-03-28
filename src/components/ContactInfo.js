import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./../css/contact.css";

class ContactInfo extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="interest-container">
          <span className="interest-message">
            Need something? Get in touch.
          </span>
          <br>
          </br>
          <span className="email-message">
          <a
              href="mailto:ali@infinibit.com.au"
              target="_blank"
              rel="noopener noreferrer"
            >ali@infinibit.com.au</a>
          </span>
        </div>
        <ul className="contact-list">
          <li>
            <a
              href="https://www.linkedin.com/in/shaikhspeare/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon  className="contact-icon white"  icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="mailto:ali@infinibit.com.au"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="contact-icon white" icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default ContactInfo;
