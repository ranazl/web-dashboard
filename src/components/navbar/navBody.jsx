import React from "react";
import Navbar from "../navbar/navbar.json";
import "../../styles/navbar.css";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavBody = (iconStyle) => {

    return (
        <div className="navbar">

            {

                Navbar.map((item, index) =>

                    <div className="navbarItem" key={index}>
                        <a href="#">
                            <i className={faCoffee}></i>
                            {console.log("iconStyle", item.iconStyle)}
                            {item.itemName}
                        </a>

                        {item.haveLine === "line" && <hr />}

                    </div>

                )}
        </div>
    );
};

export default NavBody;