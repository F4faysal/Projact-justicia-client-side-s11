import React from 'react';
import Banner from './Banner/Banner';
import Experience from './Experience/Experience';
import ServicesSection from './ServicesSection/ServicesSection';

const Home = () => {
  return (
    <div className='container mx-auto '>
      <Banner></Banner>
      <ServicesSection></ServicesSection>
      <Experience></Experience>
      
    </div>
  );
};

export default Home;