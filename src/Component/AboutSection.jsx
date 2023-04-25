import React from "react";
import "../Style/about.css";

function AboutSection() {
  return (
    <div className="blog_section">
      <div className="news_section">
        <h3 className="blog_heading">Blog</h3>
        <h1 className="news_heading">News and insights</h1>
        <div className="news_description">
          <p>Learn about cryptocurrency, NFTs, and blockchain, </p>
          <p>discover our latest product updates, partnership</p>
          <p>announcements, user stories, and more.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
