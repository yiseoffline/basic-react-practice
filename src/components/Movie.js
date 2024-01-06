import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}){
    // movie component가 이 정보들을 parent component로 부터 받아온다는 뜻
    return(
        <div>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <img src={coverImg} alt={title}/>
            <p>{summary}</p>
            <ul>
                <h3>genre</h3>
                {genres.map((g) => (
                <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    coverImg  : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired, // array여서
};

export default Movie;