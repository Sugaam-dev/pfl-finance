import { Triangle, Flame, FastForward, Phone, Recycle, Layers } from "lucide-react"
import "./client-logos.css"

export default function Logos() {
  return (
    <section className="client-logos" aria-labelledby="client-logos-title">
      <h2 id="client-logos-title" className="sr-only">
        Our Clients
      </h2>

      <ul className="logo-grid">
        <Logo icon={Triangle} label="TVC" subtitle="Marketing" />
        <Logo icon={Flame} label="arcade" />
        <Logo icon={FastForward} label="Fast Brothers" />
        <Logo icon={Phone} label="KPHONE" />
        <Logo icon={Recycle} label="Volker Stevin" subtitle="Construction" />
        <Logo icon={Layers} label="edge" subtitle="edtech" />
      </ul>

      {/* <p className="caption">
        <span className="year">© 2025</span>
        <span className="brand">CONSULTING</span>
        <span className="sep"> Theme for WordPress by </span>
        <span className="brand">STYLEMIXTHEMES</span>
      </p> */}
    </section>
  )
}

function Logo({ icon: Icon, label, subtitle }) {
  return (
    <li className="logo-item">
      <span className="logo-icon" aria-hidden="true">
        <Icon />
      </span>
      <div className="logo-text">
        <div className="label">{label}</div>
        {subtitle ? <div className="subtitle">{subtitle}</div> : null}
      </div>
    </li>
  )
}
