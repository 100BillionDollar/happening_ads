// components/AboutBanner.js
import Link from 'next/link';
import Image from 'next/image';
import Storeimg from "/public/assets/images/eventsimg.jpg";
import Storeimg2 from "/public/assets/images/eventsimg2.jpg";

import { useEffect, useState} from 'react';


export default function ServiceDetail() {
  
  return (
    <>
  <section className="light_grey_bg">
        <div className="container">
          {/* Branding Services Section */}
          <div className="heading_box text-center mb-5">
            <h2 className="page_heading text-uppercase" data-aos="fade-up" data-aos-delay="200">Corporate Activations</h2>
            <p className="text-center" data-aos="fade-up" data-aos-delay="400">We assist you in organising events, campaigns, and activities to promote your brand<br></br> and foster relationships with clients and workers in a corporate context.



</p>
          </div>
          
         
        </div>
      </section>

      </>
  );
}