import React from 'react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { content } = useTheme();

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>{content.aboutTitle}</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am an AI &amp; ML Consultant with hands-on project experience in scalable machine learning solutions using Computer Vision, and Deep Learning (PyTorch, TensorFlow) . Skilled in end-to-end AI automation, Docker, Kubernetes, and building production-ready systems on Google Cloud Platform. Former AS/400 Programmer for Caterpillar (Netherlands) with experience in JD Edwards ERP and manufacturing systems.
            </p>
          </div>
          <div className="about-details">
            <div className="detail-item">
              <span className="detail-title">Name:</span>
              <span className="detail-info">Siva Subramanian</span>
            </div>
            <div className="detail-item">
              <span className="detail-title">Email:</span>
              <span className="detail-info">sivasubramaniam141@gmail.com</span>
            </div>
            <div className="detail-item">
              <span className="detail-title">Phone:</span>
              <span className="detail-info">+91 9150908294</span>
            </div>
            <div className="detail-item">
              <span className="detail-title">Location:</span>
              <span className="detail-info">Mylapore, Chennai - 600004</span>
            </div>
            <div className="detail-item">
              <span className="detail-title">Languages:</span>
              <span className="detail-info">English, Tamil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 