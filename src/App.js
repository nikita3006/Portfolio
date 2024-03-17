import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import Company from './components/Company';
import Projects from './components/Projects';
import Certificate from './components/Certificate';

const App = () => {
 
  return (
    <div className='overflow-hidden '>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Certificate/>   
      <Experience />
      <Work />
      <Contact />
      < Company/>
      <Projects/>
     
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
