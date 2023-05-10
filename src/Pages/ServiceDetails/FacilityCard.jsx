import React from 'react';

const FacilityCard = ({ fy }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{fy.name}</h2>
                <p>{fy.details}</p>
            </div>
        </div>
    );
};

export default FacilityCard;