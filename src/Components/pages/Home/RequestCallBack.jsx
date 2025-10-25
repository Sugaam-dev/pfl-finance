// RequestCallBack.jsx
import React, { useState } from 'react';
import { Phone, Mail, ChevronRight } from 'lucide-react';
import './Styles/RequestCallBack.css';

const RequestCallBack = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  // Handle phone input - only allow numbers
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    
    // Limit to 10 digits
    if (value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  // Prevent non-numeric key presses
  const handlePhoneKeyPress = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult({ type: 'success', message: 'Form submitted successfully! We will contact you soon.' });
        e.target.reset();
        setPhoneNumber(''); // Reset phone number state
      } else {
        setResult({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setResult({ type: 'error', message: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setResult(null);
      }, 5000);
    }
  };

  return (
    <section className="request-callback">
      <div className="callback-container">
        <div className="callback-content">
          <div className="callback-info">
            <h2 className="callback-title">REQUEST A CALL BACK</h2>
            <div className="title-underline"></div>

            <p className="callback-description">
              Do you have questions about how we work we can help your company?
              Send us an email and we'll get in touch shortly, or phone between
              8:00 and 18:00 Monday to Friday — we would be delighted to speak.
            </p>

            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon phone-icon">
                  <Phone size={20} color="white" strokeWidth={2} />
                </div>
                <span className="contact-text phone-number">
                  +91 8618543258
                </span>
              </div>

              <div className="contact-item">
                <div className="contact-icon email-icon">
                  <Mail size={20} color="white" strokeWidth={2} />
                </div>
                <span className="contact-text email-text">
                  info.kumar2025@pflfinance.com
                </span>
              </div>
            </div>
          </div>

          <div className="callback-form-wrapper">
            <form className="callback-form" onSubmit={handleSubmit}>
              {/* Replace YOUR_ACCESS_KEY_HERE with your actual access key */}
              <input
                type="hidden"
                name="access_key"
                value="YOUR_ACCESS_KEY_HERE"
              />

              {/* Honeypot Spam Protection */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />

              <input
                type="text"
                name="name"
                placeholder="First name"
                className="form-input"
                required
              />

              <select name="service" className="form-select" required>
                <option value="" disabled selected>Select Service</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Business Loan">Business & MSME Loan</option>
                <option value="Car Loan">Car & Vehicle Loan</option>
                <option value="Loan Against Property">
                  Loan Against Property (LAP)
                </option>
                <option value="Corporate Tie-Up">
                  Corporate & Payroll Tie-Up
                </option>
                <option value="Financial Advisory">Financial Advisory</option>
                <option value="Loan Takeover">Loan Takeover</option>
              </select>

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={handlePhoneChange}
                onKeyPress={handlePhoneKeyPress}
                className="form-input"
                maxLength="10"
                inputMode="numeric"
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
                required
              />

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                <ChevronRight size={18} strokeWidth={2.5} />
              </button>

              {result && (
                <div className={`result-message ${result.type}`}>
                  {result.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestCallBack;
