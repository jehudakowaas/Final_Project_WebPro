import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SeriesDetails from '../components/SeriesDetails';


const Details = () => {
  const [series, setSeries] = useState({});
  const { seriesId } = useParams();

  useEffect(() => {
    // hit TMDB endpoint to get details of a movie
    fetch(`https://api.themoviedb.org/3/tv/${seriesId}?api_key=91a5c930ee76707444227ea8dc095130&language=en-US`)
    .then(response => response.json())
    .then(data => setSeries(data));
    }, 
    // eslint-disable-next-line
  []);

  return(
    <>
      <Navigation />
      <SeriesDetails series={series} />
      <Footer />
    </>
  );
}

export default Details;
