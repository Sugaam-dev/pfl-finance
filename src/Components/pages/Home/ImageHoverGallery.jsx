

import React, { useRef, useEffect } from 'react';
import './Styles/ImageHoverGallery.css';

const items = [
  { id:1, title:'Plan Your Loan', subtitle:'Person using a laptop at a desk with financial charts on screen, a pen and notepad beside it. Professional, warm office lighting.', img:'/images/loan-plan.png' },
  { id:2, title:'Check Eligibility', subtitle:'Close-up of a bank officer or customer looking at a tablet with a checklist / verified badge; or a graphic of a checklist and a green tick. Friendly trustworthy colors (blue/green).', img:'/images/loan-eligibility.png' },
  { id:3, title:'Apply & Get Funds', subtitle:'A happy customer receiving keys or handshake with bank representative, or smartphone screen showing payment received / bank transfer success. Emphasize the “funds transferred / approved” moment.', img:'/images/loan-disbursement.png' },
];

export default function ImageHoverGallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.15 });

    const cards = node.querySelectorAll('.ih-card');
    cards.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="ih-section">
      <div className="ih-container" ref={containerRef}>
        {items.map((it) => (
          <article key={it.id} className="ih-card" tabIndex="0" aria-label={it.title}>
            <div className="ih-media" style={{ backgroundImage: `url(${it.img})` }}>
              <div className="ih-overlay" />
              <div className="ih-content">
                <h3 className="ih-title">{it.title}</h3>
                <p className="ih-sub">{it.subtitle}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
