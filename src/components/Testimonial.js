import React, { useState, useRef, useEffect } from 'react';
import TestimonialCard from "../components/TestimonialCard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import left from '../assets/left.png';
import right from '../assets/right.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { testimonials } from '../constant/TestimonialData';

const Testimonial = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const titleControl = useAnimation();
  const [titleRef, titleInView] = useInView();

  useEffect(() => {
    if (titleInView) {
      titleControl.start("visible");
    } else {
      titleControl.start("hidden");
    }
  }, [titleControl, titleInView]);

  const titleVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: "0%", transition: { duration: 1.0 } },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows:false,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: activeIndex === i ? '#000' : '#888',
          cursor: 'pointer',
          marginTop:'95px'
        }}
      ></div>
    ),
    appendDots: (dots) => (
      <div style={{ position: 'absolute', bottom: '20px', width: '100%', textAlign: 'center' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {dots}
        </ul>
      </div>
    ),
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='p-4 md:p-6'>
        <motion.div
          variants={titleVariants}
          ref={titleRef}
          initial="hidden"
          animate={titleControl}
        >
          <p className="text-4xl font-bold font-sans text-center mt-8 md:mt-16 mb-2">
            Testimonial
          </p>
          <p className="text-xl font-sans text-center mb-8 md:mb-16">
            Client Reviews
          </p>
        </motion.div>
      </div>
      <div className="block mt-10 lg:mb-48 relative lg:w-[900px] lg:ml-[400px] cursor-grab mb-36 " >
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Slider>
        <button className=" prev-btn w-[20px] h-[20px] lg:ml-[290px] lg:mt-10 mt-10 ml-[50px] cursor-pointer" onClick={() => { sliderRef.current.slickPrev(); setActiveIndex((prev) => prev - 1); }}>
          <img src={left} alt="Left Arrow" />
        </button>
        <button className="next-btn w-[20px] h-[20px] lg:ml-[270px] lg:mt-10 mt-10 ml-[200px]  cursor-pointer " onClick={() => { sliderRef.current.slickNext(); setActiveIndex((prev) => prev + 1); }}>
          <img src={right} alt="Right Arrow" />
        </button>
      </div>
    </>
  );
};

export default Testimonial;
