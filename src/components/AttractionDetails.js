import { useEffect } from "react"; 
import { Link } from "react-router-dom"; 
 
function AttractionDetails({ attraction, onClose }) { 
  // Close the modal when the Escape key is pressed 
  useEffect(() => { 
    const handleKey = (e) => { 
      if (e.key === "Escape") onClose(); 
    }; 
    document.addEventListener("keydown", handleKey); 
    return () => document.removeEventListener("keydown", handleKey); 
  }, [onClose]); 
 
  const { 
    name, 
    image, 
    location, 
    category, 
    details, 
    bestTime, 
    activities, 
    cost, 
  } = attraction; 
 
  return ( 
    <div className="modal-overlay" onClick={onClose}> 
      <div className="modal" onClick={(e) => e.stopPropagation()}> 
        <button className="modal-close" onClick={onClose} aria-label="Close"> 
          ✕ 
        </button> 
 
        <img src={image} alt={name} className="modal-img" /> 
 
        <div className="modal-body"> 
          <span className="card-category">{category}</span> 
          <h2>{name}</h2> 
          <p className="card-location"> {location}</p> 
 
          <p>{details}</p> 
 
          <h4>Best time to visit</h4> 
          <p>{bestTime}</p> 
 
          <h4>Activities available</h4> 
          <ul className="activity-list"> 
            {activities.map((activity) => ( 
              <li key={activity}>{activity}</li> 
            ))} 
          </ul> 
 
          <h4>Estimated cost</h4> 
          <p> {cost}</p> 
 
          <Link to="/contact" className="btn modal-btn"> 
            Make an Enquiry 
          </Link> 
        </div> 
      </div> 
    </div> 
  ); 
} 
 
export default AttractionDetails;