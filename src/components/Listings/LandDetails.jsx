import { useEffect, useState } from "react";
import "./LandDetails.css";
import { data } from "../../data/data.js";
import InquiryForm from "../InquiryForm/InquiryForm";

function LandDetails({ landId }) {
  const [listing, setListing] = useState(null);

  useEffect(() => {
    // Reset scroll to top on mount
    window.scrollTo({ top: 0, behavior: "instant" });

    // Fetch listing by ID
    const found = data.find((item) => item.id === parseInt(landId, 10));
    setListing(found || null);
  }, [landId]);

  if (!listing) {
    return (
      <div className="details-not-found container section">
        <h3>Property Not Found</h3>
        <p>We couldn&apos;t locate the property you are looking for. It may have been sold or removed.</p>
        <a href="#lands" className="btn btn-primary btn-sm" style={{ marginTop: "16px" }}>
          Back to Listings
        </a>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-KE").format(price);
  };

  // Pre-fill parameters for WhatsApp and email links
  const contactPhone = "254723597959";
  const whatsappMsg = encodeURIComponent(
    `Hello Jermaine Technologies Entreprises! I am interested in purchasing property reference #${listing.number}: "${listing.title}" located in ${listing.location} for KES ${formatPrice(listing.price)}. Please share more details.`
  );
  const whatsappUrl = `https://wa.me/${contactPhone}?text=${whatsappMsg}`;

  const emailSubject = encodeURIComponent(`Inquiry on Jermaine Technologies Entreprises Listing #${listing.number}`);
  const emailBody = encodeURIComponent(
    `Hello,\n\nI am writing to inquire about the property: "${listing.title}" (Ref Code: #${listing.number}).\n\nLocation: ${listing.location}\nPrice: KES ${formatPrice(listing.price)}\n\nPlease provide me with information on how to proceed with a site visit.\n\nThank you.`
  );
  const emailUrl = `mailto:info@jermainetechnologies.co.ke?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="land-details section">
      <div className="container">
        {/* Navigation Breadcrumbs */}
        <div className="details-breadcrumbs">
          <a href="/">Home</a>
          <span className="details-breadcrumbs__separator">/</span>
          <a href="/lands">Properties</a>
          <span className="details-breadcrumbs__separator">/</span>
          <span className="details-breadcrumbs__current">{listing.title}</span>
        </div>

        {/* Property Title & Pricing Hero Panel */}
        <div className="details-header">
          <div className="details-header__title-block">
            <span className="details-header__status-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              Verified Title Deed
            </span>
            <h1 className="details-header__title">{listing.title}</h1>
            <p className="details-header__location">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {listing.location}
            </p>
          </div>
          <div className="details-header__price-block">
            <span className="details-header__price-label">Asking Price</span>
            <h2 className="details-header__price">KES {formatPrice(listing.price)}</h2>
          </div>
        </div>

        {/* Grid Layout: Details on Left, Sticky Contacts on Right */}
        <div className="details-grid">
          <div className="details-grid__main">
            {/* Cover Image */}
            <div className="details-gallery">
              <img src={listing.imageUrl} alt={listing.title} className="details-gallery__cover" />
            </div>

            {/* Description Card */}
            <div className="details-card">
              <h3 className="details-card__title">Property Description</h3>
              <p className="details-card__desc">
                This prime parcel of land is located in the high-growth area of {listing.location.split(",")[0].trim()}. 
                Measuring approximately {listing.area} Hectares, the property is ideal for immediate development, residential houses, or long-term investment.
              </p>
              <p className="details-card__desc">
                The property is adjacent to essential public utilities, has access to well-maintained access roads, clean water connection, and power lines. 
                All legal checks have been conducted by Jermaine Technologies Entreprises, ensuring the title is clean, unencumbered, and ready for immediate registry transfer to the buyer.
              </p>
            </div>

            {/* Specifications Card */}
            <div className="details-card">
              <h3 className="details-card__title">Land Specifications</h3>
              <div className="specs-table">
                <div className="specs-table__row">
                  <span className="specs-table__label">Plot Reference Code</span>
                  <span className="specs-table__value font-mono">#{listing.number}</span>
                </div>
                <div className="specs-table__row">
                  <span className="specs-table__label">Registered Land Area</span>
                  <span className="specs-table__value">{listing.area} Hectares (Ha)</span>
                </div>
                <div className="specs-table__row">
                  <span className="specs-table__label">Registry Map Sheet No.</span>
                  <span className="specs-table__value">{listing.registryMapSheetNumber}</span>
                </div>
                <div className="specs-table__row">
                  <span className="specs-table__label">Registered Owner</span>
                  <span className="specs-table__value">{listing.ownerName}</span>
                </div>
                <div className="specs-table__row">
                  <span className="specs-table__label">Zoning Status</span>
                  <span className="specs-table__value">Residential / Commercial</span>
                </div>
              </div>
            </div>

            {/* Security checklist block */}
            <div className="details-card safety-card">
              <h4 className="safety-card__title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                Jermaine Technologies Entreprises Purchasing Guarantees
              </h4>
              <ul className="safety-card__list">
                <li><strong>Title Verification:</strong> Land registry search cert is updated and available upon request.</li>
                <li><strong>Beacon Surveying:</strong> Boundary verification completed by certified surveyors.</li>
                <li><strong>Safe Escrow Payment:</strong> Payment terms structured through verified bank bank-guarantees or legal representation.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar Area: Contact Channels */}
          <div className="details-grid__sidebar">
            <div className="sticky-sidebar">
              <div className="contact-box">
                <h3 className="contact-box__title">Interested in this Plot?</h3>
                <p className="contact-box__subtitle">Get in touch directly with our registered agent for a site visit.</p>

                {/* Direct Action triggers */}
                <div className="contact-actions">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-contact btn-contact--whatsapp">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                  
                  <a href="tel:+254723597959" className="btn-contact btn-contact--phone">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    Call Agent (+254 723 597 959)
                  </a>

                  <a href={emailUrl} className="btn-contact btn-contact--email">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    Send Email Inquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inline Inquiry Form Card */}
        <div className="details-inquiry-section" id="details-inquiry-box">
          <InquiryForm prefilledLand={listing.title} minimal={true} />
        </div>
      </div>
    </div>
  );
}

export default LandDetails;
