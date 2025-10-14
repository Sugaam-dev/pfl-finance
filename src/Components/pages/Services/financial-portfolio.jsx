/* new page: Improve Your Financial Portfolio section (text left, image right) */
import financeimage from "./images/stock-market-screens.jpg"
export default function FinancialPortfolioSection() {
  const APPLY_LINK = `https://wa.me/8618543258?text=${encodeURIComponent(
    "Hi, I'm interested in improving my financial portfolio",
  )}`
  return (
    <section className="slice" aria-labelledby="portfolio-title">
      <div>
        <h2 id="portfolio-title" className="slice-title">
          Improve Your Financial Portfolio
        </h2>
        <div className="slice-underline" />
        <div className="slice-text">
          <p>
            Your financial profile is more than just a credit score — it’s a reflection of your overall financial
            health. We help you build a stronger, more balanced portfolio that showcases your financial credibility and
            stability.
          </p>
          <p>
            Our experts assess your income, liabilities, and existing loans to create a clear roadmap for improvement.
            Whether you’re planning to apply for a new loan, start a business, or simply strengthen your financial
            standing, we guide you step-by-step in optimizing your portfolio.
          </p>
          <p>
            From improving your repayment history to diversifying your credit mix and reducing unnecessary debts — a
            well-managed portfolio can open doors to better credit limits, lower interest rates, and more financial
            freedom.
          </p>
        </div>

        <div className="cta-row" style={{ marginTop: 16 }}>
          <a className="btn btn-solid" href={APPLY_LINK} target="_blank" rel="noopener noreferrer">
            Apply Now
          </a>
          <a className="read-more" href="/contact" aria-label="Go to contact page">
            <span>Read More</span>
            <span className="arrow" aria-hidden="true">
              ➜
            </span>
          </a>
        </div>
      </div>

      <figure className="slice-media">
        <img
          className="slice-img"
          src={financeimage}
          alt="Corporate buffet event with assorted dishes"
        />
      </figure>
    </section>
  )
}
