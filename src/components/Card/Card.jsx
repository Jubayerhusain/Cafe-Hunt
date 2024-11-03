/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function Card({ coffee }) {
  const {
    name,
    image,
    category,
    ingredients,
    nutrition_info,
    origin,
    type,
    description,
    making_process,
    rating,
    popularity,
  } = coffee;
  return (
    <div className="card bg-base-100 w-80 mx-auto shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
         {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <p>Popularity: {popularity}</p>
        <p>rating: {rating}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Details</div>
          <div className="badge badge-outline">Add</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
