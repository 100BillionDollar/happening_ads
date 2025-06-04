
// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Aboutbanner from "/public/assets/images/service_banner.jpg";

export default function BlogPost() {
  const [popularPosts] = useState([
    {
      id: 1,
      title: "Elevating Your Brand's Presence: The Haappening Ads Way",
      date: "July 27, 2024",
      image: "/assets/images/service_banner.jpg"
    },
    {
      id: 2,
      title: "A Comprehensive Guide to Micro-Influencer Marketing in 2025",
      date: "December 14, 2024",
      image: "/assets/images/service_banner.jpg"
    }
  ]);

  return (
    <>
     <section className="blog_section">
      <div className="container">
        <div className="row">
          {/* Main Content */}
          <div className="col-lg-8 col-md-12">
            <article className="bg-white rounded-3 shadow-sm p-4 mb-4">
              {/* Article Header */}
              <div className="d-flex align-items-center mb-3 text-muted small">
                <i className="far fa-calendar-alt me-2"></i>
                <span className="me-3">December 27, 2024</span>
                <i className="fas fa-tag me-2"></i>
                <span className="me-3">Technical</span>
                <span className="badge bg-secondary me-2">undefined</span>
                <span className="badge bg-secondary">undefined</span>
              </div>

              {/* Featured Image */}
              <div className="mb-4">
                <img 
                  src="/assets/images/service_banner.jpg" 
                  alt="Team meeting discussing brand strategy"
                  className="img-fluid rounded w-100"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              </div>

              {/* Article Title */}
              <h1 className="h2 fw-600 mb-3">
                Elevating Your Brand's Presence: The Haappening Ads Way
              </h1>

              {/* Subtitle */}
              <p className="lead text-muted mb-4">
                Unlocking Creative Excellence and Strategic Innovation for Unmatched Brand Impact
              </p>

              {/* Enhance Your Brand Section */}
              <div className="mb-4">
                <h3 className="h5 fw-600 mb-3">Enhance Your Brand: Techniques for Better Branding</h3>
                <p className="fst-italic text-muted mb-3">
                  Unlocking Creative Excellence and Strategic Innovation for Unmatched Brand Impact
                </p>
                <p className="mb-3">
                  Creating a powerful and memorable brand is crucial for success in today's harsh business world. It helps 
                  you differentiate your company from the competition and builds a lasting relationship with your target 
                  audience. Improving your brand is more than simply a logo and a memorable tagline; it's a whole 
                  approach that seeps into every facet of your company. In this article, we'll look at practical ways to 
                  improve your brand and leave a lasting impression.
                </p>
              </div>

              {/* The Art of Storytelling */}
              <div className="mb-4">
                <h3 className="h5 fw-600 mb-3">The Art of Storytelling</h3>
                <p className="mb-3">
                  Every brand has an original tale that is just waiting to be told. At Haappening Ads, we create stories your 
                  target audience will find emotionally relatable. Our creative team investigates deep into your company's 
                  purpose, vision, and basic principles to craft compelling stories that capture and engage. Whether it's 
                  through eye-catching imagery, engaging copy, or creative campaigns, we make sure your brand's story 
                  tells a message.
                </p>
                <p className="mb-3">
                  Our Pay-Per-Click (PPC) advertising, social media management, content marketing, and search engine optimisation 
                  (SEO) guarantees that the appropriate audience sees and hears about your company. We strengthen the 
                  relationship between your brand and your audience by utilising digital channels to increase brand 
                  visibility.
                </p>
              </div>

              {/* Enhancing Engagements */}
              <div className="mb-4">
                <h3 className="h5 fw-600 mb-3">Enhancing Engagements</h3>
                <p className="mb-3">
                  At Haappening Ads, our ultimate objective is to improve your brand's visibility in the marketplace. We 
                  recognise that building deep relationships with its intended audience is critical to a successful brand. We 
                  assist your business in standing out from the crowd and leaving a lasting impression with our creative 
                  ideas, data-driven insights, and uncompromising dedication to quality.
                </p>
              </div>

              {/* Conclusion */}
              <div className="mb-4">
                <h3 className="h5 fw-600 mb-3">CONCLUSION</h3>
                <p className="mb-3">
                  Increasing your business's visibility is about being remembered, not simply seen. Your reliable partner, 
                  Haappening Ads, can help you create a brand presence that not only draws attention but also 
                  encourages interaction and loyalty. Your brand will stand out in the competitive market because of our 
                  unique combination of creativity, innovation, and intelligent planning.
                </p>
                <p className="mb-3">
                  Do you have what it takes to advance your brand? Contact Haappening Ads right now, and we'll help you 
                  increase brand awareness like never before.
                </p>
              </div>

              {/* Author Info */}
              <div className="border-top pt-3 mt-4">
                <small className="text-muted">
                  <strong>Author:</strong> undefined undefined
                </small>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4 col-md-12">
            <div className="bg-white rounded-3 shadow-sm p-4">
              {/* Popular Posts Header */}
              <div className="d-flex align-items-center mb-4">
                <div className="bg-warning" style={{ width: '4px', height: '24px', marginRight: '12px' }}></div>
                <h3 className="h5 fw-600 mb-0">Popular post</h3>
              </div>

              {/* Popular Posts List */}
              <div className="popular-posts">
                {popularPosts.map((post, index) => (
                  <div key={post.id} className="d-flex align-items-start mb-3 pb-3 border-bottom">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="rounded me-3 flex-shrink-0"
                      style={{ width: '80px', height: '60px', objectFit: 'cover' }}
                    />
                    <div className="flex-grow-1">
                      <h4 className="h6 mb-2">
                        <a href="#" className="text-decoration-none text-dark fw-semi600">
                          {post.title}
                        </a>
                      </h4>
                      <small className="text-warning">{post.date}</small>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <div className="d-grid mt-4">
                <button className="global_btn">
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
</section>
  
    </>
  );
}