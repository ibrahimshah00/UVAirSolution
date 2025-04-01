import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  { name: "Gerardo Pichardo", title: "THANK YOU UV AIR SOLUTION!!", review: "Thank you, Mr. Gonzalez and the UV Air Solutions team, for your professionalism and excellent service! Your attention to detail and efficiency in addressing our needs were truly appreciated. Highly recommend their services to anyone looking for reliable and quality HVAC solutions!", rating: 5 },
  { name: "Eri P.", title: "VERY HONEST. WILL HIGHLY RECOMMEND!", review: "My AC unit broke down in the middle of summer on a weekend. I called UV air solutions and they were able to come and install a new unit same day. Irvin was excellent and very helpful. I highly recommend them.", rating: 5 },
  { name: "Vlad Vaihenberg.", title: "FAST RESPONSE, QUALITY WORK!", review: "I recently hired UV Air Solutions to fix my AC, and I’m impressed with the service. The technician was professional, efficient, and had everything working perfectly in no time. Great communication and fair pricing. Highly recommend for any AC repair needs! Thanks Irvin!", rating: 5 },
  { name: "Osman Garcia Benavente.", title: "EXCELLENT SERVICE!", review: "Amazing service from irvin and his crew they clean my ducts and blower also did a maintenance my ac feels so much better after there service highly recommended them thank you Uv air Solutions", rating: 5 },
  { name: "jenny a.", title: "HIGHLY RECOMMENDED!", review: "Great experience with Irvin and his crew as he came to help my elderly mothers ac unit and had it repaired within an hour upon arrival! I am very grateful with how prompt he was with helping especially since its the summer. Great communication as well as we were able to handle a lot of things on the phone! I will be calling them from now on for help with my ac needs from now on !!", rating: 5 },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <h2>HEAR FROM OUR HAPPY CUSTOMERS</h2>
      <p className="subtitle">
        At UV AIR SOLUTION, your satisfaction is our priority! See for yourself what our customers have to say.
      </p>

      <div className="testimonial-container">
        {testimonials.slice(index, index + 3).map((testimonial, i) => (
          <div className="testimonial-card" key={i}>
            <div className="stars">
              {[...Array(testimonial.rating)].map((_, j) => (
                <FaStar key={j} className="star" />
              ))}
            </div>
            <h3>"{testimonial.title}"</h3>
            <p>{testimonial.review}</p>
            <p className="author">- {testimonial.name}</p>
          </div>
        ))}
      </div>

      <div className="testimonial-buttons">
        <button className="testimonial-btn" onClick={handlePrev}>
          &larr; Previous
        </button>
        <button className="testimonial-btn" onClick={handleNext}>
          Next &rarr;
        </button>
        <button
          className="moretestimonial"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/UV+Air+Solutions+(HVAC+Service)/@25.8925384,-80.3467532,17z/data=!4m8!3m7!1s0x2848f395d70d7b1f:0x7d027db69af89b47!8m2!3d25.8925384!4d-80.3441783!9m1!1b1!16s%2Fg%2F11vb_4hmmx?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D",
              "_blank"
            )
          }
        >
          More Customer Testimonials
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
