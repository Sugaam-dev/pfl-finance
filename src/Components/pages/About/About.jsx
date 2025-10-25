import { useState, useMemo } from "react";
import "./about.css";
import ProgressDonut from "../../ProgressDonut";
// import ClientsFeedback from "../../ClientsFeedback";
// import StoryTimeline from "./StoryTimeline";
// import Logos from "../../Logos";

// ---- Icons (inline SVG, coded – no image links) ----
function Icon({ name }) {
  const blue = "#0a4b8f"
  const coral = "#ef6d64"
  const stroke = 2
  const common = { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: stroke }

  if (name === "environment") {
    return (
      <svg viewBox="0 0 96 96" className="sf-icon" aria-hidden="true">
        <path d="M16 64c8 6 14 9 26 9m38-9c-8 6-14 9-26 9" stroke={coral} {...common} />
        <path d="M20 68c3 6 10 12 22 12M76 68c-3 6-10 12-22 12" stroke={coral} {...common} />
        <circle cx="48" cy="38" r="20" stroke={blue} {...common} />
        <path d="M36 40c6-2 6-6 10-6s6 4 12 4M34 34c2-6 10-8 14-6M54 48c4-2 8-6 8-10" stroke={blue} {...common} />
      </svg>
    )
  }
  if (name === "consumer") {
    return (
      <svg viewBox="0 0 96 96" className="sf-icon" aria-hidden="true">
        <rect x="16" y="30" width="24" height="36" rx="3" stroke={coral} {...common} />
        <path d="M20 30v-4a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v4" stroke={coral} {...common} />
        <rect x="46" y="28" width="14" height="38" rx="3" stroke={blue} {...common} />
        <path d="M53 22v6M64 26h12v40H64zM64 26l6-6l6 6" stroke={blue} {...common} />
      </svg>
    )
  }
  if (name === "aviation") {
    return (
      <svg viewBox="0 0 96 96" className="sf-icon" aria-hidden="true">
        <path d="M16 50l64-16l-18 20l-18-4l-12 12l-4-12z" stroke={blue} {...common} />
        <path d="M68 24c3 0 6 2 6 5" stroke={coral} {...common} />
        <path d="M76 36c3 0 6 2 6 5" stroke={coral} {...common} />
      </svg>
    )
  }
  if (name === "finance") {
    return (
      <svg viewBox="0 0 96 96" className="sf-icon" aria-hidden="true">
        <rect x="18" y="52" width="8" height="16" rx="1.5" stroke={blue} {...common} />
        <rect x="32" y="46" width="8" height="22" rx="1.5" stroke={blue} {...common} />
        <rect x="46" y="58" width="8" height="10" rx="1.5" stroke={blue} {...common} />
        <circle cx="62" cy="40" r="8" stroke={coral} {...common} />
        <path d="M60 40h4M62 36v8" stroke={coral} {...common} />
        <circle cx="76" cy="48" r="8" stroke={coral} {...common} />
        <path d="M74 48h4M76 44v8" stroke={coral} {...common} />
      </svg>
    )
  }
  if (name === "transport") {
    return (
      <svg viewBox="0 0 96 96" className="sf-icon" aria-hidden="true">
        <rect x="16" y="44" width="44" height="22" rx="3" stroke={blue} {...common} />
        <path d="M60 50h10l10 8v8H60" stroke={blue} {...common} />
        <circle cx="30" cy="72" r="6" stroke={blue} {...common} />
        <circle cx="66" cy="72" r="6" stroke={blue} {...common} />
        <path d="M44 58l4 4l8-8" stroke={coral} {...common} />
      </svg>
    )
  }
  // strategic
  return (
    <svg viewBox="0 0 96 96" className="sf-icon" aria-hidden="true">
      <polyline points="20,70 20,54 30,54 30,70" stroke={blue} {...common} />
      <polyline points="36,70 36,46 46,46 46,70" stroke={blue} {...common} />
      <polyline points="52,70 52,38 62,38 62,70" stroke={blue} {...common} />
      <path d="M30 30l12 6l14-10l10 6" stroke={coral} {...common} />
      <path d="M66 32l8 4" stroke={coral} {...common} />
    </svg>
  )
}

function StandForItem({ icon, title, children }) {
  return (
    <article className="sf-item">
      <div className="sf-icon-wrap" aria-hidden="true">
        <span className="sf-hatch" />
        <Icon name={icon} />
      </div>
      <div className="sf-copy">
        <h3 className="sf-title">{title}</h3>
        <p className="sf-text">{children}</p>
      </div>
    </article>
  )
}

// ---- Tabbed "What do we Stand for?" ----
function StandForTabs() {
  const [tab, setTab] = useState("financial") // other | financial | consulting

  // Base items and copy (kept exactly like your existing section)
  const items = useMemo(
    () => ({

      // FINANCIAL =========================================================
      environment: {
        icon: "environment",
        title: "Personal Loans:",
        text: "Tailored solutions for your immediate and lifestyle needs.",
      },
      consumer: {
        icon: "consumer",
        title: "Business Loans:",
        text: "Empowering entrepreneurs with easy access to working capital.",
      },     
      aviation: {
        icon: "aviation",
        title: "Home Loans:",
        text: " Helping families achieve their dream of owning a home.",
      },
      finance: {
        icon: "finance",
        title: "Credit Rehabilitation:",
        text: " Support for applicants with low CIBIL or past defaults.",
      },
      transport: {
        icon: "transport",
        title: "Emergency Funding:",
        text: "Quick, reliable loans during urgent financial situations.",
      },
      strategic: {
        icon: "strategic",
        title: "Debt Consolidation:",
        text: " Streamlining multiple loans for better repayment management.",
      },

//CONSULTING=============================================================================

     FinancialAdvisory: {
        icon: "environment",
        title: "Financial Advisory:",
        text: "Personalized plans for loan optimization and budgeting.",
      },
      CIBILImprovementStrategy: {
        icon: "consumer",
        title: "CIBIL Improvement Strategy:",
        text: "Step-by-step guidance to rebuild your credit profile.",
      },     
      LegalLoanConsulting: {
        icon: "aviation",
        title: "Legal Loan Consulting:",
        text: " Specialized support for clients with ongoing or resolved legal issues.",
      },
      InvestmentPlanning: {
        icon: "finance",
        title: "Investment Planning:",
        text: " Smart, data-driven insights to grow your wealth securely.",
      },
      BankLiaisonServices: {
        icon: "transport",
        title: "Bank Liaison Services:",
        text: "We handle communication and documentation with lenders.",
      },
      RiskAssessment:  {
        icon: "strategic",
        title: "Risk Assessment:",
        text: " Evaluating credit and repayment risks to guide safe borrowing.",
      },
//OTHER SOLUTION ===============================================================


 InsuranceAssistance: {
        icon: "environment",
        title: "Insurance Assistance:",
        text: " Coverage plans tailored for personal and business protection.",
      },
      FinancialDocumentationHelp:  {
        icon: "consumer",
        title: "Financial Documentation Help:",
        text: "Error-free paperwork and compliance support.",
      },     
      LoanRefinanceSolutions: {
        icon: "aviation",
        title: "Loan Refinance Solutions:",
        text: "Better terms, reduced interest, smarter repayment.",
      },
      StartupFinanceSupport: {
        icon: "finance",
        title: "Startup Finance Support:",
        text: "Helping new businesses secure early-stage capital.",
      },
      AssetManagement: {
        icon: "transport",
        title: "Asset Management:",
        text: "Efficient handling of existing financial resources for growth.",
      },
      CustomerSupportAndEducation:  {
        icon: "strategic",
        title: "Customer Support & Education:",
        text: "Empowering clients with knowledge for financial independence.",
      },
    }),
    [],
  )

  // Orders:
  // - other: exactly your current order
  const otherOrder = ["InsuranceAssistance", "FinancialDocumentationHelp", "LoanRefinanceSolutions", "StartupFinanceSupport", "AssetManagement", "CustomerSupportAndEducation"]
  // - financial: matches your first image (row1: aviation, strategic, consumer; row2: transport, environment, finance)
  const financialOrder = ["aviation", "strategic", "consumer", "transport", "environment", "finance"]
  // - consulting: matches your second image (row1: consumer, transport, environment; row2: aviation, finance, strategic)
  const consultingOrder = ["FinancialAdvisory", "CIBILImprovementStrategy", "LegalLoanConsulting", "InvestmentPlanning", "BankLiaisonServices", "RiskAssessment"]

  const order = tab === "financial" ? financialOrder : tab === "consulting" ? consultingOrder : otherOrder
  const panelId = `panel-${tab}`

  return (
    <section className="standfor" aria-labelledby="standfor-title">
      <h2 id="standfor-title" className="standfor-heading">
        What we Stand for?
      </h2>

      <div className="standfor-tabs" role="tablist" aria-label="Stand for categories">
        <button
          id="tab-financial"
          className={`sf-tab ${tab === "financial" ? "sf-tab--active" : ""}`}
          role="tab"
          aria-selected={tab === "financial"}
          aria-controls="panel-financial"
          onClick={() => setTab("financial")}
        >
          Financial
        </button>
        <button
          id="tab-consulting"
          className={`sf-tab ${tab === "consulting" ? "sf-tab--active" : ""}`}
          role="tab"
          aria-selected={tab === "consulting"}
          aria-controls="panel-consulting"
          onClick={() => setTab("consulting")}
        >
          Consulting
        </button>
        <button
          id="tab-other"
          className={`sf-tab ${tab === "other" ? "sf-tab--active" : ""}`}
          role="tab"
          aria-selected={tab === "other"}
          aria-controls="panel-other"
          onClick={() => setTab("other")}
        >
          Other Solution
        </button>
      </div>

      <div id={panelId} role="tabpanel" aria-labelledby={`tab-${tab}`} className="standfor-grid">
        {order.map((key) => {
          const i = items[key]
          return (
            <StandForItem key={key} icon={i.icon} title={i.title}>
              {i.text}
            </StandForItem>
          )
        })}
      </div>

      <div className="sf-triangle" aria-hidden="true" />
    </section>
  )
}

// ---- Small shared UI ----
function Stat({ value, label }) {
  return (
    <div className="stat">
      <div className="stat-circle">
        <span className="stat-value">{value}</span>
      </div>
      <p className="stat-label">{label}</p>
    </div>
  )
}

function IndiaMap() {
  const dots = [
    { top: "26%", left: "50%", name: "Delhi" },
    { top: "60%", left: "32%", name: "Mumbai" },
    { top: "72%", left: "43%", name: "Bengaluru" },
    { top: "76%", left: "48%", name: "Chennai" },
    { top: "45%", left: "65%", name: "Kolkata" },
    { top: "62%", left: "52%", name: "Hyderabad" },
  ]
  return (
    <div className="india-map" role="img" aria-label="Map of India with office locations">
      <img src="/images/india-map.jpg" alt="Vector outline map of India" className="india-svg" />
      {dots.map((d, i) => (
        <div className="map-dot" style={{ top: d.top, left: d.left }} key={i}>
          <span className="sr-only">{d.name}</span>
        </div>
      ))}
    </div>
  )
}

// ---- Page ----
export default function About() {
  return (
    <main className="rb-container">
      {/* HERO (unchanged structure) */}
      <section className="hero" aria-labelledby="rb-title">
        <div className="hero-media">
          <img
            src="/images/hero-meeting.jpg"
            alt="Business team collaborating in a bright meeting room"
            className="hero-img"
            loading="eager"
          />
          <div className="media-decor decor-1" aria-hidden="true" />
        </div>
        <div className="hero-content">
          <h1 id="rb-title" className="title text-balance">
            Your Trusted Loan Partner
          </h1>
          <p className="lead">
            Our team specializes in assisting individuals who face challenges like low CIBIL scores or ongoing legal disputes,
            guiding them toward practical and achievable financial solutions. We take pride in offering personalized strategies,
            transparent processes, and a results-driven approach that makes funding accessible to everyone.
            Why Choose Us.
          </p>
      <ul className="hero-points">
            <li>Loan access from 167+ banks and NBFCs</li>
            <li>Assistance with low credit or legal challenges</li>
            <li>Emergency loan support for urgent needs</li>
            <li>Expert team dedicated to your financial success</li>
          </ul>
          <p className="lead">
          With agility, integrity, and a deep commitment to our clients, we stand beside you at every
           step — from application to approval — helping you secure the financial confidence you deserve.
           </p>
        </div>
      </section>

      {/* What do we Stand for? with tabs */}
      <StandForTabs />

      {/* EXPERTS (unchanged header, map) */}
      <section className="experts" aria-labelledby="experts-title">
        <div className="experts-header">
          <h2 id="experts-title" className="about-section-title text-balance">
            Working with <span className="accent">experts</span> around the India
          </h2>
          {/* <p className="experts-sub">
            Our distributed teams collaborate across key Indian hubs to deliver high-impact outcomes.
          </p> */}
        </div>
        <IndiaMap />
        <div className="donut-row">
          <ProgressDonut
            value={90}
            label="Loan Approvals"
            description="Helping clients get the funding they need with faster approvals."
          />
          <ProgressDonut
            value={82}
            label="Credit Improvement Success"
            description="Guiding applicants to rebuild and improve their credit score."
          />
          <ProgressDonut
            value={63}
            label="Emergency Loan Assistance"
            description="Quick response and fast-track processing for urgent needs."
          />
        </div>
      </section>
      {/* STORY (unchanged) */}
      {/* <section className="story" aria-labelledby="story-title">
        <div className="story-bg" />
        <h2 id="story-title" className="section-title invert">
          Our story
        </h2>
        <ol className="timeline" aria-label="Company milestones">
          <li className="timeline-item">
            <div className="dot" />
            <div className="year">2008</div>
            <p>Company foundation. Early wins across finance and operations.</p>
          </li>
          <li className="timeline-item">
            <div className="dot" />
            <div className="year">2009</div>
            <p>New products expansion. Built data-backed frameworks.</p>
          </li>
          <li className="timeline-item">
            <div className="dot" />
            <div className="year">2011</div>
            <p>Enterprise collaboration. Scaled delivery with reliability.</p>
          </li>
          <li className="timeline-item">
            <div className="dot" />
            <div className="year">2013</div>
            <p>Customer care support. Continuous improvement culture.</p>
          </li>
        </ol>
      </section> */}
      {/* <StoryTimeline /> */}

      {/* TEAM (unchanged) */}
      <section className="team" aria-labelledby="team-title">
        <h2 id="team-title" className="about-section-title text-balance">
          Partnered with Leading  <span className="accent">Banks & NBFCs</span>
        </h2>
        <div className="team-grid">
          {[
            // { name: "SBI Bank", role: "SBI Bank", img: "/images/teams/sbi.jpg" },
            { name: "SBI Bank",  img: "/images/teams/sbi.jpg" },
            { name: "Indian Overseas Bank", img: "/images/teams/indianoverseas.jpg" },
            { name: "HDFC Bank", img: "/images/teams/hdfc.jpg" },
            { name: "ICICI Bank",  img: "/images/teams/icici.jpg" },
            { name: "Axis Bank", img: "/images/teams/axis.png" },
            { name: "Bank of Baroda",  img: "/images/teams/bob.jpg" },
            { name: "TATA Capital Bajaj Bank",img: "/images/teams/tatacapital.jpg" },
            { name: "IDBI Bank",  img: "/images/teams/idbi.jpg" },          
            { name: "Bank Of Maharashtra", img: "/images/teams/BankOfMaharashtra.webp" },
            { name: "Induslnd Bank", img: "/images/teams/induslnd.jpg" },
            { name: "BOI Bank", img: "/images/teams/boi.jpg" },
            { name: "Kotak Bank",  img: "/images/teams/kotak.jpg" },
           
          ].map((m, i) => (
            <article className="member" key={i}>
              <img
                src={m.img || "/placeholder.svg"}
                alt={`${m.name} - ${m.role}`}
                className="member-photo"
                loading="lazy"
              />
              <div className="member-info">
                <h3 className="member-name">{m.name}</h3>
                <p className="member-role">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Clients Feedback (new slider) */}
      {/* <ClientsFeedback /> */}
      {/* <Logos/> */}
    </main>
  )
}