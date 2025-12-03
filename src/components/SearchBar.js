import React, { useState } from "react";
import productsData from "./productsData";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


function SearchBar() {
  const [query, setQuery] = useState("");
  const [showList, setShowList] = useState(false);

  const sorted = [...productsData].sort((a, b) => {
    if (a.category === "Brand") return 1;
    if (b.category === "Brand") return -1;
    return 0;
  });


  const filtered = sorted
    .map((group) => ({
      category: group.category,
      items: group.items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="search-box">
      <div className="search-input-wrapper">
       <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        <input
          type="text"
          placeholder="Search for products, brands and more"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowList(true);
          }}
          onBlur={() => setTimeout(() => setShowList(false), 200)}
        />
      </div>

      {showList && query && (
        <ul className="search-suggestion-list">
          {filtered.length === 0 ? (
            <li className="no-result">No results found</li>
          ) : (
            filtered.map((group, idx) => (
              <li key={idx} className="category-block">
                <p className="category-title">{group.category}</p>

                {group.items.map((item) => (
                  <div
                    key={item.id}
                    className="suggestion-item"
                    onClick={() => (window.location.href = item.link)}
                  >
                    {item.name}
                  </div>
                ))}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
