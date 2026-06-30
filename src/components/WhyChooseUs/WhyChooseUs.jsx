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
    title: "Land Amalgamation",
    description: "Consolidating adjacent land parcels into a single title deed under the Land Registration Act of Kenya."
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: "Land Subdivision",
    description: "Partitioning large acreage into individual plots, processing mutations, and securing new title deeds."
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
    title: "Physical & Land Use Planning",
    description: "Zoning amendments, NEMA approvals, and Change of User applications (e.g., Agricultural to Residential) under the Physical and Land Use Planning Act."
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
    title: "Ministry of Lands Consulting",
    description: "Conducting official registry searches, boundary beacon mapping, and navigating Ministry of Lands registry procedures."
  }
];

function WhyChooseUs() {
  return (
    <section className="why-us section" id="why-us">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Services & Expertise</span>
          <h2 className="section-title">Our Consulting Services</h2>
          <p className="section-subtitle">
            Jermaine Technologies Entreprises delivers professional engineering, surveying, and land administration solutions.
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
