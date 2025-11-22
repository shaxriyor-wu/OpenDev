import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-title">OpenDev</h3>
            <p className="footer-description">
              O'zbekiston dasturlash hamjamiyati. Bepul kurslar, loyihalar va
              bilim almashish platformasi.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Tezkor Linklar</h4>
            <ul className="footer-links">
              <li>
                <a href="/">Asosiy Sahifa</a>
              </li>
              <li>
                <a href="/courses">Kurslar</a>
              </li>
              <li>
                <a href="/projects">Loyihalar</a>
              </li>
              <li>
                <a href="/contacting">SeniorDevs</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4 className="footer-heading">Bog'lanish</h4>
            <div className="social-links">
              <a
                href="https://t.me/shaxriyorkarimberdiyev"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link telegram"
                aria-label="Telegram kanaliga o'tish"
              >
                <svg
                  viewBox="0 0 240 240"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M120 0C53.7 0 0 53.7 0 120s53.7 120 120 120 120-53.7 120-120S186.3 0 120 0zm56.1 81.9l-18.2 85.9c-1.4 6.6-5.1 8.3-10.3 5.2l-28.4-20.9-13.7 13.2c-1.5 1.5-2.7 2.7-5.6 2.7l2-28.4 51.7-46.7c2.2-2.2-.5-3.4-3.4-1.2l-63.9 40.3-27.5-8.6c-6-1.9-6.1-6-1.3-8.7l106.6-41c4.9-1.9 9.2 1.2 7.5 8.6z" />
                </svg>
                <span>@shaxriyorkarimberdiyev</span>
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="footer-section">
            <h4 className="footer-heading">Yangiliklar</h4>
            <p className="footer-description">
              Yangi kurslar va loyihalar haqida xabardor bo'ling
            </p>
            <div className="newsletter">
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="newsletter-input"
                aria-label="Email manzil"
              />
              <button className="newsletter-button" aria-label="Obuna bo'lish">
                Obuna
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} OpenDev. Barcha huquqlar himoyalangan.
          </p>
          <div className="footer-bottom-links">
            <a href="/privacy">Maxfiylik Siyosati</a>
            <span>|</span>
            <a href="/terms">Foydalanish Shartlari</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

