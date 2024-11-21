import React from "react";
import Hero from "./Hero";
import Service from "./Service";
import Recommendation from "./Recommendation";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function MainPage() {
  return (
    <div>
      <Hero />
      <Service />
      <Recommendation />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default MainPage;
