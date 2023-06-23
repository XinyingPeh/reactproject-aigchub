import React from "react";
import "./ToolItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function ToolItem({ name, rating, description, tags, image, url, onTagChange }) {
  return (
    <div className="custom-card tool-card"> 
      <div className="row no-gutters">
        <div className="col-md-4 tool-image">
          <div className="card-image">
            <img src={image} alt={name} className="card-img" />
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body tool-details">
            <h5 className="display-9">{name}</h5>
            <div>
              {tags.map((tag, index) => (
                <span key={index} className="tag" onClick={() => onTagChange(tag)}>
                  {tag}
                </span>
              ))}
            </div>
            <p className="lead text-justify">{description}</p>
            
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Give it a try
            </a>
            <p className="lead">Rating: {rating} out of 5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolItem;
