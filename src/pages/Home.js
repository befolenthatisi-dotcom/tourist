import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import AttractionCard from "../components/AttractionCard";
import AttractionDetails from "../components/AttractionDetails";
import attractions from "../data/Attractions";

const popularActivities = [
  { icon: "🥾", title: "Hiking", text: "Trek through the Maloti Mountains and remote highland trails." },
  { icon: "🐴", title: "Pony Trekking", text: "Explore villages and valleys on the back of a Basotho pony." },
  { icon: "⛷️", title: "Skiing", text: "Ski and snowboard at Afriski, one of Africa's few ski resorts." },
  { icon: "🧗", title: "Abseiling", text: "Descend beside the 192 m Maletsunyane Falls." },
  { icon: "🎨", title: "Cultural Tours", text: "Visit historic sites, rock art and traditional villages." },
  { icon: "🔭", title: "Stargazing", text: "Enjoy clear, dark mountain skies far from city lights." },
];

function Home() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const featured = attractions.slice(0, 3);

  const handleViewAll = () => {
    navigate("/attractions");
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Hero />

      <section className="section about">
        <h2 className="section-title">About Lesotho</h2>
        <p>
          Lesotho is a small, landlocked kingdom completely surrounded by South
          Africa. Known as the "Kingdom in the Sky", it is the only country in
          the world whose land lies entirely above 1,000 metres. Visitors come
          for its dramatic mountains, waterfalls, warm Basotho hospitality and
          rich culture, including the famous Basotho blanket and the
          cone-shaped mokorotlo hat.
        </p>
        <div className="facts">
          <div className="fact"><strong>Capital</strong><span>Maseru</span></div>
          <div className="fact"><strong>Currency</strong><span>Loti (M)</span></div>
          <div className="fact"><strong>Languages</strong><span>Sesotho, English</span></div>
          <div className="fact"><strong>Best Time</strong><span>Year-round</span></div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Featured Destinations</h2>
        <div className="card-grid home-grid">
          {featured.map((item) => (
            <AttractionCard
              key={item.id}
              attraction={item}
              onSelect={setSelected}
            />  
          ))}
        </div>
        <div className="center">
           <button className="btn" onClick={() => navigate("/attraction")}> 
            View All Attractions 
          </button>
        </div>
      </section>

      <section className="section activities-section">
        <h2 className="section-title">Popular Activities</h2>
        <div className="activity-grid">
          {popularActivities.map((a) => (
            <div className="activity-card" key={a.title}>
              <span className="activity-icon">{a.icon}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {selected && (
        <AttractionDetails
          attraction={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

export default Home;