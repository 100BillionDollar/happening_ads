// components/AboutBanner.js
import Link from 'next/link';
import Image from 'next/image';
import Storeimg from "/public/assets/images/politicalimg.jpg";
import Storeimg2 from "/public/assets/images/politicalimg2.jpg";

import { useEffect, useState} from 'react';


export default function ServiceDetail() {
  
  return (
    <>
  <section className="light_grey_bg">
        <div className="container">
          {/* Branding Services Section */}
          <div className="heading_box text-center mb-5">
            <h2 className="page_heading text-uppercase" data-aos="fade-up" data-aos-delay="200">Political Events

</h2>
            <p className="text-center" data-aos="fade-up" data-aos-delay="400">Our team provides innovative, reliable conference services, ensuring impactful<br></br> presentations and a full-service approach to leave a lasting impression on your event.
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
            <h2>Drive Influence with Haappeningads Political Events</h2>
            <p>Political events require careful planning, organisation, and marketing to ensure efficient communication, involvement, and impact. At Haappeningads, we understand the significant impact of political events on public opinion and influence, ensuring successful events from strategic planning to efficient communication and involvement.
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
            <h2>Planning and Coordination Strategically</h2>
            <p>A well-run political event requires precise coordination and strategic preparation. Our staff and you will create a detailed plan covering guest management, scheduling, security setup, and venue selection, ensuring a smooth and effective event that fulfils your objectives.
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