import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion to ensure accessibility compliance
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleMediaQueryChange = (e) => {
      setReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    // Track mouse position and update DOM elements directly for 144FPS performance (no React re-renders)
    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${x}px`;
        ringRef.current.style.top = `${y}px`;
      }
      setHidden(false);
    };

    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);
    
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    // Dynamically assign hover event listeners to all interactive/clickable elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input[type="submit"], input[type="button"], select, textarea, [role="button"], .hover-lift, .btn, .nav-links a, .social-links a, .soft-skill, .gallery-item-card, .hamburger, .btn-blog-gallery, .theme-toggle-btn'
      );
      
      interactiveElements.forEach((el) => {
        // Avoid duplicate listeners
        if (el.dataset.hasCursorListener) return;
        el.dataset.hasCursorListener = 'true';
        
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Run initially and set a periodic check for dynamic elements (e.g. new elements in modals or tabs)
    addHoverListeners();
    const interval = setInterval(addHoverListeners, 1000);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      clearInterval(interval);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <>
      <div 
        ref={dotRef} 
        className={`custom-cursor-dot ${hidden ? 'hidden' : ''} ${hovered ? 'hovered' : ''}`}
        aria-hidden="true"
      />
      <div 
        ref={ringRef} 
        className={`custom-cursor-ring ${hidden ? 'hidden' : ''} ${hovered ? 'hovered' : ''} ${clicked ? 'clicked' : ''}`}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
