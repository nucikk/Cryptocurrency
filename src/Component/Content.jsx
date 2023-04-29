import React from "react";
import "../Style/content.css";
import contentData from "../Server/contentData";


const Content = () => {
 
  return (
    <div className="content_section">
      {contentData.map((content) => (
        <div key={content.id} className="content_card">
          <div className="content_photo">
            <img src={content.photoSrc} alt={content.title} />
          </div>
          <div className="content_info">
            <div className="content_category">{content.category}</div>
            <div className="content_reading_time">{content.readingTime}</div>
            <div className="content_title">{content.title}</div>
            <div className="content_description">{content.description}</div>
            <button className="content_read_more">Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
