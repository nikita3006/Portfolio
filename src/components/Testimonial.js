import React, { useState, useRef, useEffect } from 'react';
import TestimonialCard from "../components/TestimonialCard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import left from '../assets/left.png';
import right from '../assets/right.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonial = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const titleControl = useAnimation();
  const [titleRef, titleinView] = useInView();

  useEffect(() => {
    if (titleinView) {
      titleControl.start("visible");
    } else {
      titleControl.start("hidden");
    }
  }, [titleControl, titleinView]);

  const titleVariants = {
    hidden: { opacity: 1, scale: 1, x: "100%" },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.0 }, x: "0%" },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: activeIndex === i ? '#000' : '#888',
          cursor: 'pointer',
        }}
      ></div>
    ),
    appendDots: (dots) => (
      <div style={{ position: 'absolute', top: '22rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button className="arrow-btn prev-btn mb-2 p-2" onClick={() => { sliderRef.current.slickPrev(); setActiveIndex((prev) => prev - 1); }}>
          <img src={left} alt="Left Arrow"/>
        </button>
        <ul style={{ margin: '0', padding: '0', display: 'flex', gap: '1rem' }}>
          {dots}
        </ul>
        <button className="arrow-btn next-btn mb-2 p-2" onClick={() => { sliderRef.current.slickNext(); setActiveIndex((prev) => prev + 1); }}>
          <img src={right} alt="Right Arrow"/>
        </button>
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
  const testimonials = [
    {
      id: 1,
      name: 'Joanna Prohaska',
     
     
      message:'urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuereurna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristiqu.'
    },
    {
      id: 2,
      name: 'Sai Krisnan',
     
      
      message:'urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuereurna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristiqu.'
    },
    {
      id: 3,
      name: 'Joanna Prohaska',
     
      
      message:'urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuereurna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristiqu.'
    },
    {
      id: 4,
      name: 'Sai Krisnan',
     
     
      message:'urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuereurna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristiqu.'
    },
   ];

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
      <div className="block mt-2 mb-4" style={{ position: 'relative' }}>
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Testimonial;