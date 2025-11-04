import React from 'react';
import { MapPin, Phone, Printer, Mail, Clock, Facebook, Twitter, Linkedin, Mail as GooglePlus, Instagram } from 'lucide-react';
import './Style/ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      {/* Main Title */}
      <h1 className="main-title">Contact us</h1>
      
      {/* Description */}
      <p className="description">
    Thank you for your interest in our financial and loan services. We are committed to providing professional guidance and reliable solutions to support your financial goals. To connect with our team, please complete the contact form below with your details, and a representative will respond promptly. You may also reach us directly via email or phone during business hours for any specific inquiries or assistance.we prioritize building lasting relationships founded on trust, transparency, and excellence. We look forward to assisting you with your financial requirements and delivering personalized service with integrity.

      </p>

      {/* CLIENT INQUIRIES SECTION */}
      <div className="client-inquiries">
        <h3 className="section-heading">Client inquiries</h3>
        
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
              <div>info.kumar2025@pflfinanceservice.com</div>
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
              <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
                <Facebook size={16} strokeWidth={2} />
              </a>
              <a href="https://twitter.com"  className="social-icon" aria-label="Twitter">
                <Twitter size={16} strokeWidth={2} />
              </a>
              <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={16} strokeWidth={2} />
              </a>
              <a href="mailto:info.kumar2025@pflfinance.com" className="social-icon" aria-label="Google Plus">
                <GooglePlus size={16} strokeWidth={2} />
              </a>
              <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
                <Instagram size={16}  strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
