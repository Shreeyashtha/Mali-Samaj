import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/YouthCommittee.css';
import agmaImage from '../assets/Agma_Malakar.jpg';
import lunivaImage from '../assets/Luniva_Malakar.jpg';
import lukeshImage from '../assets/Lukesh_Mali.jpg';
import sabiImage from '../assets/Sabi_Malakar.jpeg';
import rajjuImage from '../assets/Rajju_Mali.jpeg';
import rasikImage from '../assets/Rasik_Mali_Malakar.jpeg';
import samiImage from '../assets/Sami_Mali.jpg';
import swikritiImage from '../assets/Swikriti_Malakar.jpg';
import profileImage from '../assets/profile.png';
import rashmiImage from '../assets/Rashmi_Banmala.jpeg';

const YouthCommittee = () => {
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

  const committeeMembers = [
    { name: "Agma Malakar", position: "President", image: agmaImage, type: "leader" },
    { name: "Bikash Mali", position: "Vice President", image: profileImage, type: "leader" },
    { name: "Sabi Malakar", position: "Team Member", image: sabiImage, type: "member" },
    { name: "Rasik Mali Malakar", position: "Team Member", image: rasikImage, type: "member" },
    { name: "Sami Mali", position: "Team Member", image: samiImage, type: "member" },
    { name: "Romi Mali", position: "Team Member", image: profileImage, type: "member" },
    { name: "Luniva Malakar", position: "Team Member", image: lunivaImage, type: "member" },
    { name: "Mukesh Malakar", position: "Team Member", image: profileImage, type: "member" },
    { name: "Swikriti Malakar", position: "Team Member", image: swikritiImage, type: "member" },
    { name: "Anjali Malakar", position: "Team Member", image: profileImage, type: "member" },
    { name: "Kajal Banmala", position: "Team Member", image: profileImage, type: "member" },
    { name: "Pranisha Mali", position: "Team Member", image: profileImage, type: "member" },
    { name: "Sarita Malakar", position: "Team Member", image: profileImage, type: "member" },
    { name: "Rashmi Banmala", position: "Team Member", image: rashmiImage, type: "member" },
    { name: "Lukesh Mali", position: "Team Member", image: lukeshImage, type: "member" },
    { name: "Nabin Mali", position: "Team Member", image: profileImage, type: "member" },
    { name: "Rajju Mali", position: "Team Member", image: rajjuImage, type: "member" },
  ];

  const leaders = committeeMembers.filter(member => member.type === "leader");
  const members = committeeMembers.filter(member => member.type === "member");

  // Split members into groups of 4 for rows
  const membersPerRow = 4;
  const memberRows = [];
  for (let i = 0; i < members.length; i += membersPerRow) {
    memberRows.push(members.slice(i, i + membersPerRow));
  }

  return (
    <div className="youth-container">
      <Navbar />
      
      <main className="youth-section">
        <div className="container">
          <div className="section-header" id="animate-header">
            <h1 className={`page-title ${isVisible['animate-header'] ? 'fade-in' : ''}`}>
              MEET OUR YOUTH COMMITTEE
            </h1>
            <div className="title-underline"></div>
          </div>

          <div className="team-structure" id="animate-team">
            {/* Leaders Section */}
            <div className="team-section leaders-section">
              <div className="team-grid leaders-grid">
                {leaders.map((member, index) => (
                  <div 
                    key={index} 
                    className={`member-card leader-card ${isVisible['animate-team'] ? 'slide-up' : ''}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="card-background">
                      <div className="orange-accent"></div>
                    </div>
                    <div className="member-photo">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="member-details">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-position">{member.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Members Section */}
            <div className="team-section members-section">
              <div className="team-grid members-grid">
                {memberRows.map((row, rowIndex) => (
                  <div key={rowIndex} className="member-row">
                    {row.map((member, index) => (
                      <div 
                        key={index} 
                        className={`member-card team-member-card ${isVisible['animate-team'] ? 'fade-in-up' : ''}`}
                        style={{ animationDelay: `${(rowIndex * membersPerRow + index) * 0.1}s` }}
                      >
                        <div className="card-background">
                          <div className="orange-accent"></div>
                        </div>
                        <div className="member-photo">
                          <img src={member.image} alt={member.name} />
                        </div>
                        <div className="member-details">
                          <h5 className="member-name">{member.name}</h5>
                          <p className="member-position">{member.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default YouthCommittee;