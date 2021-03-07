import React from "react";
import Navbar from "../navbar/navbar.json";
import "../../styles/navbar.css"

const NavBody = () => {
    return (
        <div className="navbar">

            {

                Navbar.map((item, index) =>

                    <div className="navbarItem" key={index}>
                        <a href="#">
                            {item.itemName}
                        </a>

                        {item.haveLine === "line" && <hr />}

                    </div>

                )}
        </div>
    );
};

export default NavBody;