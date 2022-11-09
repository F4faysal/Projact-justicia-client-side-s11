import React from 'react';
import Banner from './Banner/Banner';
import Experience from './Experience/Experience';
import Home3Service from './Home3Service/Home3Service';
import ServicesSection from './ServicesSection/ServicesSection';

const Home = () => {
  return (
    <div className='container mx-auto '>
      <Banner></Banner>
      <ServicesSection></ServicesSection>
      <Experience></Experience>
      <Home3Service></Home3Service>
      
    </div>
  );
};

export default Home;