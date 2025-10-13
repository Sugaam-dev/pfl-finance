import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    message: '',
    firstName: '',
    email: '',
    reasonForContact: '',
    areaOfInterest: '',
    subject: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-md shadow-sm px-11 py-10">
        <h2 className="text-[26px] font-semibold text-black mb-9">
          Feedback Form
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <textarea
              name="message"
              placeholder="Your Message *"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 text-[14px] border border-gray-300 rounded-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all resize-none placeholder:text-gray-400 bg-white"
            />
          </div>

          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First name *"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 text-[14px] border border-gray-300 rounded-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all placeholder:text-gray-400"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="E-mail *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 text-[14px] border border-gray-300 rounded-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all placeholder:text-gray-400"
            />
          </div>

          <div className="relative">
            <select
              name="reasonForContact"
              value={formData.reasonForContact}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 text-[14px] border border-gray-300 rounded-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all appearance-none bg-white cursor-pointer text-gray-700"
            >
              <option value="">Reason for Contact *</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>

          <div className="relative">
            <select
              name="areaOfInterest"
              value={formData.areaOfInterest}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 text-[14px] border border-gray-300 rounded-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all appearance-none bg-white cursor-pointer text-gray-700"
            >
              <option value="">Area of Interest *</option>
              <option value="consulting">Consulting</option>
              <option value="development">Development</option>
              <option value="design">Design</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>

          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 text-[14px] border border-gray-300 rounded-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all placeholder:text-gray-400"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-sm text-[14px] transition-all duration-300 flex items-center gap-2.5 font-medium shadow-sm lowercase"
          >
            submit
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
