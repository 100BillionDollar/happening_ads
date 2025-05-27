// components/AboutBanner.js
import Link from 'next/link';
import Image from 'next/image';
import Storeimg from "/public/assets/images/adsimg.jpg";
import Storeimg2 from "/public/assets/images/adsimg2.jpg";

import { useEffect, useState} from 'react';


export default function ServiceDetail() {
  
  return (
    <>
  <section className="light_grey_bg">
        <div className="container">
          {/* Branding Services Section */}
          <div className="heading_box text-center mb-5">
            <h2 className="page_heading text-uppercase" data-aos="fade-up" data-aos-delay="200">GOOGLE ADS / SEO

</h2>
            <p className="text-center" data-aos="fade-up" data-aos-delay="400">Haappeningads uses online advertising to increase sales through promotional marketing.

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
            <h2>Google ads</h2>
            <p>Do you want to enhance your online visibility and attract potential customers? Google Ads is a powerful tool that can drive organic traffic to your website, with over two decades of authority in digital marketing. However, its success requires expert handling to maximize effectiveness. At Haappeningads, we specialise in leveraging Google Ads to target your audience precisely and drive them directly to your website. Our expertise ensures a results-driven approach that delivers measurable success.

</p>
<ul className="list_service"><li>Search ads</li><li>Display ads</li><li>Video ads</li><li>Shopping ads</li><li>App campaigns</li></ul>
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
            <h2>Search Engine Optimisation (SEO)</h2>
            <p>Reach your target audience with precision. Our professional SEO solutions include optimised meta descriptions, title tags, and a focus on specific search intent, helping you engage users and drive them to your website. Our skilled content writers create SEO-friendly, well-optimized blog posts and web pages that not only improve search rankings but also enhance user experience. This results in increased browsing times and higher engagement rates, providing a comprehensive solution to elevate your brand’s online presence and effectiveness.



</p>
<h5 className='pt-3 mb-0'>Our service provides the following benefits:
</h5>
<ul className="list_service"><li>Our service provides the following benefits:</li><li>Enhance Visibility of your brand and business</li><li>Increased revenue from Sales and Conversion</li><li>Integrate Approach to SEO</li><li>Establish a level ahead of your competitor</li></ul>
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