import React from 'react';
import "../../styles/report.css";
import Box from "./box.json";
import * as icon from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Report = () => {
    return (
        <div className="report">
            <text className="reportText">
                Report
            </text>
            {Box.map((item, index) => {
                const iconName = icon[item.iconStyle];

                return (
                    <div className="box" key={index}>
                        <span className="mapStyle">
                            <FontAwesomeIcon icon={iconName} className="reportIcon" />
                            <span className="titleStyle">
                                {item.title}
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default Report;