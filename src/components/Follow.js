import React, { useState } from "react";
import useAirtableData from "./useAirtableData";
import FollowList from "./FollowList";
import "./Follow.css";
import Spinner from "./Spinner";

function Follow() {
  const baseId = "appi4Oa0HNTzpdkQY";
  const tableName = "follows";
  const { data, loading } = useAirtableData(baseId, tableName);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handlePositionClick = (position) => {
    setSelectedPosition(position === selectedPosition ? null : position);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleResetAll = () => {
    setSelectedPosition(null);
    setSearchQuery("");
  };

  return (
    <div className="follow-container">
      <div className="header-controls">
        <div className="follow-header">
          <h1 className="display-5">Browse &amp; follow</h1>
          <p className="lead">
            Recommended Twitter accounts to follow for the latest AI and content
          </p>
        </div>
        <div className="follow-controls">
          <input
            type="text"
            placeholder="Search keywords"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button onClick={handleResetAll} className="btn btn-secondary">
            Reset all
          </button>
        </div>
        <div className="follow-spinner-container">{loading && <Spinner />}</div>
      </div>
      {!loading && (
        <FollowList
          data={data}
          selectedPosition={selectedPosition}
          searchQuery={searchQuery}
          onPositionClick={handlePositionClick}
        />
      )}
    </div>
  );
}

export default Follow;
