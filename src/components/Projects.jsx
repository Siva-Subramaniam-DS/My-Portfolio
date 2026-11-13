import React, { useEffect, useState } from 'react';
import faceRecognitionImage from '../assets/Intelligent Face Recognition.png';
import faceRegisteredImage from '../assets/Face Registered.png';
import faceDetectingImage from '../assets/Face Detecting.png';
import staticPageImage from '../assets/Static Page.png';
import trainingHistoryImage from '../assets/training_history.png';
import registeredCompletedImage from '../assets/Registered Completed.png';
import loanBankImage from '../assets/Loan Bank.png';
import loanBank1Image from '../assets/Loan Bank1.png';
import loanBank2Image from '../assets/Loan Bank2.png';
import bezalelInteriorsImage from '../assets/bezalel-interiors.png';
import bezalelInteriors1Image from '../assets/bezalel-interiors1.png';
import bezalelInteriors2Image from '../assets/bezalel-interiors2.png';
import solarImage from '../assets/Solar.png';
import appStoreImage from '../assets/app store.png';
import rajaRanjiVideo from '../assets/RajaRanj.mp4';
import rajaRanjiPoster from '../assets/Raja Ranji Poster.png';
import geoGreen1 from '../assets/GeoGreenAi/Screenshot 2026-03-02 070745.png';
import geoGreen2 from '../assets/GeoGreenAi/Screenshot 2026-03-02 070755.png';
import geoGreen3 from '../assets/GeoGreenAi/Screenshot 2026-03-02 070812.png';
import geoGreen4 from '../assets/GeoGreenAi/Screenshot 2026-03-02 070823.png';
import geoGreen5 from '../assets/GeoGreenAi/Screenshot 2026-03-02 070840.png';
import geoGreen6 from '../assets/GeoGreenAi/Screenshot 2026-03-02 070858.png';
import geoGreen7 from '../assets/GeoGreenAi/Screenshot 2026-03-02 070914.png';
import geoGreen8 from '../assets/GeoGreenAi/Screenshot 2026-03-02 071104.png';
import botImage from '../assets/Bot.png';
import { useTheme } from '../context/ThemeContext';

const GITHUB = 'https://github.com/Siva-Subramaniam-DS';

const projects = [
  {
    featured: true,
    category: 'ai',
    tone: 'finance',
    icon: 'fas fa-scale-balanced',
    kicker: 'Multi-agent · Gemini',
    title: 'FinCouncil AI',
    description: 'A financial deliberation committee of agents that reviews a retail asset, models risk, and explains the decision.',
    tags: ['TypeScript', 'Gemini', 'Multi-agent'],
    codeLink: `${GITHUB}/fincouncil-ai`
  },
  {
    featured: true,
    category: 'ai',
    tone: 'debate',
    icon: 'fas fa-comments',
    kicker: 'Reasoning · Gemini',
    title: 'AI Debate Coach',
    description: 'Builds structured pro and con arguments, flags weak logic, and spars with you on a topic.',
    tags: ['TypeScript', 'Gemini', 'Argumentation'],
    codeLink: `${GITHUB}/AI-Debate-Coach`
  },
  {
    featured: true,
    category: 'ai',
    tone: 'docs',
    icon: 'fas fa-book-open',
    kicker: 'Grounded assistant',
    title: 'Developer Knowledge Assistant',
    description: 'A Streamlit assistant that answers from official Google Cloud, Firebase, Android, and Maps documentation.',
    tags: ['Python', 'Gemini', 'Streamlit'],
    codeLink: `${GITHUB}/grounded-developer-assistant`
  },
  {
    featured: true,
    category: 'ai',
    tone: 'fitness',
    icon: 'fas fa-dumbbell',
    kicker: 'Genetic algorithm',
    title: 'ACTIVEA Session Planner',
    description: 'Plans one exercise session from the ACTIVEA brief by searching workout combinations with a genetic algorithm.',
    tags: ['Python', 'Optimization', 'Fitness'],
    codeLink: `${GITHUB}/ACTIVEA-project`
  },
  {
    featured: true,
    category: 'ai',
    tone: 'fire',
    icon: 'fas fa-fire',
    kicker: 'Patent · Computer vision',
    title: 'FireGuard IoT',
    description: 'An IoT and computer-vision system for the same real-time fire and smoke detection work as the 2024 patent.',
    tags: ['Python', 'Computer Vision', 'IoT'],
    codeLink: `${GITHUB}/FireGuard-IoT-System`
  },
  {
    featured: true,
    category: 'ai',
    tone: 'vision',
    icon: 'fas fa-city',
    kicker: 'Segmentation',
    title: 'Cityscapes Segmentation',
    description: 'A segmentation pipeline trained on the Cityscapes street-scene dataset.',
    tags: ['Python', 'Computer Vision', 'Segmentation'],
    codeLink: `${GITHUB}/Cityscapes-Image-Segmentation-Pipeline`
  },
  {
    category: 'ai',
    tone: 'gesture',
    icon: 'fas fa-hand',
    kicker: 'Computer vision',
    title: 'Hand Sign Model',
    description: 'A vision model that classifies hand signs from camera frames.',
    tags: ['Python', 'OpenCV', 'Deep Learning'],
    codeLink: `${GITHUB}/Hand_Sign_Model`
  },
  {
    category: 'ai',
    tone: 'music',
    icon: 'fab fa-spotify',
    kicker: 'Gesture control',
    title: 'Hand Gesture Spotify Control',
    description: 'Drives Spotify playback from recognized hand gestures.',
    tags: ['Python', 'OpenCV', 'Spotify'],
    codeLink: `${GITHUB}/Hand-Gesture-Spotify-Control`
  },
  {
    category: 'ai',
    tone: 'finance',
    icon: 'fas fa-piggy-bank',
    kicker: 'LLM analytics',
    title: 'Fixed Deposit Insights',
    description: 'Uses an LLM to read fixed-deposit data and surface the patterns in it.',
    tags: ['Python', 'LLM', 'Finance'],
    codeLink: `${GITHUB}/Fixed-Deposit-Insights-Analysis-LLM`
  },
  {
    category: 'ai',
    tone: 'agri',
    icon: 'fas fa-seedling',
    kicker: 'AgriTech',
    title: 'Kaggriculture',
    description: 'Agricultural analytics work connected to the rover field tests.',
    tags: ['Python', 'AgriTech', 'Analytics'],
    codeLink: `${GITHUB}/Kaggriculture-project`
  },
  {
    category: 'web',
    image: botImage,
    title: 'Discord Automation Bot',
    description: 'A Discord automation platform for scheduled notifications, content generation, and multi-tool workflows across community servers.',
    tags: ['Discord Bot', 'Automation', 'Python'],
    demoLink: 'https://discord.com/users/1513375315181699213',
    demoIcon: 'fab fa-discord',
    demoLabel: 'Discord',
    codeLink: 'protected'
  },
  {
    category: 'ai',
    image: geoGreen1,
    title: 'GeoGreenAI',
    description: 'An environmental analytics platform that reads satellite imagery for green cover, urban density, and air quality.',
    tags: ['AI', 'Satellite Imagery', 'Analytics'],
    demoLink: 'multiple',
    demoOptions: [
      { name: 'Dashboard', image: geoGreen1 },
      { name: 'Coverage view', image: geoGreen2 },
      { name: 'Density view', image: geoGreen3 },
      { name: 'Air quality', image: geoGreen4 },
      { name: 'Region compare', image: geoGreen5 },
      { name: 'Trend view', image: geoGreen6 },
      { name: 'Report', image: geoGreen7 },
      { name: 'Export', image: geoGreen8 }
    ],
    codeLink: 'protected'
  },
  {
    category: 'web',
    image: rajaRanjiPoster,
    title: 'Raja Ranji',
    description: 'A web version of the traditional South Indian board game, with responsive play and a recorded demo.',
    tags: ['React', 'JavaScript', 'CSS'],
    demoLink: 'video',
    videoSrc: rajaRanjiVideo,
    codeLink: 'protected'
  },
  {
    category: 'ai',
    image: faceRecognitionImage,
    title: 'Intelligent Face Recognition',
    description: 'Real-time face detection, recognition, and enrollment, with a training-history view.',
    tags: ['Python', 'OpenCV', 'TensorFlow'],
    demoLink: 'multiple',
    demoOptions: [
      { name: 'Main interface', image: faceRecognitionImage },
      { name: 'Face registration', image: faceRegisteredImage },
      { name: 'Face detection', image: faceDetectingImage },
      { name: 'Static page', image: staticPageImage },
      { name: 'Training history', image: trainingHistoryImage },
      { name: 'Registration complete', image: registeredCompletedImage }
    ],
    codeLink: `${GITHUB}/intelligent-face-recognition`
  },
  {
    category: 'ai',
    image: loanBankImage,
    title: 'Loan Approval Prediction',
    description: 'Predicts loan approval from financial and personal factors, with a Streamlit interface.',
    tags: ['Python', 'Streamlit', 'Machine Learning'],
    demoLink: 'multiple',
    demoOptions: [
      { name: 'Loan form', image: loanBankImage },
      { name: 'Prediction result', image: loanBank1Image },
      { name: 'Applicant details', image: loanBank2Image }
    ],
    codeLink: `${GITHUB}/Loan-Approval`
  },
  {
    category: 'design',
    image: bezalelInteriorsImage,
    title: 'Bezalel Interiors',
    description: 'A responsive portfolio site for a high-end interior studio, with fluid page transitions.',
    tags: ['HTML5', 'React', 'CSS3', 'GSAP'],
    liveLink: 'https://bezalelinterior.com/#home',
    demoLink: 'multiple',
    demoOptions: [
      { name: 'Home', image: bezalelInteriorsImage },
      { name: 'Portfolio', image: bezalelInteriors1Image },
      { name: 'Services', image: bezalelInteriors2Image }
    ],
    codeLink: 'protected'
  },
  {
    category: 'design',
    image: solarImage,
    title: 'Solar Energy Dashboard',
    description: 'A live dashboard for solar generation, panel efficiency, and energy use at Konsun Energy.',
    tags: ['React', 'JavaScript', 'CSS'],
    liveLink: 'http://konsunenergy.in',
    codeLink: 'protected'
  },
  {
    category: 'ai',
    image: appStoreImage,
    title: 'App Store Analysis',
    description: 'Explores Google Play and Apple App Store ratings and reviews, stored in MongoDB and served with Streamlit.',
    tags: ['Python', 'MongoDB', 'Streamlit'],
    liveLink: 'https://ds-app-sentiment.streamlit.app/',
    liveLabel: 'Open app',
    codeLink: `${GITHUB}/DS-App`
  }
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI' },
  { id: 'web', label: 'Web' },
  { id: 'design', label: 'Design' }
];

const Projects = () => {
  const { content } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewer, setViewer] = useState(null);

  useEffect(() => {
    if (!viewer) return undefined;

    const onKey = (event) => {
      if (event.key === 'Escape') {
        setViewer(null);
        return;
      }
      if (viewer.type !== 'gallery') return;
      if (event.key === 'ArrowLeft') {
        setViewer((current) => ({
          ...current,
          index: (current.index - 1 + current.images.length) % current.images.length
        }));
      }
      if (event.key === 'ArrowRight') {
        setViewer((current) => ({
          ...current,
          index: (current.index + 1) % current.images.length
        }));
      }
    };

    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [viewer]);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  const openGallery = (project) => {
    setViewer({
      type: 'gallery',
      title: project.title,
      images: project.demoOptions,
      index: 0
    });
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>{content.projectsTitle}</h2>
          <div className="underline"></div>
        </div>
        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`filter-btn hover-lift ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="projects-gallery stagger-animate">
          {filteredProjects.map((project) => (
            <article key={project.title} className="gallery-item hover-lift" data-category={project.category}>
              <div className="gallery-image">
                {project.featured && <span className="featured-pill">Featured</span>}
                {project.image ? (
                  <img src={project.image} alt={`${project.title} preview`} />
                ) : (
                  <div className={`project-cover tone-${project.tone}`}>
                    <i className={project.icon} aria-hidden="true"></i>
                    <span>{project.kicker}</span>
                  </div>
                )}
                <div className="gallery-overlay">
                  <div className="gallery-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div className="gallery-links">
                      {project.liveLink && (
                        <a href={project.liveLink} className="gallery-btn demo-btn" target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-arrow-up-right-from-square"></i> {project.liveLabel || 'Live site'}
                        </a>
                      )}
                      {project.demoLink === 'multiple' && (
                        <button type="button" className="gallery-btn demo-btn" onClick={() => openGallery(project)}>
                          <i className="fas fa-images"></i> Gallery
                        </button>
                      )}
                      {project.demoLink === 'video' && (
                        <button
                          type="button"
                          className="gallery-btn demo-btn"
                          onClick={() => setViewer({ type: 'video', title: project.title, src: project.videoSrc })}
                        >
                          <i className="fas fa-play"></i> Watch
                        </button>
                      )}
                      {project.demoLink && project.demoLink !== 'multiple' && project.demoLink !== 'video' && (
                        <a href={project.demoLink} className="gallery-btn demo-btn" target="_blank" rel="noopener noreferrer">
                          <i className={project.demoIcon || 'fas fa-eye'}></i> {project.demoLabel || 'View demo'}
                        </a>
                      )}
                      {project.codeLink === 'protected' ? (
                        <button type="button" className="gallery-btn code-btn" onClick={() => setViewer({ type: 'protected' })}>
                          <i className="fas fa-lock"></i> Private
                        </button>
                      ) : (
                        <a href={project.codeLink} className="gallery-btn code-btn" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-github"></i> View code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {viewer?.type === 'gallery' && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${viewer.title} gallery`}>
          <div className="lightbox-panel">
            <button type="button" className="lightbox-close" onClick={() => setViewer(null)}>
              Close
            </button>
            <div className="lightbox-frame">
              <button
                type="button"
                className="lightbox-nav prev"
                aria-label="Previous image"
                onClick={() => setViewer((current) => ({
                  ...current,
                  index: (current.index - 1 + current.images.length) % current.images.length
                }))}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <img src={viewer.images[viewer.index].image} alt={viewer.images[viewer.index].name} />
              <button
                type="button"
                className="lightbox-nav next"
                aria-label="Next image"
                onClick={() => setViewer((current) => ({
                  ...current,
                  index: (current.index + 1) % current.images.length
                }))}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="lightbox-meta">
              <h3>{viewer.images[viewer.index].name}</h3>
              <p>{viewer.index + 1} of {viewer.images.length}</p>
              <div className="lightbox-thumbs">
                {viewer.images.map((image, index) => (
                  <button
                    key={image.name}
                    type="button"
                    className={index === viewer.index ? 'active' : ''}
                    onClick={() => setViewer((current) => ({ ...current, index }))}
                  >
                    <img src={image.image} alt="" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {viewer?.type === 'video' && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${viewer.title} demo`} onClick={(event) => { if (event.target === event.currentTarget) setViewer(null); }}>
          <div className="lightbox-panel">
            <button type="button" className="lightbox-close" onClick={() => setViewer(null)}>
              Close
            </button>
            <video className="lightbox-video" controls autoPlay src={viewer.src}>
              Your browser does not support the video tag.
            </video>
            <div className="lightbox-meta">
              <h3>{viewer.title}</h3>
              <p>Press Esc to close</p>
            </div>
          </div>
        </div>
      )}

      {viewer?.type === 'protected' && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Private source code" onClick={(event) => { if (event.target === event.currentTarget) setViewer(null); }}>
          <div className="protected-card">
            <div className="protected-icon" aria-hidden="true">🔒</div>
            <h2>Source code is private</h2>
            <p>
              This project was built for a client or contains work that is not public.
              The live demo and screenshots above are the shareable parts.
            </p>
            <p>For a walkthrough or collaboration, use the contact section.</p>
            <button type="button" className="gallery-btn demo-btn" onClick={() => setViewer(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
