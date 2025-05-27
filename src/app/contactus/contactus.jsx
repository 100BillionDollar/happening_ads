"use client";


import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faClose, faFlag, faLocationDot, faPhone, faRefresh } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function ContactPage() {
   const [menuOpen, setMenuOpen] = useState(false);
   const [isSticky, setIsSticky] = useState(false);
   const [contactFormOpen, setContactFormOpen] = useState(false);
   const [isMounted, setIsMounted] = useState(false);
   const [captchaText, setCaptchaText] = useState('');
   const menuRef = useRef(null);
   const contactFormRef = useRef(null);
   
   // Form state
   const [formData, setFormData] = useState({
     name: '',
     designation: '',
     email: '',
     phone: '',
     company: '',
     looking: '',
     message: '',
     captcha: ''
   });
 
   // Set mounted state after component mounts
   useEffect(() => {
     setIsMounted(true);
     // Generate initial captcha when component mounts
     generateCaptcha();
   }, []);
 
   // Function to generate random captcha
   const generateCaptcha = () => {
     const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
     let captcha = '';
     for (let i = 0; i < 6; i++) {
       captcha += chars.charAt(Math.floor(Math.random() * chars.length));
     }
     setCaptchaText(captcha);
   };
 
   // Refresh captcha
   const refreshCaptcha = () => {
     generateCaptcha();
   };
 
   // Handle form input changes
   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData(prevState => ({
       ...prevState,
       [name]: value
     }));
   };
 
   // Handle form submission with captcha validation
   const handleSubmit = (e) => {
     e.preventDefault();
     
     // Validate captcha
     if (formData.captcha !== captchaText) {
       alert('Captcha verification failed. Please try again.');
       refreshCaptcha();
       setFormData({
         ...formData,
         captcha: ''
       });
       return;
     }
     
     // Add your form submission logic here
     console.log('Form submitted:', formData);
     // You might want to reset the form and close the popup after successful submission
     alert('Form submitted successfully!');
     setFormData({
       name: '',
       designation: '',
       email: '',
       phone: '',
       company: '',
       looking: '',
       message: '',
       captcha: ''
     });
     setContactFormOpen(false);
   };
 

  
  return (
    <>
     <section className="contact_section" id="middlecontent">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-4 col-md-4">
            <div className="contact-form-container">
              <div className="mb-4">
                <div className="logo-container mb-3">
                   <span className="contact_pattern_logo d-block">
                     <Image className="img-fluid"  data-aos="fade-up" data-aos-delay="200" src="/assets/images/pattern_logo.png" alt="Ahmar" width={200} height={45} /></span>
                <Image className="img-fluid"
                  src="/assets/images/logo.png" 
                  alt="Ahmar" 
                  width={200} 
                  height={45} 
                   data-aos="fade-up" data-aos-delay="400"
                />
              </div>
                
                <div className="contact-info mb-4">
                <div className="d-flex align-items-start mb-2"  data-aos="fade-up" data-aos-delay="600">
                              <p className="mb-0" > 
                              <span className="contact_icon"><FontAwesomeIcon icon={faLocationDot} /></span> K-20, 2nd Floor, Sector 18,<br />
                                Noida-201301 (U.P)
                              </p>
                            </div>
                            
              
                            <div className="pt-2"  data-aos="fade-up" data-aos-delay="800">
                            <p className="text-warning fw-semibold my-3">We'd love to hear from you</p>
                            
                            <div className="d-flex align-items-center mb-2">
                              <p className="mb-0"><span className="contact_icon"><FontAwesomeIcon icon={faEnvelope} /></span> Info@happeningads.com</p>
                            </div>
                            
                            <div className="d-flex align-items-center mb-4">
                              <p className="mb-0"><span className="contact_icon"><FontAwesomeIcon icon={faPhone} /></span>+91 99994 53999</p>
                            </div>
                            </div>
                </div>
                
                <div className="menu-social d-flex mt-3">
                   <a href="https://www.instagram.com/haappeningads/" target="_blank" className="me-3"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.facebook.com/haappeningads/" target="_blank" className="me-3"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://www.facebook.com/haappeningads/" target="_blank" className="me-3"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://x.com/haappeningads" target="_blank" className="me-3"><FontAwesomeIcon icon={faXTwitter} /></a>
              </div>
              </div>

             
            </div>
</div>
            <div className="col-md-8 col-md-8">
            <div className="heading_box text-start mb-5">
            <h2 className="page_heading">Get In touch <span className="text-warning"> <Image className="img-fluid" src="/assets/images/hi.gif" alt="hi" width={50} height={45} /></span></h2>
          </div>
              <form onSubmit={handleSubmit}>
                <div className="row contact_form_cntr g-3">
                  <div className="col-md-6">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Designation" 
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="input-group">
                      <div className="input-group-text">
                        <span className="flag-icon">  <Image
                  src="/assets/images/flag.png" 
                  alt="india flag" 
                  width={20} 
                  height={20} 
                /></span> +91
                      </div>
                      <input 
                        type="tel" 
                        className="form-control" 
                        placeholder="Phone Number" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Company" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <select 
                      className="form-select" 
                      name="looking"
                      value={formData.looking}
                      onChange={handleChange}
                    >
                      <option value="">Looking for</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <textarea 
                      className="form-control" 
                      rows="4" 
                      placeholder="Message/Comment" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                      <div className="captcha-container">
                        {/* Added Captcha Display with Refresh Button */}
                        <div className="captcha_cntr">
                        <div className="captcha-display d-flex justify-content-between align-items-center bg-light rounded">
                          <div className="captcha-text font-monospace letter-spacing-1">{captchaText}</div>
                          <button 
                            type="button" 
                            className="btn btn-sm" 
                            onClick={refreshCaptcha}
                            aria-label="Refresh Captcha"
                          >
                            <FontAwesomeIcon icon={faRefresh} />
                          </button>
                        </div>
                        <div className="w-100">
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter captcha code" 
                            name="captcha"
                            value={formData.captcha}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        </div>
                        <div className="col-12 text-center mt-4">
                          <button type="submit" className="btn btn-warning px-4 py-2 rounded-pill">
                            Submit now
                          </button>
                        </div>
                      </div>
                    </div>
    
    
                </div>
              </form>
            </div>
          </div>
          
          </div>
          </section>
<div className="container-fluid">
       <div className="row">
        <div className="col-lg-12 p-0">
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2982211009307!2d77.32255561508316!3d28.57278018244186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44f7a8cfe4d%3A0x1eee5e2a1d7aab98!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1620231564053!5m2!1sen!2sin" 
                width="100%" 
                height="500" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          </div>
          </div>
          
    </>
  );
}