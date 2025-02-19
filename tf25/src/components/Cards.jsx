import React from 'react';
// import events from '../../public/eventData';

const Card = ({ title, details, img }) => {

  return (
    <div className="p-2 card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={img}
      alt="img" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{details}</p>
    <div className="card-actions justify-end">
      <button className="mt-5 border rounded-e-xs text-[10px] btn btn-primary bg-red-400">Explore Now</button>
    </div>
  </div>
</div>
  );
};

export default Card;