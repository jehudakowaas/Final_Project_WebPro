import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return(
    <>
      <Navigation />

      <div className="container my-5">
        <h1>About this Application</h1>
        <p>This app is used to search for your favorite TV Shows/Series</p>
        <p>There are 3 features, including: Get data, Search data, and View details</p>
        <p> Jerushalem Kowaas(105011910048) | Fakultas Ilmu Komputer | Information System | Batch 2019 </p>
      </div>

        <div>
        <Footer />
        </div> 
    </>
  );
}

export default About;
