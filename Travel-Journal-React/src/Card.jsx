import React from "react";
import marker from "./images/marker.png";

export default function Card(props) {
  console.log(props.googleMapsUrl);
  return (
    <div className="card-container">
      <img className="card-image" src={props.imageUrl} alt={props.title} />
      <div className="card-details">
        <div className="card-location">
          <img className="location-icon" src={marker} alt="location icon" />
          <p className="card-country">{props.location}</p>
          <a href={`${props.googleMapsUrl}`} target="_blank" className="link">
            View on Google Maps
          </a>
        </div>
        <h2 className="card-title">{props.title}</h2>
        <div className="card-date">
          {props.startDate} - {props.endDate}
        </div>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}
