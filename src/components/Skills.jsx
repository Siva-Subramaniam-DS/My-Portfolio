import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { content } = useTheme();

  const softSkills = [
    { icon: 'users', title: 'Team Collaboration' },
    { icon: 'lightbulb', title: 'Problem Solving' },
    { icon: 'comments', title: 'Communication' },
    { icon: 'tasks', title: 'Project Management' },
    { icon: 'clock', title: 'Time Management' },
    { icon: 'brain', title: 'Adaptability' }
  ];

  const technicalSkills = [
    { 
      icon: 'brain', 
      title: 'AI & Machine Learning',
      items: ['Deep Learning', 'Computer Vision', 'Neural Networks', 'PyTorch', 'TensorFlow', 'scikit-learn', 'OpenCV']
    },
    { 
      icon: 'code', 
      title: 'Programming Languages',
      items: ['Python (Flask, Django)', 'JavaScript (React, ES6+)', 'HTML5 / CSS3', 'GSAP Animations', 'RPG III (AS/400)']
    },
    { 
      icon: 'chart-bar', 
      title: 'Data Analytics',
      items: ['Power BI', 'Tableau', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn']
    },
    { 
      icon: 'database', 
      title: 'Databases & Storage',
      items: ['MongoDB', 'DB2', 'SQL', 'Big Data']
    },
    { 
      icon: 'cloud', 
      title: 'DevOps & Cloud',
      items: ['Docker', 'Kubernetes', 'Google Cloud (GCP)']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>{content.skillsTitle}</h2>
          <div className="underline"></div>
        </div>
        <div className="skills-content">
          <div className="skill-category">
            <h3>Soft Skills</h3>
            <div className="soft-skills stagger-animate">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill hover-lift">
                  <div className="soft-skill-icon">
                    <i className={`fas fa-${skill.icon}`}></i>
                  </div>
                  <h4>{skill.title}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Technical Skills</h3>
            <div className="soft-skills stagger-animate">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="soft-skill hover-lift">
                  <div className="soft-skill-icon">
                    <i className={`fas fa-${skill.icon}`}></i>
                  </div>
                  <h4>{skill.title}</h4>
                  {skill.items && (
                    <div className="skill-tags">
                      {skill.items.map((item, itemIdx) => (
                        <span key={itemIdx} className="skill-tag">{item}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 