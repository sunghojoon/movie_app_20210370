import React, {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import './Detail.css';

function Detail() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state === undefined) {
            navigate("/");
        } else if (location.state === null) {
          navigate("/");
        }
    });

    if (location.state) {
        return (
            <div className='dmovie'>
              <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
              <div className='dmovie__data'>
                <h3 className='dmovie__title'>
                  {location.state.title}
                </h3>
                <h5 className='dmovie__year'>Year: {location.state.year}</h5>
                <h5 className='dmovie__rating'>Rating: {location.state.rating}</h5>
                <h5 className='dmovie__runtime'>Runtime: {location.state.runtime}</h5>
                <ul className='dmovie__genres'>
                  {location.state.genres.map((genre, index) => {
                    return <li key={index} className='dmovie__genre'>{genre}</li>
                  })}
                </ul>
                <p className='dmovie_summary'>{location.state.summary}...</p>
              </div>
            </div>
          );

    } else {
        return null;
    }
}

export default Detail;