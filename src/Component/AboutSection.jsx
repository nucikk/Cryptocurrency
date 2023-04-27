import React, { useState } from "react";
import "../Style/about.css";
import { Link } from "react-router-dom";

function AboutSection() {
  const [showAll, setShowAll] = useState(false);

  const buttons = [
    { name: "View all", onClick: () => setShowAll(true) },
    { name: "Crypto"},
    { name: "Blockchain"},
    { name: "Announcements"},
    { name: "People"},
    { name: "Engineering"},
    { name: "NTF"},
  ];

  return (
    <>
      <div className="blog_section">
        <div className="news_section">
          <h3 className="blog_heading">Blog</h3>
          <h1 className="news_heading">News and insights</h1>
          <div className="news_description">
            <p>Learn about cryptocurrency, NFTs, and blockchain, </p>
            <p>discover our latest product updates, partnership</p>
            <p>announcements, user stories, and more.</p>
            <div className="news_box_btn">
            {buttons
                .filter((_, index) => showAll || index < 5) 
                .map((button, index) => (
                  <button
                    key={index}
                    className="btn_insight"
                    onClick={button.onClick}
                  >
                    {button.name}
                  </button>
                ))}
              <div className="btn_show_all">
                <button className="btn_insight" onClick={() => setShowAll(true)}>
                  View all
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
