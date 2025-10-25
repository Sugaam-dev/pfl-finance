/* new page: Improve Your Financial Portfolio section (text left, image right) */
import financeimage from "./images/financial-charts-documents.jpg"
export default function TakeoverLoanSection() {
  const APPLY_LINK = `https://wa.me/8618543258?text=${encodeURIComponent(
    "Hi, I'm interested in take over loan services",
  )}`
  return (
    <section className="slice" aria-labelledby="portfolio-title">
      <div>
        <h2 id="portfolio-title" className="slice-title">
          Loan Takeover Made Effortless
        </h2>
        <div className="slice-underline" />
        <div className="slice-text">
          <p>
            Are you paying a high interest rate or struggling with your current lender? With our Loan Takeover Service, you don’t have to worry about the complexities of switching banks. Simply provide us with your basic documents — and our expert team will take care of everything from start to finish.
          </p>
          <p>
            We handle the complete coordination with your existing bank, including balance confirmations, foreclosure procedures, and documentation transfer. At the same time, we negotiate with our network of 150+ partner banks and NBFCs to get you the lowest possible rate, reduced EMI, and improved loan terms that fit your financial goals.
          </p>
          <p>
            Our priority is to ensure a smooth, transparent, and stress-free transition, so you don’t have to chase multiple banks or manage tedious paperwork. From application to approval and disbursal, we make the entire process simple, quick, and beneficial — helping you save more while staying worry-free.
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
          alt="Take overloans"
        />
      </figure>
    </section>
  )
}
