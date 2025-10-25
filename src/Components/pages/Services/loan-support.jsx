/* new page: Secure Loans Despite Legal or Credit Challenges (image left, text right) */
import loanimage from "./images/people-working-laptops.jpg"
export default function LoanSupportSection() {
  const APPLY_LINK = `https://wa.me/8618543258?text=${encodeURIComponent(
    "Hi, I need help securing a loan despite legal/credit challenges",
  )}`
  return (
    <section className="slice reverse" aria-labelledby="loan-support-title">
      <figure className="slice-media">
        <img
          className="slice-img"
          src={loanimage}
          alt="Volunteers serving meals during a CSR activity"
        />
      </figure>

      <div>
        <h2 id="loan-support-title" className="slice-title">
          Loan Support Despite Challenges
        </h2>
        <div className="slice-underline" />
        <div className="slice-text">
          <p>
            A low CIBIL score or pending legal issue doesn’t have to stop your financial progress. We specialize in
            helping individuals and businesses secure loans even when traditional criteria seem unfavorable.
          </p>
          <p>
            Our consultants analyze your situation, identify lenders open to special cases, and negotiate terms aligned
            with your current standing. With strong relationships across banks and NBFCs, we help find the right lending
            partner.
          </p>
          <p>
            With transparent documentation, personalized advisory, and complete confidentiality, we ensure you get the
            best opportunity to rebuild and grow — whether it’s a personal loan, business loan, or refinancing option.
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
    </section>
  )
}
