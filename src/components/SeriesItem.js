import React from 'react';
import { Link } from 'react-router-dom';

const SeriesItem = (props) => {
    const imageUrl = "https://www.themoviedb.org/t/p/w1280/";

    return(
    <div className="col mb-5">
        <div className="card h-100">
            <img className="card-img-top" src={imageUrl+props.series.poster_path} alt={props.series.title} />
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{props.series.title}</h5>
                    {props.series.release_date}
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    <Link className="btn btn-outline-dark mt-auto" to={`/details/${props.series.id}`}>View Details</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SeriesItem;
