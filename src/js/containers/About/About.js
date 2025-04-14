import React, { useEffect, useRef } from 'react';
import Gallery from '../../utils/Gallery/Gallery';
import css from './About.scss';
import Navbar from '../../components/Navbar/Navbar';
import SpinGallery from '../../utils/SpinGallery/SpinGallery';

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
    if (titleRef.current) {
      titleRef.current.classList.add(css.fadeInTop);
    }

    // Animate paragraphs with stagger
    paragraphRefs.current.forEach((para, index) => {
      setTimeout(() => {
        para.classList.add(css.fadeInUp);
      }, index * 200);
    });

    // Animate headings with stagger
    headingRefs.current.forEach((heading, index) => {
      setTimeout(() => {
        heading.classList.add(css.fadeInLeft);
      }, index * 300);
    });

    // Create bubbles
    const createBubbles = () => {
      const bubblesContainer = document.querySelector(`.${css.bubblesContainer}`);
      if (!bubblesContainer) return;

      for (let i = 0; i < 15; i++) {
        const bubble = document.createElement('div');
        bubble.className = css.bubble;

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

    // Parallax effect
    const handleScroll = () => {
      if (sectionRef.current) {
        const offset = window.scrollY;
        sectionRef.current.style.transform = `translateY(${offset * -0.1}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Ripple effect
    const handleMouseMove = (e) => {
      const ripple = document.createElement('div');
      ripple.className = css.ripple;
      ripple.style.left = `${e.pageX}px`;
      ripple.style.top = `${e.pageY}px`;
      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 2000);
    };
    document.addEventListener('mousemove', handleMouseMove);

    // Highlight pulse effect
    const highlights = document.querySelectorAll(`.${css.highlight}`);
    highlights.forEach((el) => {
      el.classList.add(css.pulseGlow);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={css.aboutPageWrapper}>
      <div className={css.oceanBackground}></div>
      <div className={css.bubbleOverlay}></div>
      <div className={css.bubblesContainer}></div>

      <Navbar />

      <div className={css.aboutPage}>
        <section className={css.descriptionSection} ref={sectionRef}>
          <h1 className={`${css.animatedTitle}`} ref={titleRef}>
            <span className={css.waveText}>🌊</span> About Us
          </h1>

          <div className={css.card}>
            <p ref={addToParagraphRefs}>
              Hi! We're <strong className={css.highlight}>Pranava</strong> and <strong className={css.highlight}>Mukilan</strong>, two friends passionate about marine life and the sustainable development of coral reefs.
            </p>
          </div>

          <h2 ref={addToHeadingRefs}>
            <span className={css.icon}>💡</span> What Inspired Us?
          </h2>
          <div className={css.card}>
            <p ref={addToParagraphRefs}>
              We were deeply moved after learning about the Great Barrier Reef's decline. Over half of its shallow-water corals were lost.
            </p>
            <p ref={addToParagraphRefs}>
              That story reminded us: <em className={css.emphasis}>change starts with awareness and action</em>.
            </p>
          </div>

          <h2 ref={addToHeadingRefs}>
            <span className={css.icon}>💬</span> Our Mission
          </h2>
          <div className={css.card}>
            <p ref={addToParagraphRefs}>
              We want to spread the message that everyone can help protect coral reefs. Small actions make big impact!
            </p>
          </div>

          <div className={css.thankYouCard}>
            <p ref={addToParagraphRefs}>Thank you for being a part of our journey! <span className={css.emoji}>🐚🌍</span></p>
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
