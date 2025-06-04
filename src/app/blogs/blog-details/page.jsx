"use client"
import Banner from "./banner";
import BlogDetails from "./blogdetails";
import Relatedblogs from "./relatedblogs";

import { useEffect, useState ,useContext} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Detail() {
    useEffect(() => {
      AOS.init({ once: true, duration: 800 });
    }, []);
  return (<>
    <Banner/>
    <BlogDetails/>
     <Relatedblogs/>
    </>
    
  );
}
