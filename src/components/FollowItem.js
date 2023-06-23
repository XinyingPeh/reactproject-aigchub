import React from "react";
import "./FollowItem.css";

function FollowItem({ follow, onPositionClick }) {
  const handlePositionClick = (position) => {
    onPositionClick(position);
  };

  return (
    <div className="follow-card">
      <div className="follow-details">
        <h3>{follow.fields.UserName}</h3>
        {follow.fields.Position && (
          <p>
            {follow.fields.Position.map((position, index) => (
              <span
                key={index}
                className="position"
                onClick={() => handlePositionClick(position)}
              >
                {position}
              </span>
            ))}
          </p>
        )}
        <p className="lead text-justify">Company: {follow.fields.Company}</p>
        <p className="lead text-justify">About: {follow.fields.About}</p>

        <a href={follow.fields.URL} className="btn btn-primary">View Twitter profile</a>
      </div>
    </div>
  );
}

export default FollowItem;
