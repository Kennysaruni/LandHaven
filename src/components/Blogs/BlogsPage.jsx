import { useState, useEffect } from "react";
import "./BlogsPage.css";
import { blogs } from "../../data/blogs.js";

function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Reset scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Compute unique categories dynamically from data
  const categoriesList = ["All", ...new Set(blogs.map((blog) => blog.category))];

  // Filter blogs
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.snippet.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="blogs-page section animate-on-scroll visible">
      <div className="container">
        {/* Page Header */}
        <div className="blogs-page__header">
          <span className="section-label">Land & Regulatory Insights</span>
          <h1 className="section-title">Knowledge Hub</h1>
          <p className="section-subtitle">
            Authoritative guides, market analyses, and expert strategies written by senior physical planners and land-use consultants.
          </p>
        </div>

        {/* Filter Panel */}
        <div className="blogs-filters">
          <div className="blogs-filters__search-wrap">
            <svg className="blogs-filters__search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search articles by title, keywords, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="blogs-filters__search-input"
            />
          </div>

          <div className="blogs-filters__categories">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`blogs-filters__cat-btn ${selectedCategory === cat ? "blogs-filters__cat-btn--active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blogs Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="blogs-grid">
            {filteredBlogs.map((blog) => (
              <a
                href={`/blogs/${blog.id}`}
                className="blog-card"
                key={blog.id}
              >
                <div className="blog-card__img-wrap">
                  <img src={blog.imageUrl} alt={blog.title} className="blog-card__img" />
                  <span className="blog-card__category">{blog.category}</span>
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span className="blog-card__meta-item">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {blog.date}
                    </span>
                    <span className="blog-card__meta-item">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className="blog-card__title">{blog.title}</h3>
                  <p className="blog-card__snippet">{blog.snippet}</p>
                  <div className="blog-card__footer">
                    <span className="blog-card__author">By {blog.author}</span>
                    <span className="blog-card__action">
                      Read Article
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
          <div className="blogs-page__empty">
            <div className="blogs-page__empty-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
            <h3>No Articles Found</h3>
            <p>We couldn't find any articles matching your search query or category selection. Try resetting your search filters.</p>
            <button onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }} className="btn btn-primary btn-sm" style={{ marginTop: "16px" }}>
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogsPage;
