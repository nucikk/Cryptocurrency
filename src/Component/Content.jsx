import React from "react";
import "../Style/content.css";
import BlockchainImg from "../Image/Image1.png";
import PeopleImg from "../Image/Image2.png";
import NTFImg from "../Image/Image3.png";
import EngineeringImg from "../Image/Image4.png";
import CryptoImg from "../Image/Image5.png";
import BlockchainImg2 from "../Image/Image6.png";
const Content = () => {
  const contentData = [
    {
      id: 1,
      photoSrc: BlockchainImg,
      category: "Blockchain",
      readingTime: "5 min read",
      title: "A Beginner's Guide to Blockchain for Engineers",
      description:
        "This course provides an introduction to blockchain technology...",
    },
    {
      id: 2,
      photoSrc: PeopleImg,
      category: "People",
      readingTime: "10 min read",
      title: "The Role of People in the Future of Work",
      description:
        "In this course, we explore the evolving role of people in the modern workplace...",
    },
    {
      id: 3,
      photoSrc: NTFImg,
      category: "NTF",
      readingTime: "7 min read",
      title: "Understanding Non-Fungible Tokens",
      description:
        "In this course, we explore the world of non-fungible tokens (NFTs)...",
    },
    {
      id: 4,
      photoSrc: EngineeringImg,
      category: "Engineering",
      title: "How to Build a Neural Network",
      description:
        "Learn how to build and train a neural network for machine learning applications.",
      readingTime: "5 min read",
    },
    {
      id: 5,
      photoSrc: CryptoImg,
      category: "Crypto",
      title: "Introduction to Cryptocurrency",
      description:
        "Discover the basics of cryptocurrency and how it's transforming the financial world.",
      readingTime: "7 min read",
    },
    {
      id: 6,
      photoSrc: BlockchainImg2,
      category: "Blockchain",
      title: "Smart Contracts and Decentralized Applications",
      description:
        "Explore the power of smart contracts and decentralized applications on the blockchain.",
      readingTime: "6 min read",
    },
  ];

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
