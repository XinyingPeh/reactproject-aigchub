import React, { useState } from "react";
import useAirtableData from "./useAirtableData";
import ToolList from "./ToolList";
import Spinner from "./Spinner";
import "./Tools.css";

function Tools() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [sortByRating, setSortByRating] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const { data, loading } = useAirtableData("appRX8b7Oayi2WoUa", "tools");

  const handleTagChange = (selectedTag) => {
    setSelectedTag(selectedTag);
  };

  const handleRatingChange = (sortByRating) => {
    setSortByRating(sortByRating);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleResetAll = () => {
    setSelectedTag(null);
    setSortByRating(null);
    setSearchQuery("");
  };

  return (
    <div className="tools-container">
      
      <div className="follow-header">
        <h1 className="display-5" style={{ marginTop: "6rem" }}>Pick any tools to get started</h1>
        <p className="lead"> Browse and click on grey tag to filter </p>
      </div>
      <div className="tools-controls">
        <label htmlFor="rating-filter" className="fs-5">Sort by: </label>
        <select
          id="rating-filter"
          value={sortByRating || ""}
          onChange={(event) => handleRatingChange(event.target.value)}
        >
          <option value="" >Rating</option>
          <option value="highest">Highest to Lowest</option>
          <option value="lowest">Lowest to Highest</option>
        </select>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search keywords"
        />
        <button
          className="btn btn-secondary"
          onClick={handleResetAll}
        >
           Reset all 
        </button>
        
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <ToolList
          data={data}
          selectedTag={selectedTag}
          sortByRating={sortByRating}
          onTagChange={handleTagChange}
          searchQuery={searchQuery}
        />
      )}
    </div>
  );
}

export default Tools;
