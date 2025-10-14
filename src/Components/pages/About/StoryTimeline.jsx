// "use client"

// import { useMemo, useState } from "react"

// export default function StoryTimeline() {
//   // 3 slides: first two match your images, third shows 2022, 2023, 2025
//   const slides = useMemo(
//     () => [
//       {
//         cols: 4,
//         items: [
//           {
//             year: "2008",
//             title: "Company Foundation",
//             text: "Early start of our company and the first step into the business administration market.",
//           },
//           {
//             year: "2009",
//             title: "New Products Integration",
//             text: "Development of new innovative solutions for finance.",
//           },
//           {
//             year: "2011",
//             title: "Business Collaboration",
//             text: "The beginning of active interaction with our business partners.",
//           },
//           {
//             year: "2013",
//             title: "Customer Care Support",
//             text: "All of our products are aimed at realizing the goals of our users.",
//           },
//         ],
//       },
//       {
//         cols: 4,
//         items: [
//           {
//             year: "2013",
//             title: "Customer Care Support",
//             text: "All of our products are aimed at realizing the goals of our users.",
//           },
//           {
//             year: "2016",
//             title: "Far Growing On Services",
//             text: "We pursued to bring a high‑quality and widely‑ranged finance deliberation to our partners.",
//           },
//           {
//             year: "2018",
//             title: "New Spots of Offices Over the World",
//             text: "Gradually spread the overall influence and gained recognition based on our first‑class services.",
//           },
//           {
//             year: "2021",
//             title: "Advanced Options for Technology Sector",
//             text: "Researching and starting to embrace innovative branches in hi‑tech and digital world.",
//           },
//         ],
//       },
//       {
//         cols: 3,
//         items: [
//           {
//             year: "2022",
//             title: "Operational Excellence",
//             text: "Scaled delivery playbooks and streamlined governance for faster outcomes.",
//           },
//           {
//             year: "2023",
//             title: "New Markets Expansion",
//             text: "Entered strategic regions with localized services and partnerships.",
//           },
//           {
//             year: "2025",
//             title: "AI‑Driven Solutions",
//             text: "Embedding intelligence across products to deliver measurable results.",
//           },
//         ],
//       },
//     ],
//     [],
//   )

//   const [index, setIndex] = useState(0)
//   const slide = slides[index]

//   const next = () => setIndex((i) => (i + 1) % slides.length)
//   const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)

//   return (
//     <section className="story2" aria-labelledby="our-story-title">
//       <div className="story2-bg" aria-hidden="true" />
//       <div className="story2-hatch" aria-hidden="true" />
//       <h2 id="our-story-title" className="story2-title">
//         Our story
//       </h2>

//       {/* Line + dots exactly as design (pure CSS/HTML, no images) */}
//       <div className="story2-line-wrap" aria-hidden="true">
//         <div className="story2-line" />
//         {slide.items.map((_, i) => {
//           const left = slide.cols === 1 ? "0%" : `${(i / (slide.cols - 1)) * 100}%`
//           return <span className="story2-dot" key={i} style={{ left }} />
//         })}
//       </div>

//       <ul className={`story2-grid cols-${slide.cols}`} aria-label={`Timeline slide ${index + 1} of ${slides.length}`}>
//         {slide.items.map((it, i) => (
//           <li className="story2-card" key={i}>
//             <div className="story2-year">{it.year}</div>
//             <h3 className="story2-card-title">{it.title}</h3>
//             <p className="story2-card-text">{it.text}</p>
//           </li>
//         ))}
//       </ul>

//       <div className="story2-nav" aria-label="Timeline navigation">
//         <button className="s-nav-btn s-nav-prev" onClick={prev} aria-label="Previous timeline">
//           <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
//             <path
//               d="M15 6l-6 6l6 6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>
//         <button className="s-nav-btn s-nav-next" onClick={next} aria-label="Next timeline">
//           <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
//             <path
//               d="M9 6l6 6l-6 6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>
//       </div>
//     </section>
//   )
// }
