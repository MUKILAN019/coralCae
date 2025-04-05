import React, { useEffect, useRef } from 'react';
import Gallery from '../../utils/Gallery/Gallery';
import css from './About.scss';
import Navbar from '../../components/Navbar/Navbar';
import SpinGallery from '../../utils/SpinGallery/SpinGallery';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const titleRef = useRef(null);
  const paragraphRefs = useRef([]);
  const headingRefs = useRef([]);
  const sectionRef = useRef(null);
  
  const addToParagraphRefs = el => {
    if (el && !paragraphRefs.current.includes(el)) {
      paragraphRefs.current.push(el);
    }
  };
  
  const addToHeadingRefs = el => {
    if (el && !headingRefs.current.includes(el)) {
      headingRefs.current.push(el);
    }
  };
  
  useEffect(() => {
    // Animate the title
    gsap.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
    
    // Animate paragraphs with stagger
    gsap.from(paragraphRefs.current, {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.3
    });
    
    // Animate section headings
    gsap.from(headingRefs.current, {
      x: -30,
      opacity: 0,
      stagger: 0.3,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 0.5
    });
    
    // Create floating bubbles
    const createBubbles = () => {
      const bubblesContainer = document.querySelector(`.${css.bubblesContainer}`);
      if (!bubblesContainer) return;
      
      for (let i = 0; i < 15; i++) {
        const bubble = document.createElement('div');
        bubble.className = css.bubble;
        
        // Random positioning and sizing
        const size = Math.random() * 30 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;
        
        bubblesContainer.appendChild(bubble);
      }
    };
    
    createBubbles();
    
    // Set up parallax effect for description section
    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        },
        y: (i, target) => -ScrollTrigger.maxScroll(window) * 0.1,
        ease: "none"
      });
    }
    
    // Water ripple effect
    document.addEventListener('mousemove', (e) => {
      const ripple = document.createElement('div');
      ripple.className = css.ripple;
      ripple.style.left = `${e.pageX}px`;
      ripple.style.top = `${e.pageY}px`;
      document.body.appendChild(ripple);
      
      setTimeout(() => {
        document.body.removeChild(ripple);
      }, 2000);
    });
    
    // Set up highlight pulse animation
    const highlightAnimation = () => {
      gsap.to(`.${css.highlight}`, {
        boxShadow: '0 0 15px rgba(0, 212, 255, 0.8)',
        duration: 1.5,
        repeat: -1,
        yoyo: true
      });
    };
    
    highlightAnimation();
    
  }, []);

  return (
    <div className={css.aboutPageWrapper}>
      <div className={css.oceanBackground}></div>
      <div className={css.bubbleOverlay}></div>
      <div className={css.bubblesContainer}></div>
      
      <Navbar />
      
      <div className={css.aboutPage}>
        <section className={css.descriptionSection} ref={sectionRef}>
          <h1 className={css.animatedTitle}>
            <span className={css.waveText}>🌊</span> About Us
          </h1>
          
          <div className={css.card}>
            <p >
              Hi! We're <strong className={css.highlight}>Pranava</strong> and <strong className={css.highlight}>Mukilan</strong>, two friends passionate about marine life and the sustainable development of coral reefs. This project is our small step toward protecting one of Earth's most precious ecosystems.
            </p>
          </div>

          <h2  >
            <span className={css.icon}>💡</span> What Inspired Us?
          </h2>
          <div className={css.card}>
            <p >
              We were deeply moved after learning about the Great Barrier Reef's decline. Over half of its shallow-water corals were lost to bleaching and pollution in recent years. But what truly sparked us was how local communities and scientists came together to help restore parts of it.
            </p>
            <p >
              That story reminded us: <em className={css.emphasis}>change starts with awareness and action</em>.
            </p>
          </div>

          <h2 >
            <span className={css.icon}>💬</span> Our Mission
          </h2>
          <div className={css.card}>
            <p >
              We want to spread the message that everyone can help protect coral reefs, even through small actions — reducing plastic use, supporting ocean-friendly products, or simply learning more. We believe that through creativity and education, we can inspire change.
            </p>
          </div>
          
          <div className={css.thankYouCard}>
            <p >Thank you for being a part of our journey! <span className={css.emoji}>🐚🌍</span></p>
          </div>
        </section>

        <section className={css.gallerySection}>
          <div className={css.galleryContainer}>
            <h2 className={css.galleryTitle}>Explore Our Gallery</h2>
            <Gallery />
            <div className={css.divider}></div>
            <h2 className={css.galleryTitle}>Interactive Zone</h2>
            <SpinGallery />
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;