import React from "react";
import { Card } from "./Card.js";

export function Section({ title, elements }) {
    return (
        <>
            <h2>{title}</h2>
            <div className="overflow-x-auto">
                {elements.map((element) => {
                    return <Card prop={element} />;
                })}
            </div>
        </>
    );
}