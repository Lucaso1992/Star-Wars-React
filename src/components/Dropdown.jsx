import React from "react";
import { Link } from "react-router-dom"
import useAppContext from "../context/AppContext";

const Dropdown = ({ favorites }) => {
    const { store } = useAppContext();
    return (
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul className="dropdown-menu">
            {store.favorites.map((element, index) => {
                return (<li key={index} ><div className="dropdown-item" >
                    <Link to={`http://localhost:5173/detail/${element.type}/${element.id}`}>{element.name}</Link></div></li>);
            })
            }</ul>
        </div>
    )
}

export default Dropdown;