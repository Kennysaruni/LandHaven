import { useState, useEffect } from "react";
import "./LandsPage.css";
import { data } from "../../data/data.js";

function LandsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // Reset scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Compute unique locations dynamically from data
  const locationsList = ["All", ...new Set(data.map((item) => item.location.split(",")[0].trim()))];

  // Filter listings
  const filteredListings = data.filter((listing) => {
    // Search text filter
    const matchesSearch =
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchTerm.toLowerCase());

    // Location filter
    const matchesLocation =
      selectedLocation === "All" ||
      listing.location.split(",")[0].trim() === selectedLocation;

    // Price filter
    const matchesMinPrice = minPrice === "" || listing.price >= parseFloat(minPrice);
    const matchesMaxPrice = maxPrice === "" || listing.price <= parseFloat(maxPrice);

    // Area filter
    const matchesMinArea = minArea === "" || listing.area >= parseFloat(minArea);
    const matchesMaxArea = maxArea === "" || listing.area <= parseFloat(maxArea);

    return matchesSearch && matchesLocation && matchesMinPrice && matchesMaxPrice && matchesMinArea && matchesMaxArea;
  });

  // Sort listings
  const sortedListings = [...filteredListings].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "area-desc") return b.area - a.area;
    if (sortBy === "area-asc") return a.area - b.area;
    return 0; // Default
  });

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedLocation("All");
    setMinPrice("");
    setMaxPrice("");
    setMinArea("");
    setMaxArea("");
    setSortBy("default");
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-KE").format(price);
  };

  return (
    <section className="lands-page section">
      <div className="container">
        {/* Page Header */}
        <div className="lands-page__header">
          <span className="section-label">Verify & Buy</span>
          <h1 className="section-title">All Available Land Plots</h1>
          <p className="section-subtitle">
            Search and filter through our selection of fully verified, clean title land properties.
          </p>
        </div>

        {/* Search & Filters Container */}
        <div className="filters-panel">
          {/* Main Search Bar */}
          <div className="filters-panel__row">
            <div className="filters-panel__search-wrap">
              <svg className="filters-panel__search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search by title, location, owner, or plot code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="filters-panel__search-input"
              />
            </div>
            <div className="filters-panel__sort-wrap">
              <label htmlFor="sort-by" className="filters-panel__label">Sort By</label>
              <select
                id="sort-by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="filters-panel__select"
              >
                <option value="default">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="area-desc">Size: Largest First</option>
                <option value="area-asc">Size: Smallest First</option>
              </select>
            </div>
          </div>

          {/* Advanced Multi-Input Row */}
          <div className="filters-panel__grid">
            {/* Location Tabs */}
            <div className="filters-panel__group">
              <span className="filters-panel__label">Location</span>
              <div className="filters-panel__location-buttons">
                {locationsList.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setSelectedLocation(loc)}
                    className={`filters-panel__loc-btn ${selectedLocation === loc ? "filters-panel__loc-btn--active" : ""}`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Limits */}
            <div className="filters-panel__group">
              <span className="filters-panel__label">Price Range (KES)</span>
              <div className="filters-panel__range">
                <input
                  type="number"
                  placeholder="Min Price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="filters-panel__range-input"
                />
                <span className="filters-panel__range-to">to</span>
                <input
                  type="number"
                  placeholder="Max Price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="filters-panel__range-input"
                />
              </div>
            </div>

            {/* Area Limits */}
            <div className="filters-panel__group">
              <span className="filters-panel__label">Plot Size (Hectares)</span>
              <div className="filters-panel__range">
                <input
                  type="number"
                  step="0.01"
                  placeholder="Min Size"
                  value={minArea}
                  onChange={(e) => setMinArea(e.target.value)}
                  className="filters-panel__range-input"
                />
                <span className="filters-panel__range-to">to</span>
                <input
                  type="number"
                  step="0.01"
                  placeholder="Max Size"
                  value={maxArea}
                  onChange={(e) => setMaxArea(e.target.value)}
                  className="filters-panel__range-input"
                />
              </div>
            </div>
          </div>

          {/* Active Filters Summary & Reset */}
          {(searchTerm || selectedLocation !== "All" || minPrice || maxPrice || minArea || maxArea || sortBy !== "default") && (
            <div className="filters-panel__footer">
              <span className="filters-panel__results-count">
                Found {sortedListings.length} matching {sortedListings.length === 1 ? "property" : "properties"}
              </span>
              <button onClick={handleResetFilters} className="filters-panel__reset-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 4v6h-6M1 20v-6h6"></path>
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                </svg>
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* Listings Grid */}
        {sortedListings.length > 0 ? (
          <div className="lands-page__grid">
            {sortedListings.map((listing) => (
              <a
                href={`/details/${listing.id}`}
                className="lands-card"
                key={listing.id}
              >
                <div className="lands-card__img-wrap">
                  <img src={listing.imageUrl} alt={listing.title} className="lands-card__img" />
                  <span className="lands-card__badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3" fill="white"/>
                    </svg>
                    {listing.location}
                  </span>
                  <div className="lands-card__deed-tag">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Verified Title
                  </div>
                </div>
                <div className="lands-card__body">
                  <h3 className="lands-card__title">{listing.title}</h3>
                  <div className="lands-card__details">
                    <span className="lands-card__detail-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <path d="M3 9h18M9 3v18"/>
                      </svg>
                      {listing.area} Ha
                    </span>
                    <span className="lands-card__ref-code">Ref: #{listing.number}</span>
                  </div>
                  <div className="lands-card__footer">
                    <span className="lands-card__price">KES {formatPrice(listing.price)}</span>
                    <span className="lands-card__action-btn">
                      View Details
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="lands-page__empty">
            <div className="lands-page__empty-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
            <h3>No Lands Found</h3>
            <p>No listings matched your active filter settings. Try adjusting your price ranges or search text.</p>
            <button onClick={handleResetFilters} className="btn btn-primary btn-sm" style={{ marginTop: "16px" }}>
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default LandsPage;
