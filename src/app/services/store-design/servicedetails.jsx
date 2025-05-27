// components/AboutBanner.js
import Link from 'next/link';
import Image from 'next/image';
import Storeimg from "/public/assets/images/storeimg.jpg";
import Storeimg2 from "/public/assets/images/storeimg2.jpg";

import { useEffect, useState} from 'react';


export default function ServiceDetail() {
  
  return (
    <>
  <section className="light_grey_bg">
        <div className="container">
          {/* Branding Services Section */}
          <div className="heading_box text-center mb-5">
            <h2 className="page_heading text-uppercase" data-aos="fade-up" data-aos-delay="200">Store Design</h2>
            <p className="text-center" data-aos="fade-up" data-aos-delay="400">Transforming ordinary brands with impactful marketing strategies fosters meaningful interactions, enhances brand awareness, and logically drives sales toward primary goals.
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
            <h2>Creating Impactful<br></br> Retail Experience</h2>
            <p>Marketing in retail stores plays a vital role in creating an impactful brand experience. Strategic interior themes, eye-catching graphics, and well-placed signage enhance customer engagement. Thoughtfully designed stalls not only attract attention but also convey your brand’s message, fostering deeper connections and driving sales through a memorable shopping environment.</p>
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
            <h2>Interior & Exterior Theme</h2>
            <p>Turn your retail store into an irresistible destination with a seamless fusion of eye-catching interior and exterior designs. Bold display signage and vibrant lighting create a magnetic atmosphere that attracts customers. Make your store a standout experience, where every detail captivates and keeps shoppers returning for more with an amalgamation of interior and exterior design that captivates customers from the moment they step in. With radiant lighting and displays, you ensure a striking facade with impressive signage and attractive landscaping that reflects your brand's identity.</p>
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