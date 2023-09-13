import React, { useRef } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoutonFermer = styled.button`
background-color: black;
color: red;
font-family: 'Virgo';
font-size: 1.2vh;
border-radius: 5vh;
border-color: red;
text-shadow: red 1px 0 1.2vw;
box-shadow: red 1px 0 1.2vw 0.5vw;
padding: 1%;

&:hover {
    font-size: 1.3vh;
    background-color: red;
    color: black;
}
`

const ModalContainer = styled.div`
  background-color: black;
  opacity: 0.88;
  position:fixed;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 5vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3vh;
`;

const SubTitle = styled.h2`
  color: #8d007d;
  text-shadow: #8d007d 1px 0 1.2vw;
  font-size: 2vh;
  margin-top: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.5vh;
  line-height: 1.5;
  margin-top: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 1.5vh;
`;


const ProjectLink = styled.a`
  display: block;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`;

function ModalP6({ onClose }) {
   const modalRef = useRef();

   const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };
  return (
    <ModalOverlay onClick={handleClickOutside}>
    <ModalContainer ref={modalRef}>
      <Title>Projet Kasa - React </Title>
      <SubTitle>Mission :</SubTitle>
      <Paragraph>
        Kasa vous recrute en tant que developpeur front-end en freelance pour developper sa nouvelle plateforme web.
        <br/>Le site de Kasa a ete code il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. 
        <br/>Laura, la CTO, a donc lance une refonte totale pour passer a une stack complete en JavaScript avec NodeJS cote back-end, et React cote front-end.
      </Paragraph>
      <SubTitle>Problematiques :</SubTitle>
      <Paragraph>
        Decouverte de React. Avec cet outil, la maniere d'aborder le code est differente. 
        <br/>En ajoutant Styled-component, c'est actuellement ce que je prefere utiliser pour developper un site.
        <br/>Le plus difficile etait d'apprendre a demarrer le projet en React puis de le deployer. 
        <br/>En dehors de ca, une fois la methode de structuration apprise, c'est tres agreable a utiliser !
      </Paragraph>
      <SubTitle>Competences et outils utilisees</SubTitle>
      <IconContainer>
        Html, CSS, JavaScript, React, Styled-Component, SASS
        {/* Ajoutez d'autres icônes si nécessaire */}
      </IconContainer>
      <ProjectLink href="https://tribtribou.github.io/P6_kasa/" target="_blank">
        Voir le projet
      </ProjectLink>
      <BoutonFermer onClick={onClose}>Fermer</BoutonFermer>
    </ModalContainer>
    </ModalOverlay>
  );
}

export default ModalP6;