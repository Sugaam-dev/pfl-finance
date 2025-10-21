import React from 'react';
import { Phone, Mail } from 'lucide-react';
import './Style/ContactPersons.css';

const ContactPersons = () => {
  return (
    <div className="contact-persons-container">
      
      {/* Recruiting Inquiries */}
      <div className="person-section">
        <h3 className="person-heading">recruiting inquiries</h3>
        <p className="person-description">
          For more information regarding current career opportunities, please contact:
        </p>
        
        <div className="person-card">
          <div className="person-avatar">
            <img 
              src="/path-to-amanda-image.jpg" 
              alt="Amanda Seyfried"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className="person-details">
            <p className="person-name">AMANDA SEYFRIED</p>
            <p className="person-title">Recruiting Manager</p>
            <div className="person-contact">
              <div className="contact-item">
                <Phone size={14} strokeWidth={2} />
                <span>97xxxxxxxx</span>
              </div>
              <div className="contact-item">
                <Phone size={14} strokeWidth={2} />
                <span>87xxxxxxxx</span>
              </div>
              <div className="contact-item">
                <Mail size={14} strokeWidth={2} />
                <span>recruiting@stylemixthemes.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Press Inquiries */}
      <div className="person-section">
        <h3 className="person-heading">press inquiries</h3>
        <p className="person-description">
          If you are a member of the press and would like to speak with someone at Consulting, please contact:
        </p>
        
        <div className="person-card">
          <div className="person-avatar">
            <img 
              src="/path-to-donald-image.jpg" 
              alt="Donald Simpson"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className="person-details">
            <p className="person-name">DONALD SIMPSON</p>
            <p className="person-title">Senior Marketing Manager</p>
            <div className="person-contact">
              <div className="contact-item">
                <Phone size={14} strokeWidth={2} />
                <span>87xxxxxxxx</span>
              </div>
              <div className="contact-item">
                <Phone size={14} strokeWidth={2} />
                <span>87xxxxxxxx</span>
              </div>
              <div className="contact-item">
                <Mail size={14} strokeWidth={2} />
                <span>d.simpson@stylemixthemes.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPersons;
