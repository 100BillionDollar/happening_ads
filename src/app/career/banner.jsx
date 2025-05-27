// components/AboutBanner.js
import Link from 'next/link';
import Image from 'next/image';
import Aboutbanner from "/public/assets/images/career_banner.jpg";
import { useEffect, useState} from 'react';



export default function AboutBanner() {
   const [position, setPosition] = useState(0);
    
    useEffect(() => {
      let animationFrame;
      let startTime = null;
      const duration = 2000; // 2 seconds for full animation cycle
      const maxTranslation = 10; // Maximum translation in pixels
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        
        // Calculate position using sine wave for smooth, continuous motion
        // This creates a smooth up and down animation that loops seamlessly
        const progress = (elapsed % duration) / duration;
        const newPosition = Math.sin(progress * Math.PI * 2) * maxTranslation;
        
        setPosition(newPosition);
        animationFrame = requestAnimationFrame(animate);
      };
      
      animationFrame = requestAnimationFrame(animate);
      
      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }, []);
  return (
    <div className="banner-wrapper position-relative text-white">
       <Image className='img-fluid' src={Aboutbanner} width={1920} height={400}/> 
      <div className="container h-100 position-absolute caption_box">
        <div className="row h-100">
          <div className="col-12 portfolio_heading d-flex flex-column justify-content-end"  data-aos="fade-up" data-aos-delay="200">
            <h1 className="title_heading">
            Join Our Dynamic<br></br>
             Team at<br>
             </br>
             Happening Ads
            </h1>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-indicator position-absolute start-50 translate-middle-x" style={{ bottom: '30px' }}>
      <div 
        className="text-center text-white transition-all duration-300"
        style={{ transform: `translateY(${position}px)` }}
      >
         <a href="#middlecontent" className="text-white">
        <div className="mb-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            fill="currentColor" 
            className="bi bi-chevron-down" 
            viewBox="0 0 16 16"
          >
            <path 
              fillRule="evenodd" 
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
        <span className="text-sm">Scroll Down</span>
        </a>
      </div>
    </div>


     
    </div>
  );
}