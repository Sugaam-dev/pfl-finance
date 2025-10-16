// WhyChooseUs.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import './Styles/WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Raw Spreads',
      description: 'Receive premium pricing from Top Tier financial institutions. Pricing from Top Tier financial institutions.',
      link: '/raw-spreads'
    },
    {
      id: 2,
      title: 'No Dealing Desk',
      description: 'With Consulting WP you\'ll get no re-quotes, no dealer intervention and fair order execution.',
      link: '/no-dealing-desk'
    },
    {
      id: 3,
      title: 'State of the Art',
      description: 'Trade Forex and CFDs with the world\'s best trading platforms on your desktop or mobile device.',
      link: '/state-of-art'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="why-choose-overlay">
        <div className="why-choose-container">
          <h2 className="why-choose-title">WHY TRADERS CHOOSE US</h2>
          <div className="title-underline-center"></div>

          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-card">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <a href={feature.link} className="read-more-link">
                  read more
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
