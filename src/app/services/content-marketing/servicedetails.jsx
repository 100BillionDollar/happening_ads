// components/AboutBanner.js
import Link from 'next/link';
import Image from 'next/image';
import Storeimg from "/public/assets/images/contentimg.jpg";
import Storeimg2 from "/public/assets/images/contentimg2.jpg";

import { useEffect, useState} from 'react';


export default function ServiceDetail() {
  
  return (
    <>
  <section className="light_grey_bg">
        <div className="container">
          {/* Branding Services Section */}
          <div className="heading_box text-center mb-5">
            <h2 className="page_heading text-uppercase" data-aos="fade-up" data-aos-delay="200">Content Marketing

</h2>
            <p className="text-center" data-aos="fade-up" data-aos-delay="400">Haappeningads is an approach to promoting brand awareness <br></br>and keeping your business at the top of the list.
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
            <h2>Content Marketing</h2>
            <p>We believe in the power of quality content to resonate with your audience and establish your brand as an industry leader. Our content team crafts compelling narratives that build trust and engagement, creating a solid foundation for your brand's growth. By delivering high-quality, SEO-optimized content, we enhance website traffic, improve search engine visibility, and broaden your brand's reach. Our proven approach effectively generates leads by providing potential customers with the precise information they need.


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
            <h2>Create Blog Posts for your business</h2>
            <p>We craft precisely tailored content that drives your audience to your website while enhancing your SEO marketing strategy through well-written blogs. Our fresh, business-focused content satisfies viewers’ search for information, ensuring they find valuable insights—high-quality backlinks further direct queries to your website, boosting engagement and credibility. Our team consistently produces compelling blogs and posts that reflect your brand's expertise, reinforcing your authority in the industry and promoting your products and services effectively.

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