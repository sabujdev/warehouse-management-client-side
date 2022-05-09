import React from 'react';

const Team = ({ team }) => {
    const { name, image } = team;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </div>

    );
};

export default Team;