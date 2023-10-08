import React from "react";
import { Link } from "react-router-dom";

const NewsCards = ({aNews}) => {
  const { title,thumbnail_url,
    image_url,details, _id  } = aNews;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {
            details.length > 200 ? <p className="text-sm">{details.slice(0,200)} <Link to={`/aNews/${_id}`} className="text-blue-500">Read More..</Link></p>
            :
           <p className="text-sm"> {details}</p>
        }
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
