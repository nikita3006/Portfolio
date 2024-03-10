import React from 'react';
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsChatSquareDots } from 'react-icons/bs'
import { PiCertificate } from "react-icons/pi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <div className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
       <nav className='container mx-auto'>
        <div className='w-full bg-black/20 h-[64px] backdrop-blur-2xl rounded-full
         lg:max-w-[400px] max-w-[300px] lg:mx-auto px-5 flex justify-between text-2xl text-white/50'>
          <Link 
            to='home'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer w-[70px] h-[60px] flex items-center justify-center'>
            <BiHomeAlt/>
          </Link>
          <Link 
              to='about'
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer w-[70px] h-[60px] flex items-center justify-center'>
            <BiUser/>
          </Link>
          <Link 
              to='certificate'
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer w-[70px] h-[60px] flex items-center justify-center'>
           <PiCertificate />
          </Link>

          <Link
            to='work'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[70px] h-[60px] flex items-center justify-center'>
            <BsClipboardData/>
          </Link>
          <Link
           to='experience'
           activeClass='active'
           smooth={true}
           spy={true}
           className='cursor-pointer w-[70px] h-[60px] flex items-center justify-center'>
          <IoBriefcaseOutline />
          </Link> 
          <Link
           to='contact'
           activeClass='active'
           smooth={true}
           spy={true}
           className='cursor-pointer w-[70px] h-[60px] flex items-center justify-center'>
            <BsChatSquareDots  />
          </Link> 
        </div>
      </nav>
    </div>
  )
 
};

export default Nav;
