import { useState } from "react";
import "./Listings.css";
import { data } from "../../data/data.js";

function Listings({ isPreview = false }) {
  const [activeFilter, setActiveFilter] = useState("All");

  // Dynamically compute locations from data
  const locations = ["All", ...new Set(data.map((listing) => listing.location.split(",")[0].trim()))];

  const filteredListings = activeFilter === "All"
    ? data
    : data.filter((listing) => listing.location.split(",")[0].trim() === activeFilter);

  // Show only 6 elements in preview mode
  const displayListings = isPreview ? filteredListings.slice(0, 6) : filteredListings;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-KE").format(price);
  };

  return (
    <section className="listings section" id="listings">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Available Properties</span>
          <h2 className="section-title">Browse Our Land Listings</h2>
          <p className="section-subtitle">
            Explore our collection of verified, prime land across Kenya.
          </p>
        </div>

        {/* Filter Tabs (Hidden in home-page preview mode to keep hero/listings flow clean) */}
        {!isPreview && (
          <div className="listings__filters animate-on-scroll">
            {locations.map((loc) => (
              <button
                key={loc}
                className={`listings__filter ${activeFilter === loc ? "listings__filter--active" : ""}`}
                onClick={() => setActiveFilter(loc)}
              >
                {loc}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <div className="listings__grid">
          {displayListings.map((listing, index) => (
            <a
              href={`/details/${listing.id}`}
              className={`listings__card animate-on-scroll delay-${(index % 6) + 1}`}
              key={listing.id}
            >
              <div className="listings__card-img-wrap">
                <img src={listing.imageUrl} alt={listing.title} className="listings__card-img" />
                <span className="listings__card-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3" fill="white"/>
                  </svg>
                  {listing.location}
                </span>
                <div className="listings__card-deed-badge">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Verified Title
                </div>
              </div>
              <div className="listings__card-body">
                <h3 className="listings__card-title">{listing.title}</h3>
                <div className="listings__card-details">
                  <span className="listings__card-area">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <path d="M3 9h18M9 3v18"/>
                    </svg>
                    {listing.area} Ha
                  </span>
                  <span className="listings__card-ref">#{listing.number}</span>
                </div>
                <div className="listings__card-footer">
                  <span className="listings__card-price">KES {formatPrice(listing.price)}</span>
                  <span className="listings__card-btn">
                    View Details
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {displayListings.length === 0 && (
          <div className="listings__empty">
            <p>No listings found for this location.</p>
          </div>
        )}

        {/* See More button for preview mode */}
        {isPreview && (
          <div className="listings__more animate-on-scroll" style={{ textAlign: "center", marginTop: "48px" }}>
            <a href="/lands" className="btn btn-primary">
              See More Properties
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "6px" }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default Listings;
