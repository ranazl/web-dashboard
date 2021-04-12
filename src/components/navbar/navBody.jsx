import React, { useState } from "react";
import Navbar from "../navbar/navbar.json";
import "../../styles/navbar.css";
import * as icon from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBody = () => {
    const [search, setSearch] = useState("");
    const [navBarTemp, setNavbarTemp] = useState(Navbar);
    const handleChange = (e) => {
        setSearch(e.target.value);
        const newList = Navbar.filter(
            (item) => {
                return item.itemName.toLowerCase().indexOf(
                    search.toLowerCase()) !== -1;
            });
        setNavbarTemp(e.target.value === "" ? Navbar : newList);
    };

    return (
        <div className='myNavbar'>
            <div className='search-container'>
                <input type='text' value={search} onChange={handleChange} />
            </div>
            {navBarTemp.map((item, index) => {
                const iconName = icon[item.iconStyle];

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