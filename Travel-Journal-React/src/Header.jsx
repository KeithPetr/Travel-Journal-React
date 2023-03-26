import React from "react";
import globe from "./images/globe-svg.svg";

export default function Header() {
    return (
        <div className="header-container">
            <img className="globe-image" src={globe} alt="globe"/>
            <p className="site-title">my travel journal.</p>
        </div>
    )
}