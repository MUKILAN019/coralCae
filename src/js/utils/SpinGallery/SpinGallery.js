import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import styles from './SpinGallery.scss';

gsap.registerPlugin(Draggable);

// Load images from public folder
const starfish = '/assets/starfish.png';
const tortoise = '/assets/tortoise.png';
const seahorse = '/assets/seahorse.png';

const SpinGallery = () => {
  const containerRef = useRef(null);
  const tortoiseRef = useRef(null);
  const starfishRef = useRef(null);
  const seahorseRef = useRef(null);
  const instructionRef = useRef(null);
  const [interactionCount, setInteractionCount] = useState(0);
  
  useEffect(() => {
    // Initial animations
    gsap.fromTo([tortoiseRef.current, starfishRef.current, seahorseRef.current], 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "back.out(1.7)" }
    );
    
    // Show instructions
    gsap.to(instructionRef.current, {
      opacity: 1,
      duration: 1,
      delay: 1
    });
    
    // Ambient animations
    gsap.to([tortoiseRef.current, starfishRef.current, seahorseRef.current], {
      y: "+=10",
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: 0.5
    });
    
    // Create draggable instances
    const tortoiseDrag = Draggable.create(tortoiseRef.current, {
      type: 'x',
      bounds: containerRef.current,
      onDragStart: () => {
        // Scale up when dragging starts
        gsap.to(tortoiseRef.current, { scale: 1.2, duration: 0.2 });
        
        // Show tooltip
        showTooltip(tortoiseRef.current, "Swimming!");
        
        // Count interaction
        setInteractionCount(prev => prev + 1);
      },
      onDrag: function() {
        // Create water trail effect
        if (Math.random() > 0.7) {
          createWaterTrail(this.pointerX, this.pointerY);
        }
      },
      onDragEnd: () => {
        // Scale back to normal when dragging ends
        gsap.to(tortoiseRef.current, { scale: 1, duration: 0.2 });
        
        // Create splash effect
        createSplash(tortoiseRef.current);
      }
    });
    
    const starfishDrag = Draggable.create(starfishRef.current, {
      type: 'rotation',
      inertia: true,
      onDragStart: () => {
        // Scale up when dragging starts
        gsap.to(starfishRef.current, { scale: 1.2, duration: 0.2 });
        
        // Show tooltip
        showTooltip(starfishRef.current, "Wheee!");
        
        // Count interaction
        setInteractionCount(prev => prev + 1);
      },
      onDragEnd: () => {
        // Scale back to normal when dragging ends
        gsap.to(starfishRef.current, { scale: 1, duration: 0.2 });
        
        // Create sparkle effect
        createSparkles(starfishRef.current);
      }
    });
    
    const seahorseDrag = Draggable.create(seahorseRef.current, {
      type: 'x,y',
      bounds: containerRef.current,
      onDragStart: () => {
        // Scale up when dragging starts
        gsap.to(seahorseRef.current, { scale: 1.2, duration: 0.2 });
        
        // Show tooltip
        showTooltip(seahorseRef.current, "Let's explore!");
        
        // Count interaction
        setInteractionCount(prev => prev + 1);
      },
      onDragEnd: () => {
        // Scale back to normal when dragging ends
        gsap.to(seahorseRef.current, { scale: 1, duration: 0.2 });
        
        // Create ripple effect
        createRipple(seahorseRef.current);
      }
    });
    
    // Check for achievements
    const achievementCheck = setInterval(() => {
      if (interactionCount === 5) {
        showAchievement("Marine Friend");
      } else if (interactionCount === 10) {
        showAchievement("Ocean Explorer");
      }
    }, 500);
    
    // Clean up
    return () => {
      tortoiseDrag[0].kill();
      starfishDrag[0].kill();
      seahorseDrag[0].kill();
      clearInterval(achievementCheck);
    };
  }, [interactionCount]);
  
  const showTooltip = (element, text) => {
    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = styles.tooltip;
    tooltip.textContent = text;
    
    // Get element position
    const rect = element.getBoundingClientRect();
    
    // Position tooltip above element
    tooltip.style.left = rect.left + rect.width/2 + 'px';
    tooltip.style.top = rect.top - 30 + 'px';
    
    // Add to document
    document.body.appendChild(tooltip);
    
    // Animate and remove
    gsap.fromTo(tooltip, 
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.3, onComplete: () => {
        gsap.to(tooltip, { 
          opacity: 0, 
          y: -10, 
          delay: 1, 
          duration: 0.3, 
          onComplete: () => document.body.removeChild(tooltip) 
        });
      }}
    );
  };
  
  const createWaterTrail = (x, y) => {
    // Create bubble element
    const bubble = document.createElement('div');
    bubble.className = styles.waterBubble;
    
    // Position at cursor
    bubble.style.left = x + 'px';
    bubble.style.top = y + 'px';
    
    // Add to document
    document.body.appendChild(bubble);
    
    // Animate and remove
    gsap.to(bubble, {
      y: '-=50',
      x: `+=${Math.random() * 20 - 10}`,
      opacity: 0,
      duration: 1,
      onComplete: () => document.body.removeChild(bubble)
    });
  };
  
  const createSplash = (element) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width/2;
    const centerY = rect.top + rect.height/2;
    
    // Create multiple droplets
    for (let i = 0; i < 8; i++) {
      const droplet = document.createElement('div');
      droplet.className = styles.splashDroplet;
      
      // Position at element center
      droplet.style.left = centerX + 'px';
      droplet.style.top = centerY + 'px';
      
      // Add to document
      document.body.appendChild(droplet);
      
      // Animate in random direction and remove
      const angle = (Math.PI * 2 / 8) * i;
      gsap.to(droplet, {
        x: Math.cos(angle) * 50,
        y: Math.sin(angle) * 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => document.body.removeChild(droplet)
      });
    }
  };
  
  const createSparkles = (element) => {
    const rect = element.getBoundingClientRect();
    
    // Create multiple sparkles
    for (let i = 0; i < 12; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = styles.sparkle;
      
      // Random position around the element
      const x = rect.left + Math.random() * rect.width;
      const y = rect.top + Math.random() * rect.height;
      sparkle.style.left = x + 'px';
      sparkle.style.top = y + 'px';
      
      // Add to document
      document.body.appendChild(sparkle);
      
      // Animate and remove
      gsap.fromTo(sparkle,
        { scale: 0, opacity: 1 },
        { 
          scale: 1,
          opacity: 0,
          duration: 0.8 + Math.random() * 0.5,
          ease: "power1.out",
          onComplete: () => document.body.removeChild(sparkle)
        }
      );
    }
  };
  
  const createRipple = (element) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width/2;
    const centerY = rect.top + rect.height/2;
    
    // Create ripple element
    const ripple = document.createElement('div');
    ripple.className = styles.ripple;
    
    // Position at element center
    ripple.style.left = centerX + 'px';
    ripple.style.top = centerY + 'px';
    
    // Add to document
    document.body.appendChild(ripple);
    
    // Animate and remove
    gsap.fromTo(ripple,
      { width: 0, height: 0, opacity: 1 },
      { 
        width: 100,
        height: 100,
        opacity: 0,
        duration: 1,
        ease: "sine.out",
        onComplete: () => document.body.removeChild(ripple)
      }
    );
  };
  
  const showAchievement = (text) => {
    // Create achievement element
    const achievement = document.createElement('div');
    achievement.className = styles.achievement;
    achievement.innerHTML = `<div class="${styles.achievementIcon}">🏆</div><div>${text}</div>`;
    
    // Add to document
    document.body.appendChild(achievement);
    
    // Animate in and out
    gsap.fromTo(achievement,
      { x: -200, opacity: 0 },
      { 
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        onComplete: () => {
          gsap.to(achievement, { 
            x: -200, 
            opacity: 0, 
            delay: 3, 
            duration: 0.5,
            ease: "back.in(1.7)",
            onComplete: () => document.body.removeChild(achievement) 
          });
        }
      }
    );
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.waterBackground}></div>
    
      <div className={styles.wrapper}>
        <div
          className={`${styles.flair} ${styles.tortoise}`}
          style={{ backgroundImage: `url(${tortoise})` }}
          ref={tortoiseRef}
        ></div>
      </div>
      
      <div className={styles.wrapper}>
        <div
          className={`${styles.flair} ${styles.starfish}`}
          style={{ backgroundImage: `url(${starfish})` }}
          ref={starfishRef}
        ></div>
      </div>
      
      <div className={styles.wrapper}>
        <div
          className={`${styles.flair} ${styles.seahorse}`}
          style={{ backgroundImage: `url(${seahorse})` }}
          ref={seahorseRef}
        ></div>
      </div>
      
      <h4 className={styles.instruction} ref={instructionRef}>
        🐢 Drag the Tortoise | ⭐ Spin the Starfish | 🐴 Move the Seahorse!
      </h4>
    </div>
  );
};

export default SpinGallery;