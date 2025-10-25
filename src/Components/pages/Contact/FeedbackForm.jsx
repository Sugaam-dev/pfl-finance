import React, { useState, useRef, useEffect } from 'react';
import './Style/FeedbackForm.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    message: '',
    firstName: '',
    email: '',
    phone: '',
    reasonForContact: '',
    areaOfInterest: '',
    subject: ''
  });

  // Web3Forms result state
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dropdown states
  const [reasonDropdownOpen, setReasonDropdownOpen] = useState(false);
  const [areaDropdownOpen, setAreaDropdownOpen] = useState(false);
  
  const reasonRef = useRef(null);
  const areaRef = useRef(null);

  // Dropdown options
  const reasonOptions = [
    { value: 'General', label: 'General Inquiry' },
    { value: 'Support', label: 'Support' },
    { value: 'Feedback', label: 'Feedback' }
  ];

  const areaOptions = [
    { value: 'Private Loan', label: 'Private Loan' },
    { value: 'Home Loan', label: 'Home Loan' },
    { value: 'Business Loan', label: 'Business Loan' }
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (reasonRef.current && !reasonRef.current.contains(event.target)) {
        setReasonDropdownOpen(false);
      }
      if (areaRef.current && !areaRef.current.contains(event.target)) {
        setAreaDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle phone input - only allow numbers
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    
    // Limit to 10 digits
    if (value.length <= 10) {
      setFormData({
        ...formData,
        phone: value
      });
    }
  };

  // Prevent non-numeric key presses
  const handlePhoneKeyPress = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleDropdownSelect = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (name === 'reasonForContact') {
      setReasonDropdownOpen(false);
    } else if (name === 'areaOfInterest') {
      setAreaDropdownOpen(false);
    }
  };

  // Web3Forms Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formDataToSend = new FormData(e.target);
    
    // Add your Web3Forms Access Key here
    formDataToSend.append("access_key", "YOUR_ACCESS_KEY_HERE");

    // Optional: Add custom subject or other settings
    formDataToSend.append("subject", "New Feedback Form Submission");
    formDataToSend.append("from_name", "Feedback Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        // Reset form
        setFormData({
          message: '',
          firstName: '',
          email: '',
          phone: '',
          reasonForContact: '',
          areaOfInterest: '',
          subject: ''
        });
        e.target.reset();
        
        // Clear success message after 5 seconds
        setTimeout(() => setResult(''), 5000);
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getDropdownDisplayText = (fieldName, options, placeholder) => {
    const selected = options.find(opt => opt.value === formData[fieldName]);
    return selected ? selected.label : placeholder;
  };

  return (
   <div className="ff-feedback-form-container">
  <div className="ff-form-card">
    <h2 className="ff-form-title">Feedback Form</h2>
    <form onSubmit={handleSubmit} className="ff-feedback-form">
      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="ff-hidden" style={{ display: 'none' }} />
      
      <div className="ff-form-group">
        <textarea
          name="message"
          placeholder="Your Message *"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="ff-form-input ff-form-textarea"
        />
      </div>

      <div className="ff-form-group">
        <input
          type="text"
          name="firstName"
          placeholder="First name *"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="ff-form-input"
        />
      </div>

      <div className="ff-form-group">
        <input
          type="email"
          name="email"
          placeholder="E-mail *"
          value={formData.email}
          onChange={handleChange}
          required
          className="ff-form-input"
        />
      </div>

      <div className="ff-form-group">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handlePhoneChange}
          onKeyPress={handlePhoneKeyPress}
          required
          maxLength="10"
          inputMode="numeric"
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit phone number"
          className="ff-form-input"
        />
      </div>

      <div className="ff-form-group ff-custom-dropdown-wrapper" ref={reasonRef}>
        <div
          className={`ff-custom-dropdown-select ${reasonDropdownOpen ? 'open' : ''} ${!formData.reasonForContact ? 'placeholder' : ''}`}
          onClick={() => setReasonDropdownOpen(!reasonDropdownOpen)}
          role="button"
          tabIndex={0}
        >
          <span className="ff-custom-dropdown-selected">
            {getDropdownDisplayText('reasonForContact', reasonOptions, 'Reason for Contact *')}
          </span>
          <svg
            className={`ff-custom-dropdown-arrow ${reasonDropdownOpen ? 'rotated' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {reasonDropdownOpen && (
          <ul className="ff-custom-dropdown-menu">
            {reasonOptions.map((option, index) => (
              <li
                key={index}
                className={`ff-custom-dropdown-option ${formData.reasonForContact === option.value ? 'selected' : ''}`}
                onClick={() => handleDropdownSelect('reasonForContact', option.value)}
                role="option"
                tabIndex={0}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
        <input type="hidden" name="reasonForContact" value={formData.reasonForContact} required />
      </div>

      <div className="ff-form-group ff-custom-dropdown-wrapper" ref={areaRef}>
        <div
          className={`ff-custom-dropdown-select ${areaDropdownOpen ? 'open' : ''} ${!formData.areaOfInterest ? 'placeholder' : ''}`}
          onClick={() => setAreaDropdownOpen(!areaDropdownOpen)}
          role="button"
          tabIndex={0}
        >
          <span className="ff-custom-dropdown-selected">
            {getDropdownDisplayText('areaOfInterest', areaOptions, 'Area of Interest *')}
          </span>
          <svg
            className={`ff-custom-dropdown-arrow ${areaDropdownOpen ? 'rotated' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {areaDropdownOpen && (
          <ul className="ff-custom-dropdown-menu">
            {areaOptions.map((option, index) => (
              <li
                key={index}
                className={`ff-custom-dropdown-option ${formData.areaOfInterest === option.value ? 'selected' : ''}`}
                onClick={() => handleDropdownSelect('areaOfInterest', option.value)}
                role="option"
                tabIndex={0}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
        <input type="hidden" name="areaOfInterest" value={formData.areaOfInterest} required />
      </div>

      <div className="ff-form-group">
        <input
          type="text"
          name="subject"
          placeholder="Subject *"
          value={formData.subject}
          onChange={handleChange}
          required
          className="ff-form-input"
        />
      </div>

      <button type="submit" className="ff-submit-button" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <svg className="ff-submit-arrow ff-animate-spin" fill="currentColor" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            sending...
          </>
        ) : (
          <>
            submit
            <svg className="ff-submit-arrow" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </>
        )}
      </button>

      {result && (
        <div className={`ff-form-result ${result.includes('Success') ? 'success' : 'error'}`}>
          {result}
        </div>
      )}
    </form>
  </div>
</div>
  );
};

export default FeedbackForm;
