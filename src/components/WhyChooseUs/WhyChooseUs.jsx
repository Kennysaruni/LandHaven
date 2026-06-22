import "./WhyChooseUs.css";

const features = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: "Verified Titles",
    description: "Every plot comes with fully verified title deeds and official documentation you can trust."
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: "Prime Locations",
    description: "Strategically located plots in high-growth areas like Ruiru, Narok, and Thika."
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
    title: "Flexible Payments",
    description: "Affordable installment plans tailored to your budget. Start your investment today."
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Expert Support",
    description: "Our dedicated team guides you from inquiry through purchase to title transfer."
  }
];

function WhyChooseUs() {
  return (
    <section className="why-us section" id="why-us">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Why LandHaven</span>
          <h2 className="section-title">Why Clients Choose Us</h2>
          <p className="section-subtitle">
            We make land ownership simple, secure, and accessible for everyone.
          </p>
        </div>

        <div className="why-us__grid">
          {features.map((feature, index) => (
            <div
              className={`why-us__card animate-on-scroll delay-${index + 1}`}
              key={feature.id}
            >
              <div className="why-us__icon">{feature.icon}</div>
              <h3 className="why-us__card-title">{feature.title}</h3>
              <p className="why-us__card-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
