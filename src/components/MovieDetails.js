import React from "react";
import PropTypes from "prop-types";
const MovieDetails = (props) => {
  return (
    <div className="movie_detail">
      <div className="movie_img">
        {" "}
        <img src={props.posterUrl} alt="movie poster"></img>
      </div>
      <div className="side">
        <div className="title_rate">
          <h4 className="detail_title">{props.title}</h4>{" "}
          <h4 className="rate">{props.rating}</h4>{" "}
        </div>
        <div>
          {" "}
          <span className="hour">{props.pg}</span>
          <span className="hour">{props.hour}</span>{" "}
        </div>
        <div className="hour">{props.category}</div>
        <h3>plot</h3>
        <p>{props.description}</p>
        <h3>Actors</h3>
        <p>{props.actors_name}</p>
        <h3>Released</h3>
        <p>{props.Released}</p>
      </div>
    </div>
  );
};
MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.string,
  pg: PropTypes.string,
  posterUrl: PropTypes.string,
};
MovieDetails.defaultProps = {
  title: "movie title",
  rating: 10,
  pg: "pg",
};
export default MovieDetails;
