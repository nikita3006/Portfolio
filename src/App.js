import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import Company from './components/Company';
import Projects from './components/Projects';
import Certificate from './components/Certificate';
import Testimonial from './components/Testimonial';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CertificateList from './components/CertificateList';

const App = () => {
 
  return (
    <Router>
    <div className='overflow-hidden '>
    <Routes>
    <Route path="/" element={<>
      <Header />
      <Home />
      <Nav />
      <About />
      <CertificateList/>   
      <Experience />
      <Work />
      <Contact />
      < Company/>
      <Projects/>
      <Testimonial/>
      </>} />
      
     <Route path='/certificate' element={<Certificate/>}/>
         
        </Routes>
      {/* <div className='h-[4000px]'></div> */}
    </div>
    </Router>
  );
};

export default App;
