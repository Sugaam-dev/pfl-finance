import React from 'react';
import ContactInfo from './ContactInfo';
import ContactPersons from './ContactPersons';
import FeedbackForm from './FeedbackForm';

const Contact = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-[60%_40%]">
      
      {/* LEFT SECTION - Contact Information */}
      <div className="bg-white px-20 py-16">
        <ContactInfo />
        <ContactPersons />
      </div>

      {/* RIGHT SECTION - Feedback Form */}
      <div className="bg-[#ebebeb] px-16 py-16 flex items-center">
        <FeedbackForm />
      </div>
    </div>
  );
};

export default Contact;
