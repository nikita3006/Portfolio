import React from 'react';


const Header = () => {
  return (
    <header className='py-8 '>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#' className="text-gradient btn-link text-[15px]">
           <h1 className='text-cyan-400'>NIKITA<br/><span className='text-[30px] text-cyan-500 '>Negi</span></h1>
          </a>
          <button className='btn btn-sm text-xl'>
            <a href="https://drive.google.com/file/d/1ObBdUuKSp38Pr2HTQ-2wsUyD-OrZpDGB/view?usp=sharing"
             download=""
             target='_blank'
              role="button">
              Download CV
              </a>
          </button>   
        </div>   
      </div>  
    </header>
  )
};

export default Header;
