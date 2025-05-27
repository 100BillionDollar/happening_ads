
"use client";
// components/AboutBanner.js
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';


const BannerSvgImage = dynamic(() => import('./location'), {
  ssr: false, // Disable server-side rendering
});
export default function AboutBanner() {
  return (
    <div className="">
    <BannerSvgImage/>
    {/* <Image className='img-fluid' src="assets/images/Web_Bannner_220525.jpg" usemap="#image-map" width={1920} height={719}/> */}

    </div>

    
  );
}