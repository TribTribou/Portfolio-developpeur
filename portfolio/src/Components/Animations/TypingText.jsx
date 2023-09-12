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
  color: #fff;
  overflow: hidden;
  border-right: 0.15em solid red;
  font-size: 0.6rem;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: ${typingLetters} 3.5s steps(30, end),
             ${blinkCaret} 0.5s step-end infinite;
`;

const TypewriterText = styled.h1`
  text-align: center;
  margin-right: -7vh;
`;

function AnimatedTypewriter() {
  return (
    <TypewriterContainer>
      <TypewriterText>Bonjour,
        <br/>Je suis Florian BERNARD, developpeur Web.</TypewriterText>
        <TypewriterText><br/>J'ai suivi la formation developpeur Web chez <a href="https://www.openclassrooms.com/" target="_blank">OpenClassroom</a>.</TypewriterText>
        <TypewriterText>J'ai pu realiser differents projets dans un cadre professionnel,</TypewriterText>
        <TypewriterText>evalues ensuite par des professionnels du milieu.</TypewriterText>
        <TypewriterText><br/>Vous pouvez voir mes travaux realises plus bas.</TypewriterText>
    </TypewriterContainer>
  );
}

export default AnimatedTypewriter;

