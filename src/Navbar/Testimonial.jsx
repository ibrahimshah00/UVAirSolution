
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  { name: "Gerardo Pichardo", title: "THANK YOU EMERGENCY AC!!", review: "Thank you, Mr. Gonzalez and the UV Air Solutions team, for your professionalism and excellent service! Your attention to detail and efficiency in addressing our needs were truly appreciated. Highly recommend their services to anyone looking for reliable and quality HVAC solutions!", rating: 5 },
  { name: "Eri P.", title: "VERY HONEST. WILL HIGHLY RECOMMEND!", review: "My AC unit broke down in the middle of summer on a weekend. I called UV air solutions and they were able to come and install a new unit same day. Irvin was excellent and very helpful. I highly recommend them.", rating: 5 },
  { name: "Vlad Vaihenberg.", title: "FAST RESPONSE, QUALITY WORK!", review: "I recently hired UV Air Solutions to fix my AC, and I’m impressed with the service. The technician was professional, efficient, and had everything working perfectly in no time. Great communication and fair pricing. Highly recommend for any AC repair needs! Thanks Irvin!", rating: 5 },
  { name: "Osman Garcia Benavente.", title: "EXCELLENT SERVICE!", review: "Amazing service from irvin and his crew they clean my ducts and blower also did a maintenance my ac feels so much better after there service highly recommended them thank you Uv air Solutions", rating: 5 },
  { name: "jenny a.", title: "HIGHLY RECOMMENDED!", review: "Great experience with Irvin and his crew as he came to help my elderly mothers ac unit and had it repaired within an hour upon arrival! I am very grateful with how prompt he was with helping especially since its the summer. Great communication as well as we were able to handle a lot of things on the phone! I will be calling them from now on for help with my ac needs from now on !!", rating: 5 },
  
  { name: "Manuela Echeverri.", title: "VERY HONEST. WILL HIGHLY RECOMMEND!", review: "I can’t recommend UV Air Solutions enough! Not only did they come same day, they were here within a half hour after getting the call. Irvin is professional, efficient and honest. He will always give you multiple options to best solve your problem and gets the job done quick! UV Air gained a new customer for life.", rating: 5 },
  { name: "Lauren Chiriboga.", title: "FAST RESPONSE, QUALITY WORK!", review: "Irvin was an absolute pleasure to work with. He was extremely responsive to our query about our AC. He arrived promptly and was so courteous in the way he performed his services on our AC. We will never use another AC company again after working with UV air solutions!", rating: 5 },
  { name: "Chloe Bernhard.", title: "FAST RESPONSE, QUALITY WORK!", review: "Irvin responded quickly and efficiently excellently service. Amazing service they came out and fixed my A/C the same day thank you. UV air solution is the absolute place! They saved me from buying a new one! We appreciate your team. Thanks you guys", rating: 5 },
  
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const testimonialsPerPage = 3;

  // Calculate the end index
  const endIndex = startIndex + testimonialsPerPage;
  
  // Get the testimonials to display
  const displayedTestimonials = testimonials.slice(startIndex, endIndex);

  return (
    <section className="testimonials">
      <h2>HEAR FROM OUR HAPPY CUSTOMERS</h2>
      <p className="subtitle">
        At UV AIR SOLUTION, your satisfaction is our priority! See for yourself what our customers have to say.
      </p>

      <div className="testimonial-cards">
        {displayedTestimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="stars">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
            </div>
            <h3>"{testimonial.title}"</h3>
            <p>{testimonial.review}</p>
            <p className="author">- {testimonial.name}</p>
          </div>
        ))}
      </div>

      <div className="testimonial-buttons">
        {/* Left Button: Disabled if at the beginning */}
        <button 
          className="testimonial-btn" 
          onClick={() => setStartIndex(startIndex - testimonialsPerPage)}
          disabled={startIndex === 0}
        >
          &larr; Previous
        </button>

        {/* Right Button: Disabled if at the end */}
        <button 
          className="testimonial-btn" 
          onClick={() => setStartIndex(startIndex + testimonialsPerPage)}
          disabled={endIndex >= testimonials.length}
        >
          Next &rarr;
        </button>
        <button className="moretestimonial"
                onClick={() => window.open("https://www.google.com/maps/place/UV+Air+Solutions+(HVAC+Service)/@25.8925384,-80.3467532,17z/data=!4m8!3m7!1s0x2848f395d70d7b1f:0x7d027db69af89b47!8m2!3d25.8925384!4d-80.3441783!9m1!1b1!16s%2Fg%2F11vb_4hmmx?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D", "_blank")}
        >
          More Customer Testimonials
        </button>

      </div>
    </section>
  );
};

export default Testimonials;
