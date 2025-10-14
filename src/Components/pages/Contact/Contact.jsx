import React from 'react';
import ContactInfo from './ContactInfo';
import ContactPersons from './ContactPersons';
import FeedbackForm from './FeedbackForm';
import './Style/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page-wrapper">
      <div className="contact-page">
        
        {/* LEFT SECTION - Contact Information */}
        <div className="contact-section">
          <ContactInfo />
          <ContactPersons />
        </div>

        {/* RIGHT SECTION - Feedback Form */}
        <div className="form-section">
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
