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



const App = () => {
 


  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Experience />
      <Work />
      <Contact />
      < Company/>
      <Projects/>
    
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
