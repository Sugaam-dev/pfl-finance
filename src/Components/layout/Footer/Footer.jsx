import "./footer.css"
import footerLogo from "./images/Screenshot 2025-10-11 192346.png";
export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        {/* Logo */}
        <div className="footer__logo-wrapper">
        <img
          className="footer__logo"
          src={footerLogo}
          alt="Catch-Up club logo"
          loading="lazy"
        />
        </div>

        {/* Social icons */}
        <ul className="footer__social" aria-label="Social media">
          <li>
            <a href="#" aria-label="Facebook" className="socialLink" target="_blank" rel="noopener noreferrer">
              {/* Facebook SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M22 12.06C22 6.477 17.523 2 11.94 2S1.88 6.477 1.88 12.06c0 4.99 3.657 9.128 8.437 9.94v-7.03H7.898V12.06h2.418V9.797c0-2.39 1.424-3.71 3.603-3.71 1.043 0 2.135.186 2.135.186v2.35h-1.203c-1.185 0-1.554.736-1.554 1.49v1.947h2.646l-.423 2.91H13.3v7.03c4.78-.812 8.437-4.95 8.437-9.94Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="LinkedIn" className="socialLink" target="_blank" rel="noopener noreferrer">
              {/* LinkedIn SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.67V24h-5v-7.33c0-1.75-.03-4-2.44-4-2.44 0-2.81 1.9-2.81 3.86V24h-5V8z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Instagram" className="socialLink" target="_blank" rel="noopener noreferrer">
              {/* Instagram SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.507 5.507 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm5.75-2.75a.75.75 0 1 0 .75.75.75.75 0 0 0-.75-.75z" />
              </svg>
            </a>
          </li>
        </ul>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul className="footer__nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <p className="footer__copy">@2025 All Rights Reserved Design by SUGAAM</p>
      </div>
    </footer>
  )
}
