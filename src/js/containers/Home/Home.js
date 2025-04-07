import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import css from "./Home.scss";
import Card from "../../utils/Cards/Cards";
import InfoCard from "../../utils/Info/Info";




function Home() {
  return (
    <div className={css.homeContainer}>
      <Navbar />

      <div className={css.heroSection}>
        <video
          className={css.backgroundVideo}
          src="assets/coralvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={css.videoOverlay} />

        {/* Decorative blurred circles */}
        <div className={`${css.circle} ${css.circleLeft}`} />
        <div className={`${css.circle} ${css.circleRight}`} />

        <div className={css.heroContent}>
          <h1>
            Dive Into the Future of{" "}
            <span className={css.highlightText}>Coral Conservation</span>
          </h1>
          <p>
            Using real-time monitoring, data visualization, and AI-driven insights
            to track and protect reef health worldwide.
          </p>
          <div className={css.buttonGroup}>
            <button className={css.primaryBtn}>Explore Dashboard</button>
            <button className={css.outlineBtn}>Learn More</button>
          </div>
        </div>
      </div>
      <Card />
      <InfoCard/>
     
      <Footer />
    </div>
  );
}

export default Home;
