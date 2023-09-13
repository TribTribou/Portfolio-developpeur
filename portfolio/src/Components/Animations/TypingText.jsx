import React from 'react';
import styled, { keyframes } from 'styled-components';

// Définissez les animations comme des keyframes
const typingLetters = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const typingLines = keyframes`
  from { top: 0; }
  to { top: 100%; }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: red; }
`;

const TypewriterContainer = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  width: 90vw;
  color: #fff;
  overflow: hidden;
  border-right: 0.15em solid red;
  margin-right: 5vw;
  font-size: 1vh;
  white-space: nowrap;
  letter-spacing: 0.15em;
  animation: ${typingLetters} 5s steps(30, end),
             ${blinkCaret} 0.5s step-end infinite;

  @media (max-width: 1200px) {
    font-size: 0.8vh;
  }

  @media (max-width: 950px) {
    font-size: 0.7vh;
  }

  @media (max-width: 800px) {
    font-size: 0.8vh;
    white-space: normal;
    flex-wrap: wrap;
    height: 40vh;
  }

  @media (max-width: 550px) {
    font-size: 0.7vh;
  }

  @media (max-width: 400px) {
    font-size: 0.6vh;
  }
`;

const TypewriterText = styled.h1`
  text-align: center;
  margin-right: -7vh;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    height: 40vh;
    margin-right: 0;
    margin-top: 10%;
    width: 65vw;
    padding-left: 10%;
  }
`;

function AnimatedTypewriter() {
  return (
    <TypewriterContainer>
      <TypewriterText>Bonjour,
        <br/>Je suis Florian BERNARD, developpeur Web.
        <br/><br/>J'ai suivi la formation developpeur Web chez <a href="https://www.openclassrooms.com/" target="_blank">OpenClassroom</a>.
        <br/><br/>J'ai pu realiser differents projets dans un cadre professionnel,
        <br/>evalues ensuite par des professionnels du milieu.
        <br/><br/>Vous pouvez voir mes travaux realises plus bas.</TypewriterText>
    </TypewriterContainer>
  );
}

export default AnimatedTypewriter;

