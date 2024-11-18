import React from "react";
import Star from "../Star/Star";

type StarsCount = 1 | 2 | 3 | 4 | 5;

const Stars: React.FC<{ count: StarsCount }> = ({ count }) => {
    if (count < 1 || count > 5) {
        throw new Error("Invalid star count");
    }
    const stars = Array.from({ length: count }, (_, index) => (
        <Star key={index} />
    ));
   
    return <ul className="card-body-stars">{stars}</ul>;
};

export default Stars;