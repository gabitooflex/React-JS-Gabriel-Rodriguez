const Card = ({ title, description, img }) => {
    return (
      <div className="card">
        <img src={img} alt={title}/>
        <div className="card-body ">
          <p className='card-title '>{title}</p>
          <p className='card-text'>{description}</p>
        </div>
      </div>
    )
};

export default Card