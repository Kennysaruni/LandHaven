import { useEffect, useState } from "react";
import "./BlogDetails.css";
import { blogs } from "../../data/blogs.js";
import InquiryForm from "../InquiryForm/InquiryForm";

function BlogDetails({ blogId }) {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Reset scroll to top on mount
    window.scrollTo({ top: 0, behavior: "instant" });

    // Fetch blog by ID
    const found = blogs.find((item) => item.id === blogId);
    setBlog(found || null);
  }, [blogId]);

  if (!blog) {
    return (
      <div className="blog-details-not-found container section">
        <h3>Article Not Found</h3>
        <p>We couldn&apos;t locate the blog post you are looking for. It may have been archived or deleted.</p>
        <a href="/blogs" className="btn btn-primary btn-sm" style={{ marginTop: "16px" }}>
          Back to Knowledge Hub
        </a>
      </div>
    );
  }

  // Pre-fill parameters for WhatsApp and email links
  const contactPhone = "254723597959";
  const whatsappMsg = encodeURIComponent(
    `Hello LandHaven! I read your article "${blog.title}" and would like to inquire about booking a site feasibility and land-use consultation.`
  );
  const whatsappUrl = `https://wa.me/${contactPhone}?text=${whatsappMsg}`;

  const emailSubject = encodeURIComponent(`Consultation Inquiry: ${blog.title}`);
  const emailBody = encodeURIComponent(
    `Hello LandHaven Team,\n\nI read your article "${blog.title}" and am interested in your land-use consulting services. I would like to schedule a feasibility assessment.\n\nThank you.`
  );
  const emailUrl = `mailto:info@jermainetechnologies.co.ke?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="blog-details section animate-on-scroll visible">
      <div className="container">
        {/* Navigation Breadcrumbs */}
        <div className="blog-details__breadcrumbs">
          <a href="/">Home</a>
          <span className="blog-details__separator">/</span>
          <a href="/blogs">Knowledge Hub</a>
          <span className="blog-details__separator">/</span>
          <span className="blog-details__current">{blog.title}</span>
        </div>

        {/* Blog Header */}
        <div className="blog-details__header">
          <span className="blog-details__category-badge">{blog.category}</span>
          <h1 className="blog-details__title">{blog.title}</h1>
          
          <div className="blog-details__meta">
            <div className="blog-details__author-block">
              <span className="blog-details__author-avatar">
                {blog.author.split(" ").map(n => n[0]).join("")}
              </span>
              <div>
                <span className="blog-details__author-name">{blog.author}</span>
                <span className="blog-details__author-role">Senior Planning Consultant</span>
              </div>
            </div>
            <div className="blog-details__meta-info">
              <span>{blog.date}</span>
              <span className="blog-details__meta-dot">•</span>
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>

        {/* Grid Layout: Article on Left, Sidebar on Right */}
        <div className="blog-details__grid">
          <article className="blog-details__main">
            {/* Cover Image */}
            <div className="blog-details__cover-wrap">
              <img src={blog.imageUrl} alt={blog.title} className="blog-details__cover" />
            </div>

            {/* Render Structured Content */}
            <div className="blog-details__content">
              {blog.content.map((block, idx) => {
                if (block.type === "paragraph") {
                  return <p key={idx} className="blog-para">{block.text}</p>;
                }
                if (block.type === "heading-2") {
                  return <h2 key={idx} className="blog-heading-2">{block.text}</h2>;
                }
                if (block.type === "list") {
                  return (
                    <ul key={idx} className="blog-list">
                      {block.items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>

            {/* Custom CTA Box at the end of the post */}
            <div className="blog-details__author-cta">
              <h3>Need Expert Land Use Consulting?</h3>
              <p>
                Navigating zoning, physical planning acts, NEMA permits, and county approvals is highly technical. 
                Our team handles everything from initial feasibility surveys to final development clearances, protecting your capital and timeline.
              </p>
              <div className="blog-details__cta-buttons">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Consult via WhatsApp
                </a>
                <a href="#details-inquiry-box" className="btn btn-secondary">
                  Send Inquiry Form
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="blog-details__sidebar">
            <div className="blog-details__sticky-sidebar">
              {/* Back button */}
              <a href="/blogs" className="blog-details__back-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Back to Knowledge Hub
              </a>

              {/* Consultation Box */}
              <div className="blog-consult-box">
                <h3 className="blog-consult-box__title">Feasibility Assessment</h3>
                <p className="blog-consult-box__subtitle">
                  Speak directly with our senior physical planners to review your project zoning, boundary index map, or subdivision plans.
                </p>
                <div className="blog-consult-box__actions">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="blog-consult-btn blog-consult-btn--whatsapp">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                  <a href={emailUrl} className="blog-consult-btn blog-consult-btn--email">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="14" height="14">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    Send Email Inquiry
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Inquiry Form */}
        <div className="blog-details__inquiry" id="details-inquiry-box">
          <InquiryForm prefilledLand={blog.title} minimal={true} />
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
