import "./Hero.css";
import heroBanner from "../../assets/hero-banner.png";

function Hero() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <img src={heroBanner} alt="Aerial view of premium land plots in Kenya" className="hero__bg-img" />
        <div className="hero__overlay"></div>
      </div>

      {/* Decorative floating shapes */}
      <div className="hero__shapes">
        <div className="hero__shape hero__shape--1"></div>
        <div className="hero__shape hero__shape--2"></div>
        <div className="hero__shape hero__shape--3"></div>
      </div>

      <div className="hero__content container">
        <span className="hero__pretitle">Premium Land Investment</span>
        <h1 className="hero__title">
          Invest in Verified, <br />
          <span className="hero__title-accent">Prime Land in Kenya</span>
        </h1>
        <p className="hero__subtitle">
          Discover certified land plots across high-growth areas. 
          From Ruiru to Narok — secure your legacy with confidence.
        </p>
        <div className="hero__actions">
          <a
            href="/lands"
            className="btn btn-primary"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
            </svg>
            Browse Lands
          </a>
          <a
            href="/#inquiry"
            className="btn btn-outline"
            onClick={(e) => handleScroll(e, "inquiry")}
          >
            Inquire Now
          </a>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">200+</span>
            <span className="hero__stat-label">Plots Sold</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">12+</span>
            <span className="hero__stat-label">Locations</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">98%</span>
            <span className="hero__stat-label">Happy Clients</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-dot"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}

export default Hero;
