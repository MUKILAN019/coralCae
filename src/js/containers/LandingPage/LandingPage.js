import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

const LandingPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <Container>
        <spline-viewer
          url="https://prod.spline.design/TVGHQBRD8H3KCp0t/scene.splinecode"
          className="spline-background"
        />
        <BlurOverlay />
        <ButtonContainer>
          <GradientButton>
            <Shine />
            <ButtonText><a href="/home">Go to Home</a></ButtonText>
          </GradientButton>
        </ButtonContainer>
      </Container>
    </>
  );
};

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: #ffffd4;
  overflow: hidden;

  .spline-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 110%;
    height: 100%;
    pointer-events: none;
  }
`;

const BlurOverlay = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent 70%);
  filter: blur(100px);
  z-index: 0;
  animation: float 6s ease-in-out infinite alternate;

  @keyframes float {
    0% { transform: translateY(0px); }
    100% { transform: translateY(20px); }
  }
`;

const Subtitle = styled.h2`
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const GradientButton = styled.button`
  padding: 1.2rem 4.5rem;
  border: none;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(41, 51, 184, 0.3);
  animation: pulse 2s infinite ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background: linear-gradient(135deg, #2a35cc 0%, #4c5fff 100%);
    box-shadow: 0 0 20px rgba(58, 75, 255, 0.6),
                0 0 40px rgba(58, 75, 255, 0.4),
                0 0 60px rgba(58, 75, 255, 0.2);
  }

  &:active {
    transform: scale(0.96);
    background: linear-gradient(135deg, #1c238a 0%, #2a35cc 100%);
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.04);
    }
  }
`;

const Shine = styled.span`
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transform: skewX(-20deg);
  pointer-events: none;

  ${GradientButton}:hover & {
    animation: shine 1.5s forwards;
  }

  @keyframes shine {
    100% {
      left: 125%;
    }
  }
`;

const ButtonText = styled.span`
  position: relative;
  z-index: 1;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  letter-spacing: 1px;
  color: #fff;
  text-transform: uppercase;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default LandingPage;
