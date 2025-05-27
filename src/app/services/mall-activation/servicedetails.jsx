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
            <h2 className="page_heading text-uppercase" data-aos="fade-up" data-aos-delay="200">Mall Activation</h2>
            <p className="text-center" data-aos="fade-up" data-aos-delay="400">Mall activations are tailored to optimise the impact of BTL marketing initiatives, prioritising direct customer involvement above mass media advertising. <br></br>This approach allows marketers to assess responses immediately and alter strategy in real-time, increasing engagement and effectiveness.


</p>
          </div>
          
         
        </div>
      </section>

      </>
  );
}