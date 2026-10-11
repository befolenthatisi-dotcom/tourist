 import { useState } from "react"; 
import { NavLink } from "react-router-dom"; 
 
function Header() { 
  const [menuOpen, setMenuOpen] = useState(false); 
 
  const closeMenu = () => setMenuOpen(false); 
 
  return ( 
    <header className="header"> 
      <div className="header-inner"> 
        <NavLink to="/" className="logo" onClick={closeMenu}> 
          Visit Lesotho 
        </NavLink> 
 
        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="Toggle menu" 
        > 
          {menuOpen ? "✕" : "☰"} 
        </button> 
 
        <nav className={`nav ${menuOpen ? "open" : ""}`}> 
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink> 
          <NavLink to="/attraction" onClick={closeMenu}>Attraction</NavLink> 
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink> 
        </nav> 
      </div> 
    </header> 
  ); 
} 
 
export default Header;