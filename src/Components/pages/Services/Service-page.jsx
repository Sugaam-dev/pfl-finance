import ServiceCard from "./ServiceCard";
import "./service-card.css";
import "./services-sections.css";
import "./service-page.css";
import FinancialPortfolioSection from "./financial-portfolio.jsx";
import LoanSupportSection from "./loan-support.jsx";

const CONTACT_PATH = "/contact"
const WHATSAPP_NUMBER = "8618543258"
const waFor = (label) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in ${label}`)}`
import auditImage from "./images/local-business-opportunities.jpg";
import finimage from "./images/local-business-opportunities.jpg";
import bondimage from "./images/bonds-and-commodities.jpg";
import tradeimage from "./images/trades-and-stocks.jpg";
import strategicimage from "./images/strategic-planning.jpg";
import turnaroundimage from "./images/turnaround-consulting.jpg";
const services = [
  {
    label: "Personal Loan Assistance",
    description: "Get instant financial support for your personal needs—whether it’s travel, education, medical expenses, or debt consolidation. We compare offers from 150+ banks and NBFCs to get you the best interest rate and quick approval.",
    image: finimage
  },
  {
    label: "Home Loan & Balance Transfer",
    description:
      "Fulfil your dream of owning a home with easy and affordable loan options.We help you with-New home loans,Top-up loans for renovation or expansion,we handle documentation and bank coordination from start to finish.",
    image: turnaroundimage
  },
  {
    label: "Business & MSME Loans",
    description: "Fuel your business growth with tailor-made loan solutions for startups, SMEs, and established enterprises.We provide support in securing-Working capital loans,Machinery & equipment financing,Business expansion loans",
    image: bondimage
  },
  {
    label: "Car & Vehicle Loans",
    description: "Drive your dream car with flexible financing. We offer the best deals on-New car loans,Used car loans,Commercial vehicle financing,With our wide partner network, low interest rates and fast disbursals.",
    image: auditImage
  },
  {
    label: "Loan Against Property (LAP)",
    description: "Unlock your property’s value to meet big financial goals—whether for business expansion, education, or debt consolidation.We ensure transparent valuation and high loan amounts with minimal paperwork.",
    image: tradeimage
  },
  {
    label: "Corporate & Payroll Tie-Ups",
    description: "Partner with us to provide your employees exclusive access to pre-approved loans, salary overdrafts, and personal finance solutions.Ideal for companies seeking financial wellness programs for their teams.",
    image: strategicimage
  },
]

export default function ServicePage() {
  return (
    <main className="service-page services-section">
      <header className="section-head" aria-labelledby="services-title">
        <h1 id="services-title" className="section-title">
          Our Services
        </h1>
        <div className="title-underline" />
      </header>

      <section className="cards-grid" aria-label="Services">
        {services.map((s, i) => (
          <ServiceCard key={i} image={s.image} label={s.label} description={s.description}contactHref={CONTACT_PATH}
            applyHref={waFor(s.label)} />
        ))}
      </section>
      <div className="extra-sections" aria-label="Additional Services">
        <FinancialPortfolioSection />
        <LoanSupportSection />
      </div>
    </main>
  )
}
