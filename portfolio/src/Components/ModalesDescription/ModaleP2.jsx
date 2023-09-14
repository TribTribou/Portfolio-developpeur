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

@media (max-width: 600px) {
  font-size: 0.7vh;

  &:hover {
    font-size: 0.8vh;
}
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

  @media (max-width: 600px) {
    font-size: 1.7vh;
    text-shadow: white 0px 0 0vw;
    width: 250px;
  }
`;

const SubTitle = styled.h2`
  color: #8d007d;
  text-shadow: #8d007d 1px 0 1.2vw;
  font-size: 2vh;
  margin-top: 20px;

  @media (max-width: 600px) {
    font-size: 1.5vh;
    text-shadow: #8d007d 0 0 0vw;
  }
`;

const Paragraph = styled.p`
  font-size: 1.5vh;
  line-height: 1.5;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 1vh;
    text-shadow: white 0 0 0;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 1vh;
    text-shadow: white 0 0 0;
  }
`;


const ProjectLink = styled.a`
  display: block;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;

  @media (max-width: 600px) {
    font-size: 1vh;
    text-shadow: red 0 0 0;
  }
`;

function ModalP2({ onClose }) {
   const modalRef = useRef();

   const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };
  return (
    <ModalOverlay onClick={handleClickOutside}>
    <ModalContainer ref={modalRef}>
      <Title>Projet Booki - Html et CSS</Title>
      <SubTitle>Mission :</SubTitle>
      <Paragraph>
       L'entreprise souhaite developper un site Internet qui permette aux usagers de trouver des hebergements et des activites dans la ville de leur choix.
       <br/>Vous etes charge d'integrer l'interface du site avec du code HTML et CSS.
      </Paragraph>
      <SubTitle>Problematiques :</SubTitle>
      <Paragraph>
        C'etait ma premiere experience de developpement Html et Css en conditions. 
        <br/>Je devais apprendre a manier CSS au fur et a mesure de l'avancee du projet.
      </Paragraph>
      <SubTitle>Competences et outils utilisees</SubTitle>
      <IconContainer>
        Html, Css, github
        {/* Ajoutez d'autres icônes si nécessaire */}
      </IconContainer>
      <ProjectLink href="https://tribtribou.github.io/Site_Booki-Projet2OC-/" target="_blank">
        Voir le projet
      </ProjectLink>
      <BoutonFermer onClick={onClose}>Fermer</BoutonFermer>
    </ModalContainer>
    </ModalOverlay>
  );
}

export default ModalP2;