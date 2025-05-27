"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBehance, 
  faFacebook, 
  faInstagram, 
  faLinkedin, 
  faXTwitter, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Check scroll position to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to top with smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <div className="container">
        {/* Links Section */}
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 mb-4 mb-md-0">
            <div className="footer_logo">
              <Image src={logo} alt="Logo" width={180} height={32} />
              <p className="text-start mt-4">We are not only storytellers but also story builders. Our work with creativity goes beyond the transaction; we enliven the essence of advertising.

</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 mb-4 mb-md-0 pd_left">
            <h5 className="footer_headinmg mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="#" className="text-decoration-none">About</Link></li>
              <li className="mb-2"><Link href="#" className="text-decoration-none">Services</Link></li>
              <li className="mb-2"><Link href="#" className="text-decoration-none">Portfolio</Link></li>
              <li className="mb-2"><Link href="#" className="text-decoration-none">Career</Link></li>
              <li className="mb-2"><Link href="#" className="text-decoration-none">Contact</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <h5 className="footer_headinmg mb-3">Get in Touch</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="tel:+919999453999" className="text-decoration-none">+91 9999453999</a></li>
              <li className="mb-2"><a href="mailto:Info@happeningads.com" className="text-decoration-none">Info@happeningads.com</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none">K-20, Sector 18, Noida-201301 (U.P)</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-12 col-6">
            <div className="social_box">
              <h5 className="footer_headinmg mb-3">Follow us on</h5>
              <div className="d-flex social_icon gap-3 mt-2">
                <a href="https://www.instagram.com/haappeningads/" target="_blank" className="me-3"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.facebook.com/haappeningads/" target="_blank" className="me-3"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://www.facebook.com/haappeningads/" target="_blank" className="me-3"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://x.com/haappeningads" target="_blank" className="me-3"><FontAwesomeIcon icon={faXTwitter} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <div
        className={`scroll-to-top ${showScrollTop ? 'show' : ''}`}
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </div>

      {/* CSS for scroll-to-top button */}
      <style jsx>{`
        .scroll-to-top {
          position: fixed;
          bottom: 20px;
          right: 15px;
          width: 40px;
          height: 40px;
          background-color: #333;
          color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 999;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .scroll-to-top.show {
          opacity: 1;
          visibility: visible;
        }

        .scroll-to-top:hover {
          background-color: #555;
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;