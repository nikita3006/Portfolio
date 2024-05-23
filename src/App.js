import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Company from './components/Company';
import Projects from './components/ProjectsList';
import Certificate from './components/Certificate';
import Testimonial from './components/Testimonial';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CertificateList from './components/CertificateList';
import ProjectsList from './components/ProjectsList';

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
      <Project />
      <Contact />
    
      {/* <Testimonial/> */}
      </>} />
      
     <Route path='/certificate' element={<Certificate/>}/>
     <Route path='/company' element={<Company/>}/>
     <Route path='/projectsList' element={<ProjectsList/>}/>
         
        </Routes>
      {/* <div className='h-[4000px]'></div> */}
    </div>
    </Router>
  );
};

export default App;
