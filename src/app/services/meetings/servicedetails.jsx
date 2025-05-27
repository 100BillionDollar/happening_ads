// components/AboutBanner.js
import Link from 'next/link';
import Image from 'next/image';
import Storeimg from "/public/assets/images/meetingsimg.jpeg";
import Storeimg2 from "/public/assets/images/meetingsimg2.jpeg";

import { useEffect, useState} from 'react';


export default function ServiceDetail() {
  
  return (
    <>
  <section className="light_grey_bg">
        <div className="container">
          {/* Branding Services Section */}
          <div className="heading_box text-center mb-5">
            <h2 className="page_heading text-uppercase" data-aos="fade-up" data-aos-delay="200">Meetings</h2>
            <p className="text-center" data-aos="fade-up" data-aos-delay="400">Meetings are organised gatherings for discussing, planning, and deciding on issues.<br></br> Haappeningads transforms them into memorable events, facilitating meaningful<br></br> conversations and strategic decision-making.
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
            <h2>Simplified Techniques for Organising Meetings</h2>
            <p>Our comprehensive meeting management services streamline every aspect of the event, from audiovisual support to venue selection, allowing you to focus on the content.

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