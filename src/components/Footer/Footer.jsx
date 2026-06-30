import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e, targetId) => {
    const isHomePage = !window.location.hash || window.location.hash === "#home" || window.location.hash === "#hero" || window.location.hash === "#why-us" || window.location.hash === "#inquiry";
    if (targetId !== "lands" && targetId !== "blogs" && isHomePage) {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Company Info */}
          <div className="footer__col footer__col--brand">
            <div className="footer__logo">
              <img src="/JTE.svg" alt="JTE Logo" className="navbar__logo-img" />
            </div>
            <p className="footer__desc">
              Your professional partner in engineering, surveying, subdivision, and land consulting across Kenya.
            </p>
            <div className="footer__socials">
              <a href="https://facebook.com" className="footer__social" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a href="https://twitter.com" className="footer__social" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
              </a>
              <a href="https://instagram.com" className="footer__social" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              <li><a href="#hero" onClick={(e) => handleNavClick(e, "hero")}>Home</a></li>
              <li><a href="#lands" onClick={(e) => handleNavClick(e, "lands")}>Lands</a></li>
              <li><a href="/blogs" onClick={(e) => handleNavClick(e, "blogs")}>Blogs</a></li>
              <li><a href="#why-us" onClick={(e) => handleNavClick(e, "why-us")}>Why Us</a></li>
              <li><a href="#inquiry" onClick={(e) => handleNavClick(e, "inquiry")}>Inquire</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Contact Us</h4>
            <ul className="footer__contact-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                <span>+254 723 597 959</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                <span>saruni2003@gmail.com</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <p>&copy; {currentYear} Jermaine Technologies Entreprises. All rights reserved.</p>
            <p className="footer__developer">Designed & Developed by <a href="https://latimore.vercel.app" target="_blank" rel="noopener noreferrer">Kenny Latimore</a></p>
          </div>
          <button className="footer__top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
