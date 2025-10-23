import React from 'react';
import { MapPin, Phone, Printer, Mail, Clock, Facebook, Twitter, Linkedin, Mail as GooglePlus, Phone as Skype } from 'lucide-react';
import './Style/ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      {/* Main Title */}
      <h1 className="main-title">Contact us</h1>
      
      {/* Description */}
      <p className="description">
        Please let us know if you have a question, want to leave a comment, or would like further information about Consulting WP.
      </p>

      {/* CLIENT INQUIRIES SECTION */}
      <div className="client-inquiries">
        <h3 className="section-heading">client inquiries</h3>
        
        {/* Grid layout for contact info - 2 columns */}
        <div className="contact-grid">
          {/* Left Column */}
          <div className="contact-column">
            {/* Address */}
            <div className="contact-item">
              <MapPin size={20} className="contact-icon" strokeWidth={2} />
              <div>
                <div>402, Business TowerM.G. Road</div>
                <div>Bangalore 580001</div>
              

              </div>
            </div>

            {/* Phone Numbers */}
            <div className="contact-item">
              <Phone size={20} className="contact-icon" strokeWidth={2} />
              <div>
                <div>+91 8618543258 </div>
              
              </div>
            </div>

            {/* Fax */}
            <div className="contact-item">
              <Printer size={20} className="contact-icon" strokeWidth={2} />
              <div>+91 8618543258 </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="contact-column">
            {/* Email */}
            <div className="contact-item">
              <Mail size={20} className="contact-icon" strokeWidth={2} />
              <div>info.kumar2025@pflfinance.com</div>
            </div>

            {/* Business Hours */}
            <div className="contact-item">
              <Clock size={20} className="contact-icon" strokeWidth={2} />
              <div>
                <div>Monday–Saturday: 8:00AM–6:00PM</div>
                <div>Sunday: CLOSED</div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="social-icons">
              <a href="#facebook" className="social-icon" aria-label="Facebook">
                <Facebook size={16} strokeWidth={2} />
              </a>
              <a href="#twitter" className="social-icon" aria-label="Twitter">
                <Twitter size={16} strokeWidth={2} />
              </a>
              <a href="#linkedin" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={16} strokeWidth={2} />
              </a>
              <a href="#google" className="social-icon" aria-label="Google Plus">
                <GooglePlus size={16} strokeWidth={2} />
              </a>
              <a href="#skype" className="social-icon" aria-label="Skype">
                <Skype size={16} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
