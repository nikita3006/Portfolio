import React from 'react';
import quote from '../assets/Quotes.png';


const TestimonialCard = ({ testimonial }) => (
  
  <div className='flex justify-around items-center h-[300px] border-2 w-[95%] mx-auto shadow-md rounded-md'>
      <div className='flex flex-col justify-around items-start gap-4 h-60 ml-4'>
        {/* <div className='font-bold text-gray-500'>facebook</div> */}
        <div className='flex gap-1 items-center h-14'>
          {/* <img
            className="w-10 h-10 rounded-full m-2"
            src={`https://placekitten.com/50/50?image=${testimonial.id}`}
            alt={`${testimonial.name} profile`}
          /> */}
          <div>
            <div className="flex items-center">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <span key={index} className="text-yellow-500">&#9733;</span>
              ))}
            </div>
            <p className="font-bold font-['Manrope']">{testimonial.name}</p>
            <p className="text-sm text-black">{testimonial.profile}</p>
          </div>
        </div>
      </div>
      <div className='bg-transparent w-[60%] overflow-hidden p-6 mr-3 h-[250px] relative rounded-md'>
        <img src={quote} alt="quote" className='absolute right-2 top-2 h-6'/>
        <div>
        <p className='text-left  m-1 font-bold'>
        {testimonial.message}
        </p>
        </div>
      </div>
  </div>
);

export default TestimonialCard;
