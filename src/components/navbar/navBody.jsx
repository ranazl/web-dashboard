import React from "react";
import Navbar from "../navbar/navbar.json";
import "../../styles/navbar.css";
import * as icon from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBody = () => {
    return (
        <div className='myNavbar'>

            {Navbar.map((item, index) => {
                const iconName = icon[item.iconStyle];
                console.log("iconStyle", item.iconStyle, iconName);

                return (
                    <div className='myNavbarItem' key={index}>
                        <a href={item.path}>
                            <FontAwesomeIcon icon={iconName} className='navIcon' />
                            {item.itemName}
                        </a>
                        {item.haveLine === "line" && <hr />}
                    </div>
                );
            })}
        </div>
    );
};

export default NavBody;