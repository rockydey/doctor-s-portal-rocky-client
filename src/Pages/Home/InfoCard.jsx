import React from 'react';

const InfoCard = ({ img, cardTitle, cardDes, bgClass }) => {
    return (
        <div className={`card lg:card-side shadow-xl px-10 ${bgClass}`}>
            <figure>
                <img src={img} alt="Album" />
            </figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cardTitle}</h2>
                <p>{cardDes}</p>
            </div>
        </div>
    );
};

export default InfoCard;