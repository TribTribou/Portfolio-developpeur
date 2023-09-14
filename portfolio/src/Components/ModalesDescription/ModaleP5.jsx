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

function ModalP5({ onClose }) {
   const modalRef = useRef();

   const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };
  return (
    <ModalOverlay onClick={handleClickOutside}>
    <ModalContainer ref={modalRef}>
      <Title>Projet Nina Carducci - Debug et Optimisation </Title>
      <SubTitle>Mission :</SubTitle>
      <Paragraph>
      Vous etes developpeur freelance, et vous decidez de proposer vos services d'optimisation SEO a de nouveaux clients.
      <br/>Parmi vos prospects, il y a le site de Nina Carducci, une photographe dont vous a parle l'un de vos amis.
      <br/><br/>Nina repond positivement et vous demande une optimisation de son site.
      </Paragraph>
      <SubTitle>Problematiques :</SubTitle>
      <Paragraph>
        Il a fallu determiner la source du bug pour le corriger. J'ai utiliser les outils d'inspection sur navigateur, les points d'arret,
        <br/>mais surtout beaucoup de logique.
        <br/><br/>Pour l'optimisation, c'etait essentiellement du travail sur les images du site, avec un peu de SEO.
        <br/>Le site apres optimisation charge en moins d'une seconde, contre plus de 10s a l'origine.
      </Paragraph>
      <SubTitle>Competences et outils utilisees</SubTitle>
      <IconContainer>
        Inspection sur navigateur -Firefox et Chrome, Lighthouse, traitement d'images sur la qualite, les dimensions et le poids, Optimisation SEO.
        {/* Ajoutez d'autres icônes si nécessaire */}
      </IconContainer>
      <ProjectLink href="https://tribtribou.github.io/nina-carducci.github.io/" target="_blank">
        Voir le projet
      </ProjectLink>
      <BoutonFermer onClick={onClose}>Fermer</BoutonFermer>
    </ModalContainer>
    </ModalOverlay>
  );
}

export default ModalP5;