export default function ProgressDonut({ value = 0, label = "", description = "" }) {
  const size = 120
  const stroke = 14
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const clamped = Math.max(0, Math.min(100, value))
  const dash = c * (1 - clamped / 100)

  return (
    <div className="donut-item">
      <svg
        className="donut-svg"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label={`${clamped}% ${label}`}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--ring-track, #e8eaf1)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={stroke}
          strokeDasharray={c}
          strokeDashoffset={dash}
          strokeLinecap="butt"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="donut-value">
          {clamped}%
        </text>
      </svg>

      <div className="donut-copy">
        <div className="donut-label">{label}</div>
        {description ? <p className="donut-desc">{description}</p> : null}
      </div>
    </div>
  )
}
