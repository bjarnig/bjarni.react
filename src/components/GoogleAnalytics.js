import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics 4 tracking
const GA_TRACKING_ID = 'G-Q8WVTHJQ71'; // Bjarni Gunnarsson Portfolio

// Initialize Google Analytics
const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    return;
  }

  // Load Google Analytics script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script1);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: path,
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

function GoogleAnalytics() {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    initGA();
    trackPageView(location.pathname);
  }, []);

  useEffect(() => {
    if (location.pathname !== prevPathRef.current) {
      trackPageView(location.pathname);
      prevPathRef.current = location.pathname;
    }
  }, [location.pathname]);

  return null;
}

export default GoogleAnalytics;
