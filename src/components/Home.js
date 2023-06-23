import React from "react";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="home-container d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="ribbon-container">
              <div className="ribbon"></div>
              <div className="ribbon"></div>
              <div className="ribbon"></div>
            </div>
          </div>
          <div className="col-md-7 col-sm-12"> 
            <h1 className="display-5 mt-md-0 mt-5">AI-Generated Content Hub</h1>
            <p className="lead">Discover a wide array of AI-generated content (AIGC) products and services on our React page. Explore our curated collection, offering a range of tools, products, and resources to elevate your content creation process. Additionally, dive into our recommended Twitter account list, featuring handpicked accounts worth following to stay informed about the latest trends and insights in the AI and content creation realms.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
