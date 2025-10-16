// TestimonialsTeam.jsx
import React, { useState, useEffect, useRef  } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Styles/TestimonialsTeam.css';

const TestimonialsTeam = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Amanda Seyfried',
      position: 'Sales & Marketing',
      company: 'Alien Ltd.',
      image: 'https://consulting.stylemixthemes.com/four/wp-content/uploads/sites/4/2016/01/staff_1-1.jpg', // Replace with your image path
      text: 'Consulting WP really helped us achieve our financial goals. The slick presentation along with fantastic readability ensures that our financial standing is stable.'
    },
    {
      id: 2,
      name: 'John Anderson',
      position: 'CEO',
      company: 'Tech Solutions Inc.',
      image: 'https://consulting.stylemixthemes.com/four/wp-content/uploads/sites/4/2016/01/staff_1-1.jpg', // Replace with your image path
      text: 'Outstanding service and professional approach. They exceeded our expectations in every way possible. Highly recommended for any business consulting needs.'
    },
    {
      id: 3,
      name: 'Sarah Mitchell',
      position: 'Director of Operations',
      company: 'Global Enterprises',
      image: 'https://consulting.stylemixthemes.com/four/wp-content/uploads/sites/4/2016/01/staff_2-1.jpg', // Replace with your image path
      text: 'The team provided exceptional guidance and support throughout our transformation journey. Their expertise was invaluable to our success.'
    }
  ];

  // Team data
  const teamMembers = [
    {
      id: 1,
      name: 'Brandon Copperfield',
      position: 'Founder & CEO',
      image: 'https://consulting.stylemixthemes.com/four/wp-content/uploads/sites/4/2016/01/staff_1-1.jpg' // Replace with your image path
    },
    {
      id: 2,
      name: 'Clark Roberts',
      position: 'Chief Finance Officer',
      image: 'https://consulting.stylemixthemes.com/four/wp-content/uploads/sites/4/2016/01/staff_2-1.jpg' // Replace with your image path
    },
    {
      id: 3,
      name: 'Emily Johnson',
      position: 'Head of Marketing',
      image: 'https://consulting.stylemixthemes.com/four/wp-content/uploads/sites/4/2016/01/staff_1-1.jpg' // Replace with your image path
    },
    {
      id: 4,
      name: 'Michael Davis',
      position: 'Senior Consultant',
      image: '/images/michael.jpg' // Replace with your image path
    }
  ];

   // Testimonials slider state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [testimonialFade, setTestimonialFade] = useState(true);

  // Team slider state
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [teamItemsPerView, setTeamItemsPerView] = useState(2);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState('left');

  // Touch/Swipe state
  const teamSliderRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Update items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTeamItemsPerView(1);
      } else if (window.innerWidth < 992) {
        setTeamItemsPerView(2);
      } else {
        setTeamItemsPerView(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide for testimonials (every 5 seconds)
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(testimonialInterval);
  }, [currentTestimonial]);

  // Auto-slide for team (every 4 seconds)
  useEffect(() => {
    const teamInterval = setInterval(() => {
      nextTeam();
    }, 4000);

    return () => clearInterval(teamInterval);
  }, [currentTeamIndex, teamItemsPerView]);

  // Testimonials navigation with fade effect
  const nextTestimonial = () => {
    setTestimonialFade(false);
    setTimeout(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
      setTestimonialFade(true);
    }, 300);
  };

  const prevTestimonial = () => {
    setTestimonialFade(false);
    setTimeout(() => {
      setCurrentTestimonial((prev) => 
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
      setTestimonialFade(true);
    }, 300);
  };

  // Team navigation with slide effect (right to left)
  const nextTeam = () => {
    if (isSliding) return;
    setIsSliding(true);
    setSlideDirection('left');
    
    setTimeout(() => {
      setCurrentTeamIndex((prev) => 
        prev >= teamMembers.length - teamItemsPerView ? 0 : prev + 1
      );
      setIsSliding(false);
    }, 500);
  };

  const prevTeam = () => {
    if (isSliding) return;
    setIsSliding(true);
    setSlideDirection('right');
    
    setTimeout(() => {
      setCurrentTeamIndex((prev) => 
        prev === 0 ? teamMembers.length - teamItemsPerView : prev - 1
      );
      setIsSliding(false);
    }, 500);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left - go to next
      nextTeam();
    }

    if (distance < -minSwipeDistance) {
      // Swiped right - go to previous
      prevTeam();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const visibleTeamMembers = teamMembers.slice(
    currentTeamIndex,
    currentTeamIndex + teamItemsPerView
  );

  return (
    <section className="testimonials-team-section">
      <div className="testimonials-team-container">
        <div className="content-wrapper">
          {/* Testimonials Section */}
          <div className="testimonials-section">
            <h2 className="section-title">TESTIMONIALS</h2>
            <div className="title-underline"></div>

            <div className="testimonials-slider">
              <div className={`testimonial-content ${testimonialFade ? 'fade-in' : 'fade-out'}`}>
                <div className="testimonial-image-wrapper">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="testimonial-image"
                  />
                </div>
                <div className="testimonial-text-wrapper">
                  <h3 className="testimonial-name">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="testimonial-position">
                    {testimonials[currentTestimonial].position}
                  </p>
                  <p className="testimonial-company">
                    {testimonials[currentTestimonial].company}
                  </p>
                  <p className="testimonial-text">
                    {testimonials[currentTestimonial].text}
                  </p>
                </div>
              </div>

              {/* Testimonial Navigation Dots */}
              <div className="slider-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${currentTestimonial === index ? 'active' : ''}`}
                    onClick={() => {
                      setTestimonialFade(false);
                      setTimeout(() => {
                        setCurrentTestimonial(index);
                        setTestimonialFade(true);
                      }, 300);
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Our Team Section */}
          <div className="team-section">
            <div className="team-header">
              <div>
                <h2 className="section-title">OUR TEAM</h2>
                <div className="title-underline"></div>
              </div>
              <div className="navigation-buttons">
                <button 
                  className="nav-button" 
                  onClick={prevTeam}
                  aria-label="Previous team members"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  className="nav-button" 
                  onClick={nextTeam}
                  aria-label="Next team members"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div 
              className="team-slider"
              ref={teamSliderRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className={`team-grid ${isSliding ? `slide-${slideDirection}` : ''}`}>
                {visibleTeamMembers.map((member) => (
                  <div key={member.id} className="team-card">
                    <div className="team-image-wrapper">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="team-image"
                      />
                    </div>
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-position">{member.position}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsTeam;