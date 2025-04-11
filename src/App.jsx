import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/navbar";
import Home from "./Navbar/Home";
import About from "./Navbar/About";
import Contact from "./Navbar/Contact";
import Services from "./Navbar/Services";
import DuctCleaning from "./Navbar/DuctCleaning";
import IndoorAir from "./Navbar/IndoorAir";
import Plumbing from "./Navbar/Plumbing";
import UniqueServices from "./Navbar/ServicePage";
import HVACSection from "./Navbar/HVACSection";
import ContactSection from "./Navbar/ContactPage";
import WhyChoose from "./Navbar/WhyChoose";
import Testimonials from "./Navbar/Testimonial";
import GoogleMap from "./Navbar/GoogleMap";
import ServiceSection from "./Navbar/ServiceSection";
import Footer from "./Navbar/Footer";
import WhatsAppButton from "./Navbar/WhatsAppButton";


function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Routes>
          {/* Home Page */}
          <Route 
          path="/" 
          element={
            <>
            <Home></Home>
          <HVACSection></HVACSection>
       <UniqueServices></UniqueServices>
       <ContactSection></ContactSection>
       <WhyChoose></WhyChoose>
       <Testimonials></Testimonials>
       <GoogleMap></GoogleMap>
       <ServiceSection></ServiceSection>
       <Footer></Footer>
          </>
          } 
          />

          {/* About Page - Includes About, Testimonials, WhyChoose, Footer */}
          <Route
            path="/about"
            element={
              <>
                <About />
                <Testimonials />
                <WhyChoose />
                <GoogleMap />
                <Footer />
              </>
            }
          />

          {/* Services Page - Includes UniqueServices, ServiceSection, GoogleMap, Footer */}
          <Route
            path="/services"
            element={
              <>
                <UniqueServices />
                <ServiceSection />
                <WhyChoose />
                <GoogleMap />
                <Footer />
              </>
            }
          />

          {/* Other Pages */}



          
          <Route path="/duct-cleaning" element={
            <>
            <DuctCleaning />
            <UniqueServices/>
            <GoogleMap />
            <Footer />
            </>} 
            />
          <Route path="/gallery" element={
            <>
            <IndoorAir />
            <GoogleMap></GoogleMap>
            <Footer />
            </>
            } />

          <Route 
            path="/contact" 
            element={
            <>
            <Contact />
            <GoogleMap></GoogleMap>
            <Footer />
            </>
            
          } 
          />
          
        </Routes>
      </div>
    </>
  );
}

export default App;







