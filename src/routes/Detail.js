import React, {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

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
            <div>
                <p>{location.state.year}</p>
                <p>{location.state.title}</p>
                <p>{location.state.summary}</p>
                <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
                <p>{location.state.genres}</p>
                
            </div>
        );

    } else {
        return null;
    }
}

export default Detail;