import React from "react";
import FollowItem from "./FollowItem";

function FollowList({ data, selectedPosition, searchQuery, onPositionClick }) {
  const filteredData = data.filter((follow) => {
    const { UserName, About, Position, Company } = follow.fields;
    const query = searchQuery.toLowerCase();

    return (
      UserName.toLowerCase().includes(query) ||
      About.toLowerCase().includes(query) ||
      (Position && Position.join(", ").toLowerCase().includes(query)) ||
      Company.toLowerCase().includes(query)
    );
  });

  const filteredDataByPosition = selectedPosition
    ? filteredData.filter((follow) =>
        follow.fields.Position.includes(selectedPosition)
      )
    : filteredData;

  const finalData = searchQuery || selectedPosition ? filteredDataByPosition : data;

  return (
    <div>
      {finalData.length > 0 ? (
        finalData.map((follow) => (
          <FollowItem
            key={follow.id}
            follow={follow}
            onPositionClick={onPositionClick}
          />
        ))
      ) : (
        <p>No search results</p>
      )}
    </div>
  );
}

export default FollowList;
