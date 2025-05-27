// components/AboutBanner.js
import Link from 'next/link';
import Image from 'next/image';
import Storeimg from "/public/assets/images/designingimg.jpg";
import Storeimg2 from "/public/assets/images/designingimg2.jpg";

import { useEffect, useState} from 'react';


export default function ServiceDetail() {
  
  return (
    <>
  <section className="light_grey_bg">
        <div className="container">
          {/* Branding Services Section */}
          <div className="heading_box text-center mb-5">
            <h2 className="page_heading text-uppercase" data-aos="fade-up" data-aos-delay="200">Designing
</h2>
            <p className="text-center" data-aos="fade-up" data-aos-delay="400">Great design speaks louder than words. Our creative design services are tailored to reflect your brand's <br></br>distinctive story, engage your target audience, and leave a lasting impression.



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
            <h2>Creative Solutions for Branding</h2>
            <p>At Haappeningads, we offer unique solutions that go beyond aesthetics. Our revolutionary branding strategy lets your company stand out and connect authentically with your target audience. From strategy to design, we create brand experiences that are memorable, impactful, and consistent with your beliefs.</p>
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
            <h2>Stall Designing: Captivating Event Experiences</h2>
            <p>Our stall designs transform ordinary spaces into extraordinary experiences. We create exciting event booths that draw attention. With a perfect combination of creativity and utility, we ensure your brand stands out and makes a lasting impact at every event.

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