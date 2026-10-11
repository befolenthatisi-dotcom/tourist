  function SearchFilter ({ search, onSearchChange, category, onCategoryChange, categories }) { 
 
    return ( 
        <div className="filter-bar"> 
            <input 
            type="text" 
            placeholder="Search attractions by name..." 
            value={search} 
            onChange={(e)=> onSearchChange (e.target.value)} 
            className="filter-input"/> 
 
            <select  
            value = {category} 
            onChange={(e) => onCategoryChange(e.target.value)} 
            className="filter-select"> 
             
            {categories.map((cat) => ( 
                <option key={cat} value={cat}> 
                    {cat} 
                </option> 
            ))} 
 
            </select> 
 
        </div> 
    ); 
} 
 
export default SearchFilter; 