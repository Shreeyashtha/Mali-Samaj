import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Home.css';
import bhasadiwas from '../assets/Bhasadiwas.jpg';
import bhasadiwas1 from '../assets/Bhasadiwas1.jpg';
import bhasadiwas2 from '../assets/Bhasadiwas2.jpg';
import event from '../assets/event.jpg';
import event1 from '../assets/event1.jpg';
import groupPic from '../assets/groupPic.jpg';
import groupPic1 from '../assets/groupPic1.jpg';
import malisamaj from '../assets/malisamaj.jpg';
import malisamajLogo from '../assets/malisamajLogo.png';
import { FaYoutube, FaPlay } from 'react-icons/fa';

const Home = () => {
  const [isVisible, setIsVisible] = useState({
    'animate-about': true,
    'animate-features': true,
    'animate-news': true,
    'animate-video': true,
  });

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

    document.querySelectorAll('[id^="animate-"]:not(#animate-hero) .hero-image').forEach((el) => {
      observer.observe(el);
    });

    // Ensure initial visibility
    setIsVisible((prev) => ({
      ...prev,
      'animate-news': true,
      'animate-video': true,
    }));

    return () => observer.disconnect();
  }, []);

  const youtubeVideos = [
    {
      title: "Kuma Sagar ko Rawness Manpareko ho",
      videoLink: "https://www.youtube.com/watch?v=Izg9LXzieAQ&t=2s",
    },
    {
      videoLink: "https://www.youtube.com/watch?v=azQx7vNBiAI",
    },
    {
      videoLink: "https://www.youtube.com/watch?v=puiBLuk3WSM",
    },
  ];

  const getVideoId = (url) => {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get('v') || '';
  };

  const newsEvents = [
    {
      image: bhasadiwas,
      title: "Community Gathering 2024",
      description: "A wonderful community gathering celebrating our cultural heritage and unity among all members of Nepal Mali Samaj. This event featured traditional dances, music, and a special address by community leaders.",
    },
    // {
    //   image: event,
    //   title: "Cultural Festival",
    //   description: "Annual cultural festival showcasing traditional dances, music, and customs of our community with great enthusiasm. Highlights included a parade and a craft exhibition by local artisans.",
    // },
    {
      image: groupPic,
      title: "Educational Workshop",
      description: "Educational workshop focusing on skill development and career guidance for our youth and community members. The workshop included sessions on digital literacy and entrepreneurship.",
    },
    {
      image: bhasadiwas1,
      title: "Mother Tongue Day",
      description: "Celebrating International Mother Tongue Day with cultural programs and language preservation initiatives. The event featured poetry recitals and a language workshop for children.",
    },
  ];

  return (
    <div className="home-container">
      <Navbar />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              NEPAL<br />
              MALI SAMAJ
            </h1>
            <div className="hero-image">
              <img src={malisamaj} alt="Community Leader" className="hero-image-static" onError={(e) => { e.target.src = 'https://via.placeholder.com/300x300'; }} />
            </div>
            <p className="hero-subtitle">Unity • Heritage • Progress</p>
            <p className="hero-description">
              Nepal Mali Samaj, founded in 2057 BS, is a NGO formed to uplift, support and bring together the Mali, Malakar, and related groups. Since its beginning, it has been actively involved in organizing social events, supporting members, and creating a strong sense of connection among people.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Join Community</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Enhanced Animations */}
      <section className="about-section" id="animate-about">
        <div className="container">
          <div className={`section-header ${isVisible['animate-about'] ? 'fade-in-up' : ''}`}>
            <h2 className="section-title">Committed to Community, Culture, and Growth</h2>
            {/* <h3 className="section-subtitle">Committed to Community, Culture, and Growth</h3>
            <p className="section-description">
              The Nepal Mali Samaj is a vibrant community organization dedicated to preserving
              our cultural heritage while fostering unity and progress among our members worldwide.
            </p> */}
          </div>

          <div className="features-grid" id="animate-features">
            <div className={`feature-card ${isVisible['animate-features'] ? 'slide-in-left' : ''}`}>
              <div className="feature-image">
                <img src={bhasadiwas2} alt="Preserving Heritage" onError={(e) => { e.target.src = 'https://via.placeholder.com/200x200'; }} />
                <div className="feature-overlay">
                  <div className="feature-icon">🏛️</div>
                </div>
              </div>
              <div className="feature-content">
                <h4>Preserving Heritage</h4>
                <p>Maintaining our traditional values and customs for future generations</p>
              </div>
            </div>
            
            <div className={`feature-card ${isVisible['animate-features'] ? 'slide-in-up' : ''}`} style={{animationDelay: '0.10s'}}>
              <div className="feature-image">
                <img src={event1} alt="Supporting Members" onError={(e) => { e.target.src = 'https://via.placeholder.com/200x200'; }} />
                <div className="feature-overlay">
                  <div className="feature-icon">🤝</div>
                </div>
              </div>
              <div className="feature-content">
                <h4>Supporting Members</h4>
                <p>Providing assistance and resources to strengthen our community bonds</p>
              </div>
            </div>
            
            <div className={`feature-card ${isVisible['animate-features'] ? 'slide-in-left' : ''}`} style={{animationDelay: '0.15s'}}>
              <div className="feature-image">
                <img src={groupPic1} alt="Promoting Growth" onError={(e) => { e.target.src = 'https://via.placeholder.com/200x200'; }} />
                <div className="feature-overlay">
                  <div className="feature-icon">📈</div>
                </div>
              </div>
              <div className="feature-content">
                <h4>Promoting Growth</h4>
                <p>Encouraging education and economic development within our community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced News Section with Alternating Layout */}
      <section className="news-section" id="animate-news">
        <div className="container">
          <div className={`section-header ${isVisible['animate-news'] ? 'fade-in-up' : ''}`}>
            <h2 className="section-title">RECENT NEWS AND EVENTS</h2>
            {/* <p className="section-description">
              Stay updated with our latest community activities and cultural celebrations
            </p> */}
          </div>
          
          <div className="news-grid">
            {newsEvents.map((event, index) => (
              <div 
                key={index} 
                className={`news-item ${isVisible['animate-news'] ? 'slide-in-view' : ''} ${index % 2 === 0 ? 'news-item-left' : 'news-item-right'}`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="news-image">
                  <img src={event.image} alt={event.title} onError={(e) => { e.target.src = 'https://via.placeholder.com/300x300'; }} />
                  <div className="news-overlay">
                    <div className="news-date">2024</div>
                  </div>
                </div>
                <div className="news-content">
                  <h3 className="news-title">{event.title}</h3>
                  <p className="news-description">{event.description}</p>
                  <p className="news-additional">This event was a great success with over 200 attendees, featuring guest speakers and interactive sessions. Photos and videos are available on our social media pages.</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* <div className={`news-summary ${isVisible['animate-news'] ? 'fade-in-up' : ''}`}>
            <p>
              Join us in celebrating our vibrant community spirit! Recent events include rallies for 
              cultural heritage and unity, such as the Mother Tongue Day and community gatherings. 
              Stay tuned for more programs that strengthen our bonds and honor our rich traditions.
            </p>
          </div> */}
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="container">
          <div className="video-header">
            <h2 className="section-title">OUR PODCAST</h2>
            <p className="video-subtitle">
              Watch inspiring stories, cultural discussions, and community insights from Nepal Mali Samaj.
            </p>
          </div>

          <div className="video-content">
            <div className="video-grid" id="animate-video">
              {youtubeVideos.map((video, index) => (
                <div key={index} className={`video-card ${isVisible['animate-video'] ? 'slide-in-up' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="video-thumbnail">
                    <img 
                      src={`https://img.youtube.com/vi/${getVideoId(video.videoLink)}/mqdefault.jpg`} 
                      alt={video.title || `Video ${index + 1}`}
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/250x140'; }}
                    />
                    <div className="play-overlay">
                      <FaPlay size={20} color="white" />
                    </div>
                  </div>
                  <div className="video-info">
                    <h4 className="video-title">{video.title || `Episode ${index + 1}`}</h4>
                  </div>
                  <div className="video-actions">
                    <a href={video.videoLink} target="_blank" rel="noopener noreferrer">
                      <FaYoutube size={20} color="#ff0000" />
                    </a>
                    <span className="platform-text">Watch on YouTube</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;