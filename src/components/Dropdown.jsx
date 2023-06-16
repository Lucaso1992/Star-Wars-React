import React from "react";
import { Link } from "react-router-dom"
export default function Dropdown({ listFavoriest, routeFavoriest }) {
    return (
        <ul className="dropdown-menu">
            {listFavoriest.map((element, index) => {
                return (<li key={index} ><a className="dropdown-item" ><Link to={routeFavoriest}>{element[index]}</Link></a></li>);
            })

            }</ul>
    )
}