import "./Hero.css";

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
      {/* Decorative floating shapes */}
      <div className="hero__shapes">
        <div className="hero__shape hero__shape--1"></div>
        <div className="hero__shape hero__shape--2"></div>
        <div className="hero__shape hero__shape--3"></div>
      </div>

      <div className="hero__content container">
        <div className="hero__grid-layout">
          {/* Left Column: Premium Pitch */}
          <div className="hero__left">
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

          {/* Right Column: Custom Surveying & Plot Vector Grid Animation */}
          <div className="hero__right">
            <div className="hero__animation-container">
              {/* Complex Vector Grid Animation */}
              <svg className="hero__svg-grid" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background Survey Dotted Grid */}
                <g opacity="0.12">
                  <line x1="50" y1="0" x2="50" y2="500" stroke="var(--gold-400)" strokeWidth="1" strokeDasharray="6 6" />
                  <line x1="150" y1="0" x2="150" y2="500" stroke="var(--gold-400)" strokeWidth="1" strokeDasharray="6 6" />
                  <line x1="250" y1="0" x2="250" y2="500" stroke="var(--gold-400)" strokeWidth="1" strokeDasharray="6 6" />
                  <line x1="350" y1="0" x2="350" y2="500" stroke="var(--gold-400)" strokeWidth="1" strokeDasharray="6 6" />
                  <line x1="450" y1="0" x2="450" y2="500" stroke="var(--gold-400)" strokeWidth="1" strokeDasharray="6 6" />
                  <line x1="0" y1="50" x2="500" y2="50" stroke="var(--gold-400)" strokeWidth="1" strokeDasharray="6 6" />
                  <line x1="0" y1="150" x2="500" y2="150" stroke="var(--gold-400)" strokeWidth="1" strokeDasharray="6 6" />
                  <line x1="0" y1="250" x2="500" y2="250" stroke="var(--gold-400)" strokeWidth="1" strokeDasharray="6 6" />
                  <line x1="0" y1="350" x2="500" y2="350" stroke="var(--gold-400)" strokeWidth="1" strokeDasharray="6 6" />
                  <line x1="0" y1="450" x2="500" y2="450" stroke="var(--gold-400)" strokeWidth="1" strokeDasharray="6 6" />
                </g>

                {/* Radar Scanning Rings */}
                <circle cx="250" cy="250" r="210" stroke="url(#emerald-glow)" strokeWidth="1" className="anim-radar-1" opacity="0.3" />
                <circle cx="250" cy="250" r="140" stroke="url(#gold-glow)" strokeWidth="1.5" className="anim-radar-2" opacity="0.4" />
                <circle cx="250" cy="250" r="235" stroke="var(--gold-500)" strokeWidth="1" strokeDasharray="12 24" className="anim-rotate-clockwise" opacity="0.2" />

                {/* Land Parcel Polygon */}
                <path d="M130 190 L300 130 L400 230 L320 390 L170 340 Z" fill="rgba(28, 122, 92, 0.15)" stroke="var(--gold-500)" strokeWidth="2.5" className="anim-polygon" />

                {/* Grid Subdivisions */}
                <line x1="170" y1="340" x2="300" y2="130" stroke="var(--gold-400)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                <line x1="200" y1="230" x2="400" y2="230" stroke="var(--gold-400)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />

                {/* Beacon Points with pulsing coordinates */}
                <g className="anim-pulse-group">
                  <circle cx="130" cy="190" r="6" fill="var(--gold-500)" />
                  <circle cx="130" cy="190" r="15" stroke="var(--gold-400)" strokeWidth="1.5" className="anim-beacon-ring" />
                </g>
                <g className="anim-pulse-group">
                  <circle cx="300" cy="130" r="6" fill="var(--gold-500)" />
                  <circle cx="300" cy="130" r="15" stroke="var(--gold-400)" strokeWidth="1.5" className="anim-beacon-ring" />
                </g>
                <g className="anim-pulse-group">
                  <circle cx="400" cy="230" r="6" fill="var(--gold-500)" />
                  <circle cx="400" cy="230" r="15" stroke="var(--gold-400)" strokeWidth="1.5" className="anim-beacon-ring" />
                </g>
                <g className="anim-pulse-group">
                  <circle cx="320" cy="390" r="6" fill="var(--gold-500)" />
                  <circle cx="320" cy="390" r="15" stroke="var(--gold-400)" strokeWidth="1.5" className="anim-beacon-ring" />
                </g>
                <g className="anim-pulse-group">
                  <circle cx="170" cy="340" r="6" fill="var(--gold-500)" />
                  <circle cx="170" cy="340" r="15" stroke="var(--gold-400)" strokeWidth="1.5" className="anim-beacon-ring" />
                </g>

                {/* Gradients */}
                <defs>
                  <linearGradient id="emerald-glow" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="var(--primary-300)" />
                    <stop offset="100%" stopColor="var(--primary-500)" />
                  </linearGradient>
                  <linearGradient id="gold-glow" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="var(--gold-300)" />
                    <stop offset="100%" stopColor="var(--gold-600)" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Glassmorphic Indicator Tags */}
              <div className="hero__tag tag--gps">
                <span className="tag__dot"></span>
                <span>GPS Verified Coordinates</span>
              </div>
              <div className="hero__tag tag--deed">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--gold-500)" }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Clean Title Deed</span>
              </div>
              <div className="hero__tag tag--survey">
                <span className="tag__dot tag__dot--gold"></span>
                <span>Registry Map 100% Surveyed</span>
              </div>
            </div>
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
