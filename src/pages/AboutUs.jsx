import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AboutUs.css';
import malisamaj from '../assets/malisamaj.jpg';
import groupPic from '../assets/groupPic.jpg';
import bhasadiwas from '../assets/Bhasadiwas.jpg';
import bhasadiwas1 from '../assets/Bhasadiwas1.jpg';
import bhasadiwas2 from '../assets/Bhasadiwas2.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Navbar />
      <div className="about-content">
        <nav className="about-nav">
          {/* <a href="#vision" className="nav-link active">Our Vision</a> */}
           <a href="#history" className="nav-link active">History/Origination</a>
          <a href="#mali-people" className="nav-link">Who Are Mali People?</a>
          <a href="#mission" className="nav-link" >Mission/Objective</a>
          <a href="#achievements" className="nav-link">Achievements</a>
         
        </nav>

        {/* Our Vision Section */}
        {/* <section id="vision" className="about-section">
          <h2 className="section-title">Our Vision</h2>
          <p className="section-text">
            The vision of Nepal Mali Samaj is to create a more secure, connected world. We transform your identity into a touchless ID, allowing you to quickly and securely confirm your identity, unlocking frictionless experiences across the physical and digital world.
          </p>
          <div className="section-images">
            <img src={malisamaj} alt="Vision Representation 1" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
            <img src={groupPic} alt="Vision Representation 2" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
            <img src={bhasadiwas} alt="Vision Representation 3" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
          </div>
        </section> */}

         <section id="history" className="about-section">
          <h2 className="section-title">History/Origination</h2>
          <div className="history-content">
            <p className="section-text">
              The origin of Nepal Mali Samaj is deeply intertwined with the history and identity of the Newar community of the Kathmandu Valley. Traditionally recognized by surnames such as Mali, Malakar, Banmala, and Banmali, this group held a significant place in society during the Malla era. At that time, King Jayasthiti Malla had introduced a caste-based occupational system, in which the Mali were entrusted with the responsibility of growing flowers and collecting botanical offerings used in various religious and social rituals. This role gave the community a meaningful connection to cultural and spiritual life in Nepal.
            </p>
            {/* <div className="section-images">
              <img src={bhasadiwas2} alt="Historical Context 1" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
              <img src={malisamaj} alt="Historical Context 2" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
            </div> */}
            <p className="section-text">
              Despite this historical contribution, many people found themselves struggling in modern times, largely due to poverty, lack of education, and limited access to opportunities. The community remained marginalized and was not able to participate equally in the wave of national development. Cultural and religious conservatism, combined with limited awareness, led to a lack of social progress in many areas where the Mali people resided.
            </p>
            <div className="section-images">
              <img src={groupPic} alt="Modern Struggles 1" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
              <img src={bhasadiwas} alt="Modern Struggles 2" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
            </div>
            <p className="section-text">
              Around the early 2050 BS, this reality began to change. Following the democratic movement of 2046 BS, various ethnic communities in Nepal started forming their own organizations to protect and promote their cultural identity. During this time, a few educated youths from the Mali community in Kathmandu expressed a desire to establish a formal community organization. However, due to a lack of resources, commitment, and coordination, their ideas didn’t take shape immediately.
            </p>
            {/* <div className="section-images">
              <img src={bhasadiwas1} alt="Early Efforts 1" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
              <img src={malisamaj} alt="Early Efforts 2" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
            </div> */}
            <p className="section-text">
              The turning point came in 2056 BS, when efforts were renewed with greater seriousness. Several key figures from the community began reaching out to different areas with a significant Mali population. These included Tirtha Narayan Mali, Bekha Ratna Mali, Shankha Narayan Mali, Amar Narayan Mali, Kiran Bhakta Mali, Mohanlal Mali, and others. Their dedication played a vital role in connecting the scattered members of the community and encouraging unity. They visited households, held informal discussions, and emphasized the importance of building an organization that could represent the voice and interests of the Mali community.
            </p>
            {/* <div className="section-images">
              <img src={groupPic} alt="Key Figures 1" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
              <img src={bhasadiwas2} alt="Key Figures 2" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
              <img src={bhasadiwas} alt="Key Figures 3" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
            </div> */}
            <p className="section-text">
              These efforts culminated in a significant event when a large gathering was held at the residence of Tirtha Narayan Mali in Tripureshwor, Kathmandu. Representatives from different areas where the Mali population lived attended this meeting. It marked the beginning of a structured initiative to formally establish Nepal Mali Samaj. In this gathering, discussions were held about drafting a constitution, registering the organization, and planning for long-term community mobilization.
            </p>
            <div className="section-images">
              <img src={bhasadiwas1} alt="Founding Meeting 1" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
              <img src={malisamaj} alt="Founding Meeting 2" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
            </div>
            <p className="section-text">
              Following this, a second meeting was held in which a nine-member interim committee was formed. It was also decided that two founding members from Bhaktapur would be included to ensure broader representation. With these foundational steps in place, Nepal Mali Samaj was officially registered at the District Administration Office, a certificate of registration was obtained, and a full meeting of the founding members was held. From there, the process of expanding membership and organizing community programs formally began.
            </p>
            {/* <div className="section-images">
              <img src={groupPic} alt="Official Registration 1" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
              <img src={bhasadiwas2} alt="Official Registration 2" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
            </div> */}
            <p className="section-text">
              Since its establishment, Nepal Mali Samaj has stood as a unifying platform for Mali individuals within the Newar community, working to preserve cultural identity, promote education, and uplift the socio-economic status of its members through collective effort and shared vision.
            </p>
            <div className="section-images">
              <img src={bhasadiwas} alt="Community Unity 1" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
              <img src={bhasadiwas1} alt="Community Unity 2" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
              <img src={malisamaj} alt="Community Unity 3" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
            </div>
          </div>
        </section>
        
        {/* Who Are Mali People? Section */}

        <section id="mali-people" className="about-section">
          <h2 className="section-title">Who Are Mali People?</h2>
          <p className="section-text">
            The Mali community is an ancient and indigenous group of the Newar community in the Kathmandu Valley, known for their deep connection with farming, especially growing flowers and vegetables. Often referred to by various names such as Malakar, Banmala, Banmali, and Banmalakar, they have lived in the valley for many generations, quietly supporting society through their hard work in agriculture, religious activities, and festivals. Historically, due to the feudal system, the Mali community faced exploitation and neglect, which hindered their socio-economic development compared to other castes. There is no concrete historical record confirming the exact origin of the Mali people. Some unverified legends suggest they migrated from Mathura, India, with Lord Krishna, but scholars view this as a myth created through attempts at religious understanding.
          </p>
          <p className="section-text">
            In local terms, Mali people are also known as “Gathu”, which refers to someone who is involved in gardening and plant-related work. The name reflects their deep bond with nature and the land. They were mainly responsible for growing flowers and preparing religious items used in temples and homes. Their flowers were offered to gods and goddesses during daily worship, and their fresh vegetables were sold in local markets, feeding the people of the valley.
          </p>
          <p className="section-text">
            Long ago, during the time of kings, the Mali community had a special role in supporting temples, royal gardens, and cultural traditions. They were trusted to take care of temple grounds, decorate with flowers, and help in major religious ceremonies. Their skills were not only useful but also respected, as they helped preserve the beauty and spirituality of Nepali traditions. They also have a strong presence in important cultural dances like the Pachali Bhairav Jatra and Bhadrakali Jatra, where their participation in playing traditional instruments is essential to commencing the event. Even today, despite changes in society and modern lifestyles, the Mali people continue to hold on to their traditions, values, and cultural pride.
          </p>
          <div className="section-images">
            <img src={bhasadiwas} alt="Mali Farming" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
            <img src={bhasadiwas1} alt="Cultural Role" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
            <img src={groupPic} alt="Mali Traditions" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
          </div>
        </section>

        {/* Mission/Objective Section */}
        <section id="mission" className="about-section">
          <h2 className="section-title">Mission/Objective</h2>
          <p className="section-text">
            Nepal Mali Samaj is dedicated to uniting and uplifting the Mali community across the country. Our mission is to protect our cultural identity, promote social harmony, and create opportunities for growth in education, skills, and leadership. Nepal Mali Samaj was first established to bring together scattered members of the Mali community and to address the lack of representation, recognition, and support they faced in various social and governmental platforms. We aim to encourage the younger generation to take pride in their roots while also moving forward with modern knowledge and confidence. Through various programs and activities, we focus on education, awareness, and empowerment especially for students and youth.
          </p>
          <p className="section-text">
            One of our key objectives is to preserve and promote our unique traditions, festivals, and cultural practices, so they are passed on with pride to future generations. We also focus on social support, whether it is helping members during times of difficulty, supporting families, or encouraging community service. By organizing community programs and awareness campaigns, Nepal Mali Samaj continues to build a stronger, more united community that moves forward with purpose, pride, and progress.
          </p>
          <div className="section-images">
            <img src={malisamaj} alt="Community Unity" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
            <img src={bhasadiwas2} alt="Education Programs" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="about-section">
          <h2 className="section-title">Achievements</h2>
          <p className="section-text">
            Nepal Mali Samaj has continuously worked towards uplifting the community through education, unity, and social support. One of the most impactful achievements is the scholarship and award program dedicated to encouraging academic excellence among Mali students. Every year, students who pass their SEE and +2 examinations with outstanding results are honored and awarded for their hard work. This initiative has not only motivated students to focus on their studies but has also built a sense of pride within the community regarding education and personal growth. They have also established a youth committee where 18 young individuals work together and contribute to the community through various social and cultural activities. In addition, they have launched their own podcast, aiming to introduce the hidden gems of Mali Samaj to the world and highlight inspiring stories from the community.
          </p>
          <div className="section-images">
            <img src={groupPic} alt="Scholarship Program" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
            <img src={bhasadiwas1} alt="Youth Committee" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
            <img src={bhasadiwas2} alt="Podcast Launch" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
          </div>
        </section>

        {/* History/Origination Section */}
       
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;