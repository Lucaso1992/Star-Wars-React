import {Link} from "react-router-dom";
import useAppContext from "../context/AppContext";

const Card = ({ name, children, type, id, favorites }) => {
    const {actions, store} = useAppContext();
    console.log(store.favorites);
    return (
        <div className="card" style={{ minWidth: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {children}
                <div className="d-flex justify-content-between">
                <Link to={`/detail/${type}/${id}`} className="btn btn-primary">
                    Learn more!
                </Link>
                {favorites?<button onClick={()=>actions.addFavorites(id, type, name)} type="button"><i class="bi bi-heart-fill"></i></button>:<button type="button" onClick={()=>actions.addFavorites(id, type, name)}><i className="bi bi-heart"></i></button>}
                </div>
            </div>
        </div>
    );
};

export default Card;