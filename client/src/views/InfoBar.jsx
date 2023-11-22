import React from "react";

import onlineIcon from "../icon/onlineIcon.png";
import closeIcon from "../icon/closeIcon.png";

import "../css/InfoBar.css";

const InfoBar = ({ name }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online icon" />

            <h3>{name}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/posts">
                <img src={closeIcon} alt="close icon" />
            </a>
        </div>
    </div>
);

export default InfoBar;
