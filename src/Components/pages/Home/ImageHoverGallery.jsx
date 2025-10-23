

// import React, { useRef, useEffect } from 'react';
// import './Styles/ImageHoverGallery.css';

// const items = [
//   { id:1, title:'Personal Loan Assistance', subtitle:'Read More', img:'/images/loan-plan.png' },
//   { id:2, title:'Car & Vehicle Loans', subtitle:'Read More', img:'/images/loan-eligibility.png' },
//   { id:3, title:'Business & MSME Loans', subtitle:'Read More', img:'/images/loan-disbursement.png' },
// ];

// export default function ImageHoverGallery() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const node = containerRef.current;
//     if (!node) return;

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('in-view');
//         }
//       });
//     }, { threshold: 0.15 });

//     const cards = node.querySelectorAll('.ih-card');
//     cards.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="ih-section">
//       <div className="ih-container" ref={containerRef}>
//         {items.map((it) => (
//           <article key={it.id} className="ih-card" tabIndex="0" aria-label={it.title}>
//             <div className="ih-media" style={{ backgroundImage: `url(${it.img})` }}>
//               <div className="ih-overlay" />
//               <div className="ih-content">
//                 <h3 className="ih-title">{it.title}</h3>
//                 <p className="ih-sub">{it.subtitle}</p>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useRef, useEffect } from 'react';
import './Styles/ImageHoverGallery.css';
import { Link } from 'react-router-dom';

const items = [
  { id: 1, title: 'Personal Loan Assistance', subtitle: 'Read More', img: '/images/loan-plan.png' },
  { id: 2, title: 'Car & Vehicle Loans', subtitle: 'Read More', img: '/images/loan-eligibility.png' },
  { id: 3, title: 'Business & MSME Loans', subtitle: 'Read More', img: '/images/loan-disbursement.png' },
];

export default function ImageHoverGallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = node.querySelectorAll('.ih-card');
    cards.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="ih-section">
      <div className="ih-container" ref={containerRef}>
        {items.map((it) => (
          <Link to="/services" key={it.id} className="ih-card-link">
            <article className="ih-card" tabIndex="0" aria-label={it.title}>
              <div
                className="ih-media"
                style={{ backgroundImage: `url(${it.img})` }}
              >
                <div className="ih-overlay" />
                <div className="ih-content">
                  <h3 className="ih-title">{it.title}</h3>
                  {/* <p className="ih-sub">Read More</p> */}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
