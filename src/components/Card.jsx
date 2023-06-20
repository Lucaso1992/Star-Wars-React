import {Link} from "react-router-dom";

const Card = ({ name, children, type, id }) => {
    return (
        <div className="card" style={{ minWidth: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {children}
                <Link to={`/detail/${type}/${id}`} className="btn btn-primary">
                    Learn more!
                </Link>
            </div>
        </div>
    );
};

export default Card;