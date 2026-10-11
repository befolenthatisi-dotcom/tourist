import { useState } from "react";
import attractions from "../data/Attractions";
import AttractionCard from "../components/AttractionCard";
import SearchFilter from "../components/SearchFilter";
import AttractionDetails from "../components/AttractionDetails";

function Attraction() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const handleSelect = (attraction) => {
    setSelected(attraction);
  };

  const handleClose = () => {
    setSelected(null);
  };

  const categories = ["All", ...new Set(attractions.map((a) => a.category))];

    const filtered = attractions.filter((a) => {
    const matchesName = a.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || a.category === category;
    return matchesName && matchesCategory;
  });

  return (
    <div className="page">
      <h1 className="page-title">Explore Attractions</h1>

      <SearchFilter
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        categories={categories}
      />

      <p className="results-count">
        Showing {filtered.length} of {attractions.length} attractions
      </p>

      {filtered.length > 0 ? (
        <div className="card-grid">
          {filtered.map((item) => (
            <AttractionCard key={item.id} attraction={item} onSelect={handleSelect} />
          ))}
        </div>
      ) : (
        <p className="no-results">No attractions match your search.</p>
      )}

      {selected && (
        <AttractionDetails attraction={selected} onClose={handleClose} />
      )}
    </div>
  );
}

export default Attraction;