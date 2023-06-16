import React from "react";
import { Link } from "react-router-dom";
import img from "../../img/star-wars.png";
import Dropdown from "./Dropdown";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">
                    <img className="ms-5" src={img} />
                </span>
            </Link>
            <div className="ml-auto">
                <Dropdown />
            </div>
        </nav>
    );
};
