// pages/_app.js
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // required for collapse to work
import { useEffect } from 'react';

export default function AccordionExample() {
    useEffect(() => {
    // Dynamically import Bootstrap JS on the client side
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <section className="light_grey_bg offering_section faq_section">
    <div className="container">
    <h2 className="page_heading text-center mb-5" data-aos="fade-up" data-aos-delay="200">FAQ</h2>
    <div className="row">
        <div className="col-md-12">
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            How does the branding design process work? 
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
          The concept, naming, logo design, colour scheme, and font choice are all components of branding. Your brand is the identity of your business and is ingrained in all that you do.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            How long does it usually take to complete a website design project? 
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
           From the first meeting to the launch date, web design and development might take anywhere from 6 to 12 weeks, depending on the size of your project.
          </div>
        </div>
      </div>

 <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Why I need video marketing; what is it and why is it necessary? 
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
          Video marketing is quickly rising to the top of the Internet traffic hierarchy. However, the majority of firms are still unwilling to adopt a successful video marketing approach. To attract business and demonstrate to others that you are always thinking about their success, you should tell them how beneficial that may be to their brand and, if you provide services, make a pitch here. People should be encouraged to start using video marketing as soon as possible. Describe what it is and how it may be used, including YouTube, Facebook, and other video tools that can aid in connection development and branding. It leads the way and lends you credibility.


          </div>
        </div>
      </div>
      
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
           Which kinds of creative services are available from you? 
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
        We provide graphic design, photography, video, and brand identification and design services.


          </div>
        </div>
      </div>

        <div className="accordion-item">
        <h2 className="accordion-header" id="headingFive">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
           What kinds of artistic services do you provide?  
          </button>
        </h2>
        <div
          id="collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
       We provide graphic design, photography, video, brand identification and design services.


          </div>
        </div>
      </div>
      
           <div className="accordion-item">
        <h2 className="accordion-header" id="headingSix">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix"
          >
          What makes a brand different from a logo? 
          </button>
        </h2>
        <div
          id="collapseSix"
          className="accordion-collapse collapse"
          aria-labelledby="headingSix"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
     The totality of elements that symbolise your business, goods, or services is your branding. A logo is only a small component of your brand's total identity.


          </div>
        </div>
      </div>

        <div className="accordion-item">
        <h2 className="accordion-header" id="headingSeven">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSeven"
            aria-expanded="false"
            aria-controls="collapseSeven"
          >
         How do you go about coming up with something creative? 
          </button>
        </h2>
        <div
          id="collapseSeven"
          className="accordion-collapse collapse"
          aria-labelledby="headingSeven"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
     To develop effective brands and brand communication, we adhere to tight rules. We can simplify the visual component of design using our three-step method. We start by building the brand ladder first. The brand's characteristics are taken into account in the brand ladder. We then determine the advantages you provide to the client. Lastly, we pinpoint the segments you intend to focus on. We can construct and organise the positioning statement more successfully with the help of the brand ladder. We focus on the positioning statement second. This helps to concentrate the creative process by providing us with a clear understanding of your qualities, advantages, and values. The positioning statement provides answers to queries about our target audience and our strategy. Finally, we develop a framework for creative strategy. We start with a creative brief that includes information about your target market, facts, features, advantages, message target, marketing objectives, etc. Next, while maintaining open lines of communication, we apply the framework to the design production phase.


          </div>
        </div>
      </div>

       <div className="accordion-item">
        <h2 className="accordion-header" id="headingEight">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseEight"
            aria-expanded="false"
            aria-controls="collapseEight"
          >
        What benefit does my brand receive from your business? 
          </button>
        </h2>
        <div
          id="collapseEight"
          className="accordion-collapse collapse"
          aria-labelledby="headingEight"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
     We are a small agency with a large background in business. We view our customers as brand partners, taking the time to get to know you and your company so that we can offer the finest support possible to help you achieve your objectives.



          </div>
        </div>
      </div>
      

       <div className="accordion-item">
        <h2 className="accordion-header" id="headingNine">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseNIne"
            aria-expanded="false"
            aria-controls="collapseNine"
          >
       What distinguishes local SEO from SEO in general?  
          </button>
        </h2>
        <div
          id="collapseNIne"
          className="accordion-collapse collapse"
          aria-labelledby="headingNine"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
     The phrase "search engine optimisation" refers to a wide range of factors that raise your website's search engine ranking. By employing strategies to appear for queries close to you, local SEO focusses just on your location.


          </div>
        </div>
      </div>

           <div className="accordion-item">
        <h2 className="accordion-header" id="headingTen">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTen"
            aria-expanded="false"
            aria-controls="collapseTen"
          >
      What sort of support can I expect from your agency in order to help my business grow?  
          </button>
        </h2>
        <div
          id="collapseTen"
          className="accordion-collapse collapse"
          aria-labelledby="headingTen"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
     At Haappeningads, we take pride in offering our clients comprehensive service. From the first stages of strategy formulation to execution and continuous optimisation, our team of professionals will help you every step of the way. We offer advice on cutting-edge trends and industry best practices to keep your company ahead of the competition in the digital sphere.


          </div>
        </div>
      </div>
      

</div>
    </div>
    </div>
      </div>
</section>
  );
}
