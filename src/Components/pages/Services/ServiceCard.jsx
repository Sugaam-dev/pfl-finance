export default function ServiceCard({ image , label, description }) {
  return (
    <article className="service-card">
      <div className="image-wrap">
        <img className="service-image" src={image} alt={label ? `${label} hero` : "Service"} />
        {label ? <div className="label-chip">{label}</div> : null}
      </div>

      <div className="card-body">
        {description ? <p className="card-desc">{description}</p> : null}
        <div className="card-divider" aria-hidden="true" />
        <div className="read-more-row">
          <a className="read-more" href="#" aria-label="Read more about this service">
            <span>know More</span>
            <span className="arrow" aria-hidden="true">
              ➜
            </span>
          </a>
        </div>
      </div>
    </article>
  )
}
