import React from "react"
import { Link } from "react-router-dom";

const Card = ({ title, description, img }) => {
    return (
      <div className="card">
        <img src={img} alt={title}/>
        <div className="card-body ">
          <p className='card-title '>{title}</p>
          <p className='card-text'>{description}</p>
          <Link to="/details/1">
            <button class="btn btn-dark"> Mas información </button>
          </Link>
        </div>
      </div>
    )
};

export default Card