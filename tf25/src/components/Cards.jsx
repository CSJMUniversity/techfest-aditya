import React from "react";

const Card = ({ title, details, img }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-orange-100 border-2 border-orange-400 transform transition duration-500 hover:scale-105">
      <figure>
        <img
          src={img}
          alt="Event"
          className="w-full h-52 object-cover rounded-t-xl"
        />
      </figure>
      <div className="p-5">
        <h2 className="text-xl font-bold text-orange-700">{title}</h2>
        <p className="text-orange-600 mt-2 text-sm">{details}</p>
        <div className="mt-4 flex justify-end">
          <button className="px-4 py-2 text-white bg-orange-600 rounded-lg shadow-md hover:bg-orange-700 transition">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
