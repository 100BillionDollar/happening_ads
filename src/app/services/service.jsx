import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Service Card Component
const ServiceCard = ({ title, imageSrc, altText, url }) => {
  // Ensure we always have a valid URL, defaulting to '#' if not provided
  const linkUrl = url || '#';
  
  return (
    <div className="col-md-4 p-4 pt-0 pb-2 service_cntr">
      <div className="service_box h-100 border-0 text-center">
        <Link href={linkUrl}>
          <div className="service_inner_box overflow-hidden position-relative p-0">
            <Image 
              src={imageSrc} 
              alt={altText}
              width={450}
              height={450}
              className="img-fluid"
            />
            <div className="service_hover_box">
              <div className="service_caption">
                <h5 className="card-title" data-aos="fade-up" data-aos-delay="400">{title}</h5>
                <Link href={linkUrl} className="btn btn-link text-white" data-aos="fade-up" data-aos-delay="600">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

// Main Services Page Component
export default function ServicePage() {
  // Branding Services
  const brandingServices = [
    {
      id: 'store-design',
      title: 'Store Design',
      imageSrc: '/assets/images/store-design.jpg',
      altText: 'Store Design',
      url: '/services/store-design'
    },
    {
      id: 'printing-specialist',
      title: 'Printing Specialist',
      imageSrc: '/assets/images/printing.jpg',
      altText: 'Printing Specialist',
      url: '/services/printing-specialist'
    },
    {
      id: 'designing',
      title: 'Designing',
      imageSrc: '/assets/images/designing.jpeg',
      altText: 'Designing',
      url: '/services/designing'
    }
  ];

  // Digital Services
  const digitalServices = [
    {
      id: 'google-ads',
      title: 'GOOGLE ADS / SEO',
      imageSrc: '/assets/images/ads.jpg',
      altText: 'Robot hand and human hand on laptop',
      url: '/services/google-ads'
    },
    {
      id: 'content-marketing',
      title: 'Content Marketing',
      imageSrc: '/assets/images/content.jpg',
      altText: 'Man climbing steps with light bulb',
      url: '/services/content-marketing'
    },
    {
      id: 'email-marketing',
      title: 'E-Mail Marketing',
      imageSrc: '/assets/images/email-marketing.jpg',
      altText: 'E-Mail Marketing',
      url: '/email-marketing'
    },
  ];

  const eventServices = [
    {
      id: 'politicals',
      title: 'Political Events',
      imageSrc: '/assets/images/political.jpg',
      altText: 'Political Events',
      url: '/services/political-events'
    },
    {
      id: 'meetings',
      title: 'Meetings',
      imageSrc: '/assets/images/meetings.png',
      altText: 'Meetings',
      url: '/services/meetings'
    },
    {
      id: 'festive-events',
      title: 'Festive Events',
      imageSrc: '/assets/images/festive.jpg',
      altText: 'Festive Events',
      url: '/services/festive-events'
    }
  ];

  const experentialServices = [
    {
      id: 'experiential-festive-events',
      title: 'In/Out Shop Activation',
      imageSrc: '/assets/images/shop.jpg',
      altText: 'Festive Events',
      url: '/services/in-out-shop-activation'
    },
    {
      id: 'mall-activation',
      title: 'Mall Activation',
      imageSrc: '/assets/images/mall-activation.jpg',
      altText: 'Mall Activation',
      url: '/services/mall-activation'
    },
    {
      id: 'corporate-activation',
      title: 'Corporate Activations',
      imageSrc: '/assets/images/corporate-activation.jpg',
      altText: 'Corporate Activations',
      url: '/services/corporate-activation'
    }
  ];

  return (
    <>
      <section className="light_grey_bg mb-5 pb-2" id="middlecontent">
        <div className="container">
          {/* Branding Services Section */}
          <div className="heading_box text-center mb-5">
            <h2 className="page_heading text-uppercase" data-aos="fade-up" data-aos-delay="200">BRANDING SERVICES</h2>
            <p className="text-center" data-aos="fade-up" data-aos-delay="400">Define Your Brand Story in Style!</p>
          </div>
          
          <div className="row justify-content-center">
            {brandingServices.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                imageSrc={service.imageSrc}
                altText={service.altText}
                url={service.url}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Digital Services Section */}
      <section className="digital_section pt-2 pb-3">
        <div className="container">
          <div className="heading_box text-center mb-5">
            <h2 className="page_heading text-uppercase" data-aos="fade-up" data-aos-delay="400">DIGITAL SERVICES</h2>
            <p className="text-center" data-aos="fade-up" data-aos-delay="600">Let's Rock The Digital World, Together!</p>
          </div>
          
          <div className="row">
            {digitalServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                imageSrc={service.imageSrc}
                altText={service.altText}
                url={service.url}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="light_grey_bg mb-5 pb-2">
        <div className="container">
          {/* Event Services Section */}
          <div className="heading_box text-center mb-5">
            <h2 className="page_heading text-uppercase" data-aos="fade-up" data-aos-delay="200">EVENT SERVICES</h2>
            <p className="text-center" data-aos="fade-up" data-aos-delay="400">Define Your Brand Story in Style!</p>
          </div>
          
          <div className="row justify-content-center">
            {eventServices.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                imageSrc={service.imageSrc}
                altText={service.altText}
                url={service.url}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="digital_section pt-2 pb-3">
        <div className="container">
          <div className="heading_box text-center mb-5">
            <h2 className="page_heading text-uppercase" data-aos="fade-up" data-aos-delay="400">Experiential Marketing</h2>
            <p className="text-center" data-aos="fade-up" data-aos-delay="600">Let's Rock The Digital World, Together!</p>
          </div>
          
          <div className="row">
            {experentialServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                imageSrc={service.imageSrc}
                altText={service.altText}
                url={service.url}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}