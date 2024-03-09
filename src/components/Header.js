import React from 'react';


const Header = () => {
  return (
    <header className='py-8 '>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#' className="text-gradient btn-link text-[15px]">
           <h1>NIKITA<br/><span className='text-[30px] text-white '>Negi</span></h1>
          </a>
          <button className='btn btn-sm'>
            <a href="https://drive.google.com/file/d/1RF8-qOVi15pyS-tg0jd02wzdMdLB5PA1/view?usp=sharing" download="" role="button">
              Download CV</a></button>   
        </div>   
      </div>  
    </header>
  )
};

export default Header;
