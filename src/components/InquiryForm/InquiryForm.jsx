import { useState, useEffect } from "react";
import "./InquiryForm.css";
import { data } from "../../data/data.js";

function InquiryForm({ prefilledLand = "", minimal = false }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    landInterest: prefilledLand,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (prefilledLand) {
      setFormData((prev) => ({ ...prev, landInterest: prefilledLand }));
    }
  }, [prefilledLand]);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d+\s()-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ fullName: "", phone: "", email: "", landInterest: prefilledLand, message: "" });
    setSubmitted(false);
    setErrors({});
  };

  const renderFormContent = () => (
    <>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="inquiry__form" noValidate>
          <div className="inquiry__field">
            <label htmlFor="inquiry-name" className="inquiry__label">Full Name *</label>
            <input
              id="inquiry-name"
              type="text"
              name="fullName"
              className={`inquiry__input ${errors.fullName ? "inquiry__input--error" : ""}`}
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <span className="inquiry__error">{errors.fullName}</span>}
          </div>

          <div className="inquiry__row">
            <div className="inquiry__field">
              <label htmlFor="inquiry-phone" className="inquiry__label">Phone Number *</label>
              <input
                id="inquiry-phone"
                type="tel"
                name="phone"
                className={`inquiry__input ${errors.phone ? "inquiry__input--error" : ""}`}
                placeholder="+254 723 597 959"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="inquiry__error">{errors.phone}</span>}
            </div>
            <div className="inquiry__field">
              <label htmlFor="inquiry-email" className="inquiry__label">Email Address</label>
              <input
                id="inquiry-email"
                type="email"
                name="email"
                className={`inquiry__input ${errors.email ? "inquiry__input--error" : ""}`}
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="inquiry__error">{errors.email}</span>}
            </div>
          </div>

          <div className="inquiry__field">
            <label htmlFor="inquiry-land" className="inquiry__label">Land of Interest</label>
            <select
              id="inquiry-land"
              name="landInterest"
              className="inquiry__input inquiry__select"
              value={formData.landInterest}
              onChange={handleChange}
            >
              <option value="">Select a property (optional)</option>
              {data.map((item) => (
                <option key={item.id} value={item.title}>
                  {item.title} — KES {new Intl.NumberFormat("en-KE").format(item.price)}
                </option>
              ))}
            </select>
          </div>

          <div className="inquiry__field">
            <label htmlFor="inquiry-message" className="inquiry__label">Message *</label>
            <textarea
              id="inquiry-message"
              name="message"
              className={`inquiry__input inquiry__textarea ${errors.message ? "inquiry__input--error" : ""}`}
              placeholder="I'm interested in buying land for..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="inquiry__error">{errors.message}</span>}
          </div>

          <button type="submit" className="btn btn-primary inquiry__submit">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Send Inquiry
          </button>
        </form>
      ) : (
        <div className="inquiry__success">
          <div className="inquiry__success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h3>Inquiry Sent!</h3>
          <p>Thank you for your interest. Our team will contact you within 24 hours.</p>
          <button className="btn btn-primary btn-sm" onClick={handleReset}>
            Send Another Inquiry
          </button>
        </div>
      )}
    </>
  );

  if (minimal) {
    return (
      <div className="inquiry__form-card" style={{ border: "1px solid var(--neutral-200)", boxShadow: "var(--shadow-md)" }}>
        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem", fontWeight: "800", color: "var(--primary-700)", marginBottom: "20px", borderBottom: "1px solid var(--neutral-100)", paddingBottom: "12px" }}>
          Inquire About This Property
        </h3>
        {renderFormContent()}
      </div>
    );
  }

  return (
    <section className="inquiry section" id="inquiry">
      <div className="inquiry__bg-shapes">
        <div className="inquiry__bg-shape inquiry__bg-shape--1"></div>
        <div className="inquiry__bg-shape inquiry__bg-shape--2"></div>
      </div>

      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Inquire About a Property</h2>
          <p className="section-subtitle">
            Fill out the form and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="inquiry__wrapper animate-on-scroll">
          {/* Form */}
          <div className="inquiry__form-card">
            {renderFormContent()}
          </div>

          {/* Contact Info Sidebar */}
          <div className="inquiry__info">
            <div className="inquiry__info-card">
              <div className="inquiry__info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="inquiry__info-content">
                <h4>Phone</h4>
                <p>+254 723 597 959</p>
              </div>
            </div>

            <div className="inquiry__info-card">
              <div className="inquiry__info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="inquiry__info-content">
                <h4>Email</h4>
                <p>saruni2003@gmail.com</p>
              </div>
            </div>

            <div className="inquiry__info-card">
              <div className="inquiry__info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="inquiry__info-content">
                <h4>Office</h4>
                <p>Nairobi, Kenya</p>
              </div>
            </div>

            <div className="inquiry__info-card">
              <div className="inquiry__info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="inquiry__info-content">
                <h4>Working Hours</h4>
                <p>Mon - Sat: 8AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InquiryForm;
