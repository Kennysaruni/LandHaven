import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar({ currentRoute }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    setMobileOpen(false);

    // Smooth scroll for home sections if currently on home page
    if (targetId !== "lands" && targetId !== "blogs" && currentRoute?.page === "home") {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${targetId}`);
      }
    }
  };

  // Dynamic navbar background opacity
  const isScrolledOrSubpage = isScrolled;

  const navLinks = [
    { label: "Home", target: "hero", href: "/#hero" },
    { label: "Lands", target: "lands", href: "/lands" },
    { label: "Blogs", target: "blogs", href: "/blogs" },
    { label: "Why Us", target: "why-us", href: "/#why-us" },
    { label: "Inquire", target: "inquiry", href: "/#inquiry" },
  ];

  return (
    <nav className={`navbar ${isScrolledOrSubpage ? "navbar--scrolled" : ""} ${mobileOpen ? "navbar--open" : ""}`} id="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <a
          href="/"
          className="navbar__logo"
          onClick={() => setMobileOpen(false)}
        >
          <img src="/JTE.svg" alt="JTE Logo" className="navbar__logo-img" />
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
        {/* <a
          href="/#inquiry"
          className="navbar__cta btn btn-primary btn-sm"
          onClick={(e) => handleNavClick(e, "inquiry")}
        >
          Get Started
        </a> */}

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
        <div className="navbar__mobile-cta">
          <a
            href="https://wa.me/254723597959"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => setMobileOpen(false)}
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
