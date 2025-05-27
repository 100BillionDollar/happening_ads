// components/AboutBanner.js
import Link from 'next/link';
import Image from 'next/image';
import Storeimg from "/public/assets/images/emailimg.jpg";
import Storeimg2 from "/public/assets/images/emailimg2.jpg";

import { useEffect, useState} from 'react';


export default function ServiceDetail() {
  
  return (
    <>
  <section className="light_grey_bg">
        <div className="container">
          {/* Branding Services Section */}
          <div className="heading_box text-center mb-5">
            <h2 className="page_heading text-uppercase" data-aos="fade-up" data-aos-delay="200">E-Mail Marketing

</h2>
            <p className="text-center" data-aos="fade-up" data-aos-delay="400">Haappeningads provides low-cost e-mail marketing to help grow <br></br>your business and connect with new customers.

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
            <h2>E-mail marketing</h2>
            <p>Our consistent email marketing services help you gain client approval. Expertly crafted emails and automated sales pipeline generation captivate readers' interests and establish a solid foundation for enduring relationships.

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
            <h2>Personalised E-mail marketing</h2>
            <p>We revitalise your email marketing strategy with optimised emails targeting relevant audiences through behavioural segmentation and tracking interests, transaction histories, and preferences. We also engage your customers with promotional messages and solicit their feedback on what they seek.
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