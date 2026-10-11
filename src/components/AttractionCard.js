function AttractionCard({ attraction, onSelect }) { 
  const { name, image, location, category, description, cost } = attraction; 
 
  return ( 
    <article className="card"> 
      <img src={image} alt={name} className="card-img" /> 
      <div className="card-body"> 
        <span className="card-category">{category}</span> 
        <h3>{name}</h3> 
        <p className="card-location"> {location}</p> 
        <p className="card-desc">{description}</p> 
        <p className="card-cost"> {cost}</p> 
        <button className="btn" onClick={() => onSelect(attraction)}> 
          View Details 
        </button> 
      </div> 
    </article> 
  ); 
} 
 
export default AttractionCard;