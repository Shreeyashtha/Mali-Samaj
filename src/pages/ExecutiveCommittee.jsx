import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ExecutiveCommittee.css';
import amarNarayanImage from '../assets/Amar_Narayan_Mali.jpg';
import birMayaMaliImage from '../assets/Bir_Maya_Mali.png';
import devRatnaMaliImage from '../assets/Dev_Ratna_Mali.png';
import jeevanMaliImage from '../assets/Jeevan_Mali.png';
import narendraManImage from '../assets/Narendra_Man_Mali.jpg';
import nilendraMaliImage from '../assets/Nilendra_Mali.png';
import niruMaliImage from '../assets/Niru_Mali.jpg';
import rabindraMaliImage from '../assets/Rabindra_Mali.jpg';
import rajKumarBanImage from '../assets/Raj_Kumar_Banmala.png';
import suryaNarayanMalakarImage from '../assets/Surya_Narayan_Malakar.jpg';
import ramRatnaMaliImage from '../assets/Ram_Ratna_Mali.jpg';
import rajuMaliImage from '../assets/Raju_Mali.png';
import rajeshMaliImage from '../assets/Rajesh_Mali.png';
import sangitaMalakarImage from '../assets/Sangita_Mali.jpg';
import yogendraBirMalakarImage from '../assets/Yogendra_Bir_Malakar.jpg';

const ExecutiveCommittee = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="animate-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const executiveMembers = [
    { name: "Amar Narayan Mali", position: "Chairman", image: amarNarayanImage, borderColor: "orange" },
    { name: "Surya Narayan Malakar", position: "Vice Chairman", image: suryaNarayanMalakarImage, borderColor: "orange" },
    { name: "Ram Ratna Mali", position: "Secretary General", image: ramRatnaMaliImage, borderColor: "teal" },
    { name: "Nilendra Mali", position: "Joint Secretary", image: nilendraMaliImage, borderColor: "yellow" },
    { name: "Raju Mali", position: "Treasurer", image: rajuMaliImage, borderColor: "purple" },
    { name: "Narendra Man Mali", position: "Co Treasurer", image: narendraManImage, borderColor: "blue" },
    { name: "Raj Kumar Banmala", position: "Member", image: rajKumarBanImage, borderColor: "gray" },
    { name: "Bir Maya Mali", position: "Member", image: birMayaMaliImage, borderColor: "black" },
    { name: "Rajesh Mali", position: "Member", image: rajeshMaliImage, borderColor: "green" },
    { name: "Dev Ratna Mali", position: "Member", image: devRatnaMaliImage, borderColor: "red" },
    { name: "Sangita Malakar", position: "Member", image: sangitaMalakarImage, borderColor: "teal" },
    { name: "Yogendra Bir Malakar", position: "Member", image: yogendraBirMalakarImage, borderColor: "yellow" },
    { name: "Rabindra Mali", position: "Member", image: rabindraMaliImage, borderColor: "purple" },
    { name: "Jiwan Mali", position: "Member", image: jeevanMaliImage, borderColor: "blue" },
    { name: "Niru Mali", position: "Member", image: niruMaliImage, borderColor: "gray" },
  ];

  return (
    <div className="executive-container">
      <Navbar />
      
      <main className="executive-section">
        <div className="container">
          <div className="section-header" id="animate-header">
            <h1 className={`page-title ${isVisible['animate-header'] ? 'fade-in' : ''}`}>
              Executive Committee
            </h1>
            <div className="title-underline"></div>
          </div>

          <div className="executive-grid" id="animate-team">
            {executiveMembers.map((member, index) => (
              <div 
                key={index} 
                className={`executive-card ${member.borderColor}-border ${isVisible['animate-team'] ? 'fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-image-wrapper">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="member-image"
                  />
                </div>
                <div className="card-content">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExecutiveCommittee;