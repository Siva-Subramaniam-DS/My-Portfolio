import React from 'react';
import { useTheme } from '../context/ThemeContext';
import innova8sLogo from '../assets/innova8s_logo.png';
import inodesysLogo from '../assets/inodesys_logo.png';

const Experience = () => {
  const { content } = useTheme();

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-title">
          <h2>{content.experienceTitle}</h2>
          <div className="underline"></div>
        </div>
        <div className="timeline">
          {/* Innova8s Pte Ltd */}
          <div className="timeline-item">
            <div className="timeline-icon logo-icon">
              <img src={innova8sLogo} alt="Innova8s Logo" />
            </div>
            <div className="timeline-content">
              <span className="date">Jul 2025 - Present · 11 mos</span>
              <h3>AI-ML Consultant</h3>
              <h4>Innova8s Pte Ltd · Full-time</h4>
              <p className="location">
                <i className="fas fa-map-marker-alt"></i> Chennai, Tamil Nadu, India · On-site
              </p>
              <div className="experience-desc">
                <p>At Innova8s Pte Ltd, we believe AI should feel less like complicated technology and more like a tool that empowers people and businesses.</p>
                <p>We specialize in Computer Vision, Machine Learning, and AI automation — but what really drives us is helping organizations turn ideas into real-world solutions. From research to deployment, we make sure AI doesn’t just run in the lab, but scales reliably in production.</p>
                <p>Our team is passionate about building systems that are not only smart and efficient but also practical and impactful. Using tools like PyTorch, TensorFlow, Docker, Kubernetes, and Google Cloud, we bring cutting-edge AI into everyday business operations.</p>
                <p className="highlight-emoji">
                  🌍 Whether it’s automating processes, enhancing decision-making, or unlocking insights from data, we’re here to make AI accessible, scalable, and valuable.
                </p>
              </div>
              <div className="tags">
                <span>Computer Vision</span>
                <span>Machine Learning</span>
                <span>PyTorch</span>
                <span>TensorFlow</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>Google Cloud</span>
              </div>
            </div>
          </div>

          {/* Inodesys Technologies */}
          <div className="timeline-item">
            <div className="timeline-icon logo-icon">
              <img src={inodesysLogo} alt="Inodesys Logo" />
            </div>
            <div className="timeline-content">
              <span className="date">Mar 2024 - Apr 2025 · 1 yr 2 mos</span>
              <h3>AS400 Programmer</h3>
              <h4>Inodesys Technologies · Full-time</h4>
              <div className="experience-desc">
                <p>As a fresher in the Manufacturing domain with JD Edwards, My daily tasks will include administrative duties and RPG III program analysis. I will assist with supporting operational tasks. Additionally, I'll analyse and troubleshoot issues in RPG III programs to ensure system reliability and optimize system performance.</p>
              </div>
              <div className="tags">
                <span>AS400</span>
                <span>DB2</span>
                <span>JD Edwards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 