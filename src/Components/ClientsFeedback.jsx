"use client"

import { useMemo, useState } from "react"

const clients = [
  {
    name: "Amanda Seyfried",
    title: "Sales & Marketing, Alien Ltd.",
    text: "Consulting WP really helped us achieve our financial goals. The slick presentation along with fantastic readability ensures that our financial standing is stable.",
    avatar: "/images/clients/amanda.jpg",
  },
  {
    name: "Donald Simpson",
    title: "Chief Financial Officer, Jamaica International",
    text: "When you are in the financial industry you know the image you have to project to people. You have to be agile and authoritative; Consulting WP is the way to go for financial institutions",
    avatar: "/images/clients/donald.jpg",
  },
  {
    name: "Christian Marcil",
    title: "Partner & Managing Director, Grandier Co.",
    text: "Consulting WordPress Theme is the way to go for financial institutions. We take pride in being a transparent and perfection oriented organization.",
    avatar: "/images/clients/christian.jpg",
  },
]

export default function ClientsFeedback() {
  const [index, setIndex] = useState(0)

  const ordered = useMemo(() => {
    // rotate array so current index is first; ensures last item shows properly
    const n = clients.length
    return Array.from({ length: n }, (_, i) => clients[(index + i) % n])
  }, [index])

  const prev = () => setIndex((i) => (i - 1 + clients.length) % clients.length)
  const next = () => setIndex((i) => (i + 1) % clients.length)

  return (
    <section className="clients" aria-labelledby="clients-title">
      <div className="clients-inner">
        <div className="clients-title-wrap">
          <div className="clients-hatch" aria-hidden="true" />
          <h2 id="clients-title" className="clients-title">
            Clients Feedback
          </h2>
        </div>

        <div className="clients-cards">
          {ordered.map((c, i) => (
            <article className="client-card" key={c.name}>
              <header className="client-head">
                <img src={c.avatar || "/placeholder.svg"} alt="" className="client-avatar" />
                <div className="client-id">
                  <h3 className="client-name">{c.name}</h3>
                  <p className="client-role">{c.title}</p>
                </div>
              </header>
              <p className="client-text">{c.text}</p>
            </article>
          ))}
        </div>

        <div className="clients-nav">
          <button className="nav-btn nav-prev" aria-label="Previous testimonial" onClick={prev}>
            <span className="nav-icon">‹</span>
          </button>
          <button className="nav-btn nav-next" aria-label="Next testimonial" onClick={next}>
            <span className="nav-icon">›</span>
          </button>
        </div>
      </div>
    </section>
  )
}
