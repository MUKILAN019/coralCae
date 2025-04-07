import React, { useRef, useEffect, useState } from 'react';
import styles from './SpinGallery.scss';

const SpinGallery = () => {
  const containerRef = useRef(null);
  const tortoiseRef = useRef(null);
  const starfishRef = useRef(null);
  const seahorseRef = useRef(null);
  const instructionRef = useRef(null);
  const [interactionCount, setInteractionCount] = useState(0);

  useEffect(() => {
    instructionRef.current.style.opacity = 1;
  }, []);

  const handleDrag = (e, ref, axis = 'both') => {
    const element = ref.current;
    const shiftX = e.clientX - element.getBoundingClientRect().left;
    const shiftY = e.clientY - element.getBoundingClientRect().top;

    const moveAt = (pageX, pageY) => {
      const containerRect = containerRef.current.getBoundingClientRect();
      const elWidth = element.offsetWidth;
      const elHeight = element.offsetHeight;

      let newLeft = pageX - containerRect.left - shiftX;
      let newTop = pageY - containerRect.top - shiftY;

      if (axis === 'x') {
        element.style.left = `${Math.min(Math.max(newLeft, 0), containerRect.width - elWidth)}px`;
      } else if (axis === 'y') {
        element.style.top = `${Math.min(Math.max(newTop, 0), containerRect.height - elHeight)}px`;
      } else {
        element.style.left = `${Math.min(Math.max(newLeft, 0), containerRect.width - elWidth)}px`;
        element.style.top = `${Math.min(Math.max(newTop, 0), containerRect.height - elHeight)}px`;
      }
    };

    const onMouseMove = (e) => moveAt(e.pageX, e.pageY);

    document.addEventListener('mousemove', onMouseMove);

    document.onmouseup = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.onmouseup = null;
    };
  };

  const onDragStart = (e) => e.preventDefault();

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.waterBackground}></div>

      <div
        className={`${styles.flair} ${styles.tortoise}`}
        ref={tortoiseRef}
        onMouseDown={(e) => {
          setInteractionCount((prev) => prev + 1);
          handleDrag(e, tortoiseRef, 'x');
        }}
        onDragStart={onDragStart}
        style={{ backgroundImage: 'url(/assets/tortoise.png)' }}
      />

      <div
        className={`${styles.flair} ${styles.starfish}`}
        ref={starfishRef}
        onMouseDown={(e) => {
          setInteractionCount((prev) => prev + 1);
          handleDrag(e, starfishRef, 'y');
        }}
        onDragStart={onDragStart}
        style={{ backgroundImage: 'url(/assets/starfish.png)' }}
      />

      <div
        className={`${styles.flair} ${styles.seahorse}`}
        ref={seahorseRef}
        onMouseDown={(e) => {
          setInteractionCount((prev) => prev + 1);
          handleDrag(e, seahorseRef);
        }}
        onDragStart={onDragStart}
        style={{ backgroundImage: 'url(/assets/seahorse.png)' }}
      />

      <h4 className={styles.instruction} ref={instructionRef}>
        🐢 Drag the Tortoise | ⭐ Drag the Starfish | 🐴 Drag the Seahorse!
      </h4>
    </div>
  );
};

export default SpinGallery;
