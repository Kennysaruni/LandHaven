import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Listings from './components/Listings/Listings';
import InquiryForm from './components/InquiryForm/InquiryForm';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import LandsPage from './components/Listings/LandsPage';
import LandDetails from './components/Listings/LandDetails';
import BlogsPage from './components/Blogs/BlogsPage';
import BlogDetails from './components/Blogs/BlogDetails';

function App() {
  const [route, setRoute] = useState(() => {
    const path = window.location.pathname;
    if (path.startsWith('/details/')) {
      return { page: 'details', id: path.replace('/details/', '') };
    } else if (path === '/lands') {
      return { page: 'lands' };
    } else if (path.startsWith('/blogs/')) {
      return { page: 'blog-details', id: path.replace('/blogs/', '') };
    } else if (path === '/blogs') {
      return { page: 'blogs' };
    }
    return { page: 'home' };
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/details/')) {
        setRoute({ page: 'details', id: path.replace('/details/', '') });
      } else if (path === '/lands') {
        setRoute({ page: 'lands' });
      } else if (path.startsWith('/blogs/')) {
        setRoute({ page: 'blog-details', id: path.replace('/blogs/', '') });
      } else if (path === '/blogs') {
        setRoute({ page: 'blogs' });
      } else {
        setRoute({ page: 'home' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Intercept clicks on links globally to prevent page reloads for dynamic SPA transitions
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a');
      if (anchor && anchor.href) {
        const url = new URL(anchor.href);
        if (url.origin === window.location.origin) {
          const path = url.pathname;
          const hash = url.hash;

          // Homepage sections anchor handler
          if (hash) {
            if (path === '/') {
              if (window.location.pathname === '/') {
                e.preventDefault();
                const targetId = hash.replace('#', '');
                const el = document.getElementById(targetId);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', hash);
                }
              } else {
                e.preventDefault();
                window.history.pushState(null, '', `/${hash}`);
                setRoute({ page: 'home' });
                setTimeout(() => {
                  const targetId = hash.replace('#', '');
                  const el = document.getElementById(targetId);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
              return;
            }
          }

          // SPA page changes
          if (
            path === '/' ||
            path === '/lands' ||
            path.startsWith('/details/') ||
            path === '/blogs' ||
            path.startsWith('/blogs/')
          ) {
            e.preventDefault();
            window.history.pushState(null, '', path);
            window.dispatchEvent(new PopStateEvent('popstate'));
          }
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // IntersectionObserver for scroll-triggered animations (runs on route change too)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [route]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navbar currentRoute={route} />
      <main>
        {route.page === 'home' && (
          <>
            <Hero />
            <WhyChooseUs />
            <Listings isPreview={true} />
            <InquiryForm />
          </>
        )}
        {route.page === 'lands' && <LandsPage />}
        {route.page === 'details' && <LandDetails landId={route.id} />}
        {route.page === 'blogs' && <BlogsPage />}
        {route.page === 'blog-details' && <BlogDetails blogId={route.id} />}
      </main>
      <Footer />
      <WhatsAppButton />
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
