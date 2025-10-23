// WhyChooseUs.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import './Styles/WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Best Bank Tie-Ups',
      description: 'One application. Multiple offers. Maximum savings',
      link: '/contact'
    },
    {
      id: 2,
      title: 'No Hassle, Just Clarity',
      description: '100% clarity and peace of mind.',
      link: '/contact'
    },
    {
      id: 3,
      title: 'Smart Digital Assistance',
      description: 'Fast, digital, and customer-first.',
      link: '/contact'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="why-choose-overlay">
        <div className="why-choose-container">
          <h2 className="why-choose-title">WHY CHOOSE US ?</h2>
          <div className="title-underline-center"></div>

          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-card">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <a href={feature.link} className="read-more-link">
                  Read more
                  <ChevronRight size={18} className="arrow-icon" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
