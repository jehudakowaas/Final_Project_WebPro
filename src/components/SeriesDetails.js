import React from 'react';
import { Link } from 'react-router-dom';

const SeriesDetails = (props) => {
    const imageUrl = "https://www.themoviedb.org/t/p/w1280/";

  return(
    <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                  <img className="card-img-top mb-5 mb-md-0" src={imageUrl+props.series.poster_path} alt={props.series.title} />
                </div>
                <div className="col-md-6">
                    <div className="small mb-1">Number of Seasons: {props.series.number_of_seasons}</div>
                    <h1 className="display-5 fw-bolder">{props.series.title}</h1>
                    <div className="fs-5 mb-5">
                        <span>Number of Episodes: {props.series.number_of_episodes}</span>
                    </div>
                    <p className="lead">{props.series.overview}</p>
                    <div className="d-flex">
                        <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default SeriesDetails;
