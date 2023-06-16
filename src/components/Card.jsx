import React from "react";

export const Card = ({ img, title, description, url, favorite }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={img} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="card-footer d-flex justify-content-between">
                    <a href={url} className="btn btn-primary">
                        Learn more!
                    </a>
                    {favorite}?
                    <button type="button" className="btn">
                        like
                    </button>
                    :
                    <button type="button" className="btn">
                        dislike
                    </button>
                </div>
            </div>
        </div>
    );
};
