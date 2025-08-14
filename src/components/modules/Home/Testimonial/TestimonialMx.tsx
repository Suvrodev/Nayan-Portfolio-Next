"use client";

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import TestimonialBox from "./TestimonialBox/TestimonialBox";

const TestimonialMx = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("/testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold ">Testimonial</h1>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-10 uppercase">
          Our Satisfied Customers Feedback
        </h1>
      </div>

      <Marquee
        pauseOnHover={true}
        autoFill={false}
        speed={50}
        className="py-20"
      >
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="flex-shrink-0"
            style={{
              width: "100vw",
              maxWidth: "25vw",
              height: "400px",
              padding: "0 20px",
            }}
          >
            <TestimonialBox testimonial={testimonial} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TestimonialMx;
