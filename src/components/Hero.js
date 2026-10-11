 import { Link } from "react-router-dom"; 
 
function Hero() { 
 
     const heroStyle = { 
    backgroundImage: `linear-gradient(rgba(27, 67, 50, 0.6), rgba(27, 67, 50, 0.6)), url(${process.env.PUBLIC_URL}/images/sehlabathebe-national-park.jpg)`, 
  }; 
 
 
    return ( 
        <section className="hero"  style={heroStyle}> 
            <div className="hero-content"> 
                <h1>Welcome to Lesotho</h1> 
                <p>The Kingdom in the Sky: mountains, waterfalls, culture and adventure.</p> 
                <div className="hero-buttons"> 
                   <Link to="/attraction" className="btn hero-btn">
                       Explore Attractions
                   </Link>
                  
                    <Link to="/contact" className="btn hero-btn-outline"> 
                         Plan Your Visit 
                    </Link> 
                </div> 
            </div> 
        </section> 
    ); 
} 
 
export default Hero;