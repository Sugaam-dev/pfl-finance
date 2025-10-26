import { Link } from "react-router-dom";

export default function ServiceCard({ image, label, description, applyHref, contactHref = "/contact" }) {
  const defaultApplyHref = `https://wa.me/8618543258?text=${encodeURIComponent(
    `Hi, I'm interested in ${label || "your service"}`,
  )}`;

  return (
    <article className="service-card">
      <div className="image-wrap">
        <img className="service-image" src={image} alt={label ? `${label} hero` : "Service"} />
        {label ? <div className="label-chip">{label}</div> : null}
      </div>

      <div className="card-body">
        {description ? <p className="card-desc">{description}</p> : null}
        <div className="card-divider" aria-hidden="true" />

        <div className="read-more-row cta-row">
          <a
            className="btn btn-solid"
            href={applyHref || defaultApplyHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Apply now on WhatsApp for ${label || "this service"}`}
          >
            Apply Now
          </a>

          {/* ✅ Converted to Link */}
          <Link className="read-more" to={contactHref} aria-label="Go to contact page">
            <span>Read More</span>
            <span className="arrow" aria-hidden="true">
              ➜
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
