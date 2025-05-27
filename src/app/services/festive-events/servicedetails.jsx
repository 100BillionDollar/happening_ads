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
            <h2 className="page_heading text-uppercase" data-aos="fade-up" data-aos-delay="200">Festive Events</h2>
            <p className="text-center" data-aos="fade-up" data-aos-delay="400">From theme development to stunning décor, our priority is that you celebrate with confidence. <br></br>We leave no stone unturned in delivering the best experience.
</p>
          </div>
          
          <div className="row align-items-center">
            <div className="col-lg-6">
            <div className="service_detail_img">
         <Image className='img-fluid' src={Storeimg} width={1920} height={400}/> 
            </div>
            </div>
             <div className="col-lg-6">
            <div className="service_detail_box">
            <h2>Haappeningads Festival Events: Transform Your Festival Events into Spectacular Experiences</h2>
            <p>Haappeningads focuses on partnering with businesses to create memorable events, capturing the spirit of celebrations like Christmas, Eid, or Diwali, ensuring maximum impact.



</p>
            </div>
            </div>

           

          </div>
        </div>
      </section>

 <section className="digital_section service_secopnd_section">
        <div className="container">
          
          <div className="row align-items-center">
          
             <div className="col-lg-6">
            <div className="service_detail_box">
            <h2>Understanding Your Audience and Crafting Unique Marketing Efforts</h2>
            <p>Our in-depth market research helps us develop unique marketing strategies for your event, highlighting its emotional and cultural elements and creating captivating visuals and engaging content.
</p>

            </div>
            </div>

             <div className="col-lg-6">
            <div className="service_detail_img">
         <Image className='img-fluid' src={Storeimg2} width={1920} height={400}/> 
            </div>
            </div>

          </div>
        </div>
      </section>

      </>
  );
}