import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar({ currentRoute }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    setMobileOpen(false);
    
    // Smooth scroll for home sections if currently on home page
    if (targetId !== "lands" && currentRoute?.page === "home") {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${targetId}`);
      }
    }
  };

  const isScrolledOrSubpage = scrolled || currentRoute?.page !== "home";

  const navLinks = [
    { label: "Home", target: "hero", href: "/#hero" },
    { label: "Lands", target: "lands", href: "/lands" },
    { label: "Why Us", target: "why-us", href: "/#why-us" },
    { label: "Inquire", target: "inquiry", href: "/#inquiry" },
  ];

  return (
    <nav className={`navbar ${isScrolledOrSubpage ? "navbar--scrolled" : ""}`} id="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <a
          href="/"
          className="navbar__logo"
          onClick={() => setMobileOpen(false)}
        >
          <svg className="navbar__logo-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C16 2 8 8 8 16C8 20.4 11.6 24 16 24C20.4 24 24 20.4 24 16C24 8 16 2 16 2Z" fill="currentColor" opacity="0.8"/>
            <path d="M16 8C16 8 12 12 12 16C12 18.2 13.8 20 16 20C18.2 20 20 18.2 20 16C20 12 16 8 16 8Z" fill="currentColor" opacity="0.4"/>
            <path d="M16 24V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 28H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="navbar__logo-text">LandHaven</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.target}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={(e) => handleNavClick(e, link.target)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/#inquiry"
          className="navbar__cta btn btn-primary btn-sm"
          onClick={(e) => handleNavClick(e, "inquiry")}
        >
          Get Started
        </a>

        {/* Mobile Toggle */}
        <button
          className={`navbar__toggle ${mobileOpen ? "navbar__toggle--open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${mobileOpen ? "navbar__mobile--open" : ""}`}>
        <ul className="navbar__mobile-links">
          {navLinks.map((link) => (
            <li key={link.target}>
              <a
                href={link.href}
                className="navbar__mobile-link"
                onClick={(e) => handleNavClick(e, link.target)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/#inquiry"
          className="btn btn-primary"
          onClick={(e) => handleNavClick(e, "inquiry")}
          style={{ width: "100%", marginTop: "16px" }}
        >
          Get Started
        </a>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="navbar__overlay"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
